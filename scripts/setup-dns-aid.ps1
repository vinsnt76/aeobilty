[CmdletBinding()]
param(
    [Parameter(Mandatory=$false)]
    [string]$ApiToken = $env:CLOUDFLARE_API_TOKEN,

    [Parameter(Mandatory=$false)]
    [string]$Domain = "aeobility.com.au"
)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  DNS for AI Discovery (DNS-AID) - Provisioning Tool" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

if (-not $ApiToken) {
    Write-Host "`nNo Cloudflare API token provided." -ForegroundColor Yellow
    Write-Host "You can automate this by running:" -ForegroundColor Gray
    Write-Host "  .\scripts\setup-dns-aid.ps1 -ApiToken <YOUR_CLOUDFLARE_API_TOKEN>`n" -ForegroundColor Green

    Write-Host "----------------------------------------------------------" -ForegroundColor DarkCyan
    Write-Host "Manual Configuration in Cloudflare Dashboard (5 minutes):" -ForegroundColor DarkCyan
    Write-Host "----------------------------------------------------------" -ForegroundColor DarkCyan
    Write-Host "1. Log into https://dash.cloudflare.com/ and select '$Domain'"
    Write-Host "2. Navigate to 'DNS' -> 'Records' -> 'Add record':`n"

    Write-Host "   Record 1 (A2A Protocol Discovery):" -ForegroundColor Green
    Write-Host "     Type:         HTTPS (or SVCB)"
    Write-Host "     Name:         _a2a._agents"
    Write-Host "     Target:       $Domain"
    Write-Host "     Priority:     1"
    Write-Host "     Value:        alpn=a2a port=443 mandatory=alpn,port"
    Write-Host "     Proxy status: DNS only (Grey Cloud)"
    Write-Host "     TTL:          Auto`n"

    Write-Host "   Record 2 (MCP Protocol Discovery):" -ForegroundColor Green
    Write-Host "     Type:         HTTPS (or SVCB)"
    Write-Host "     Name:         _mcp._agents"
    Write-Host "     Target:       $Domain"
    Write-Host "     Priority:     1"
    Write-Host "     Value:        alpn=mcp port=443 mandatory=alpn,port"
    Write-Host "     Proxy status: DNS only (Grey Cloud)"
    Write-Host "     TTL:          Auto`n"

    Write-Host "   Record 3 (DNS-AID Index):" -ForegroundColor Green
    Write-Host "     Type:         TXT"
    Write-Host "     Name:         _index._agents"
    Write-Host "     Content:      v=aid1 a2a=_a2a._agents.$Domain mcp=_mcp._agents.$Domain"
    Write-Host "     TTL:          Auto`n"

    Write-Host "3. Navigate to 'DNS' -> 'Settings' -> 'DNSSEC':" -ForegroundColor Green
    Write-Host "     Click 'Enable DNSSEC' to cryptographically sign the zone.`n"

    Write-Host "After applying, run 'powershell -ExecutionPolicy Bypass -File scratch/test-scan.ps1' to verify pass!" -ForegroundColor Cyan
    exit 0
}

$headers = @{
    "Authorization" = "Bearer $ApiToken"
    "Content-Type"  = "application/json"
}

Write-Host "Fetching zone ID for $Domain from Cloudflare..." -ForegroundColor Cyan
try {
    $zoneRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones?name=$Domain" -Headers $headers -Method Get
    if (-not $zoneRes.success -or $zoneRes.result.Count -eq 0) {
        Write-Error "Could not find zone for domain $Domain. Please check API token permissions."
        exit 1
    }
    $zoneId = $zoneRes.result[0].id
    Write-Host "Found Zone ID: $zoneId" -ForegroundColor Green
} catch {
    Write-Error "Failed to connect to Cloudflare API: $_"
    exit 1
}

$records = @(
    @{
        type = "HTTPS"
        name = "_a2a._agents.$Domain"
        ttl  = 3600
        proxied = $false
        data = @{
            priority = 1
            target   = $Domain
            value    = "alpn=a2a port=443 mandatory=alpn,port"
        }
    },
    @{
        type = "HTTPS"
        name = "_mcp._agents.$Domain"
        ttl  = 3600
        proxied = $false
        data = @{
            priority = 1
            target   = $Domain
            value    = "alpn=mcp port=443 mandatory=alpn,port"
        }
    },
    @{
        type    = "TXT"
        name    = "_index._agents.$Domain"
        content = "v=aid1 a2a=_a2a._agents.$Domain mcp=_mcp._agents.$Domain"
        ttl     = 3600
    }
)

foreach ($rec in $records) {
    Write-Host "Publishing $($rec.type) record for $($rec.name)..." -ForegroundColor Cyan
    $body = $rec | ConvertTo-Json -Depth 5
    try {
        $postRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dns_records" -Headers $headers -Method Post -Body $body
        if ($postRes.success) {
            Write-Host "SUCCESS: Published $($rec.name)" -ForegroundColor Green
        } else {
            Write-Host "Cloudflare notice: $($postRes.errors | ConvertTo-Json -Compress)" -ForegroundColor Yellow
        }
    } catch {
        Write-Host "Note: Record might already exist or need update: $_" -ForegroundColor DarkGray
    }
}

Write-Host "`nActivating DNSSEC for $Domain..." -ForegroundColor Cyan
try {
    $dnssecBody = @{ status = "active" } | ConvertTo-Json
    $dnssecRes = Invoke-RestMethod -Uri "https://api.cloudflare.com/client/v4/zones/$zoneId/dnssec" -Headers $headers -Method Patch -Body $dnssecBody
    if ($dnssecRes.success) {
        Write-Host "SUCCESS: DNSSEC is active for $Domain!" -ForegroundColor Green
    }
} catch {
    Write-Host "DNSSEC status notice: $_" -ForegroundColor DarkGray
}

Write-Host "`nVerifying DNS-AID via Cloudflare DoH..." -ForegroundColor Cyan
Start-Sleep -Seconds 3
$dohUrl = "https://cloudflare-dns.com/dns-query?name=_a2a._agents.$Domain&type=HTTPS&do=1"
try {
    $doh = Invoke-RestMethod -Uri $dohUrl -Headers @{ "Accept" = "application/dns-json" } -Method Get
    if ($doh.Answer) {
        Write-Host "VERIFIED: _a2a._agents.$Domain resolved via DoH!" -ForegroundColor Green
    } else {
        Write-Host "DoH query pending propagation. Give it 30-60 seconds." -ForegroundColor Yellow
    }
} catch {
    Write-Host "DoH query check: $_" -ForegroundColor DarkGray
}

Write-Host "`nDone! Run 'powershell -ExecutionPolicy Bypass -File scratch/test-scan.ps1' to run audit." -ForegroundColor Green
