param(
    [string]$Message = "sync: update from local workstation"
)

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Syncing changes to GitHub & Codespace    " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

git add -A

$status = git status --porcelain
if ($status) {
    Write-Host "[1/2] Committing changes: '$Message'" -ForegroundColor Yellow
    git commit -m "$Message"
} else {
    Write-Host "[1/2] Working tree is clean (no uncommitted changes)." -ForegroundColor Green
}

Write-Host "[2/2] Pushing to origin/main on GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n-------------------------------------------------------" -ForegroundColor Green
    Write-Host "SUCCESS: Latest changes pushed to GitHub!" -ForegroundColor Green
    Write-Host "In your Codespace terminal, run: git pull" -ForegroundColor Cyan
    Write-Host "-------------------------------------------------------" -ForegroundColor Green
} else {
    Write-Host "`nERROR: Git push encountered an issue." -ForegroundColor Red
}
