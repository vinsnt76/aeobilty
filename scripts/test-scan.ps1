$body = '{"url":"https://aeobility.com.au"}'
Write-Host "Triggering scan for https://aeobility.com.au on isitagentready.com..." -ForegroundColor Cyan
$response = Invoke-RestMethod -Uri "https://isitagentready.com/api/scan" -Method Post -ContentType "application/json" -Body $body

Write-Host "================ FINAL AGENT READINESS AUDIT ================" -ForegroundColor Cyan
Write-Host "Site: https://aeobility.com.au"
Write-Host "Overall Level: $($response.level) (Maximum Tier)" -ForegroundColor Green

foreach ($cat in $response.checks.PSObject.Properties) {
    Write-Host "`n[$($cat.Name)]" -ForegroundColor Yellow
    foreach ($chk in $cat.Value.PSObject.Properties) {
        $st = $chk.Value.status
        $col = if ($st -eq "pass") { "Green" } elseif ($st -eq "fail") { "Red" } else { "Gray" }
        Write-Host "  - $($chk.Name): $st" -ForegroundColor $col
        if ($st -eq "fail" -and $chk.Value.message) {
            Write-Host "      Reason: $($chk.Value.message)" -ForegroundColor DarkYellow
        }
    }
}
