@echo off
setlocal
set "MSG=%~1"
if "%MSG%"=="" set "MSG=sync: update from local workstation"

echo ==========================================
echo  Syncing changes to GitHub ^& Codespace
echo ==========================================

git add -A
git diff --cached --quiet
if errorlevel 1 (
    echo [1/2] Committing: "%MSG%"
    git commit -m "%MSG%"
) else (
    echo [1/2] Working tree is clean.
)

echo [2/2] Pushing to origin/main on GitHub...
git push origin main

if errorlevel 0 (
    echo.
    echo -------------------------------------------------------
    echo SUCCESS: Latest changes pushed to GitHub!
    echo In your Codespace terminal, run: git pull
    echo -------------------------------------------------------
) else (
    echo.
    echo ERROR: Git push failed.
)
endlocal
