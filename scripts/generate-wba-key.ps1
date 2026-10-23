$keyFile = "scripts/keys/aeobility_agent_ed25519"
New-Item -ItemType Directory -Path "scripts/keys" -Force | Out-Null
if (Test-Path $keyFile) { Remove-Item "$keyFile*" -Force }

ssh-keygen -t ed25519 -N '""' -f $keyFile -C "agent@aeobility.com.au" 2>$null

$pubContent = Get-Content "$keyFile.pub" -Raw
$parts = $pubContent.Trim().Split(" ")
$b64 = $parts[1]
$bytes = [System.Convert]::FromBase64String($b64)

# Raw 32 bytes of Ed25519 public key (starts at byte 19 in OpenSSH format)
$rawPub = $bytes[19..50]
$b64UrlX = [System.Convert]::ToBase64String($rawPub).Replace("+", "-").Replace("/", "_").TrimEnd("=")

# RFC 7638 / RFC 8037 Canonical JWK thumbprint for OKP:
# Required members in lexicographical order: crv, kty, x
$jwkCanon = '{"crv":"Ed25519","kty":"OKP","x":"' + $b64UrlX + '"}'
$sha256 = [System.Security.Cryptography.SHA256]::Create()
$thumbBytes = $sha256.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($jwkCanon))
$kid = [System.Convert]::ToBase64String($thumbBytes).Replace("+", "-").Replace("/", "_").TrimEnd("=")

$directoryDoc = [ordered]@{
    keys = @(
        [ordered]@{
            kty = "OKP"
            crv = "Ed25519"
            kid = $kid
            x = $b64UrlX
            use = "sig"
            nbf = 1704067200
        }
    )
    purpose = "rag"
    agent = "https://aeobility.com.au"
}

$json = $directoryDoc | ConvertTo-Json -Depth 5
Write-Host "Generated Key ID: $kid"
Write-Host "Public Key X: $b64UrlX"
Write-Host "`nJWKS Directory Document:"
Write-Host $json

$json | Set-Content -Path "public/.well-known/http-message-signatures-directory" -Encoding UTF8 -NoNewline
