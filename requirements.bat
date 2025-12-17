@echo off
cls
echo Checking for admin...

net session >nul 2>&1
if %errorlevel% equ 0 (
    echo Has admin rights.
    goto install
) else (
    echo Not runned as admin.
    echo.
    echo To ensure all libraries install correctly, you need to run this as admin.
    echo If you wish continue anyway, press any key.
    echo If you wish to abort, close the program.
    echo.
    pause >nul
    goto install
)

:install
    echo.
    echo.
    echo The following npm dependencies will be installed:
    echo - colors
    echo - mineflayer
    echo - mineflayer-pathfinder
    echo.
    echo Press any key to confirm...
    pause >nul
    cls
    echo Installing 'colors'
    timeout 1 >nul
    call npm install colors
    echo.
    echo.
    echo --- finished installing colors... installing next
    timeout 3 >nul
    
    cls
    echo Installing 'mineflayer'
    timeout 1 >nul
    call npm install mineflayer
    echo.
    echo.
    echo --- finished installing mineflayer... installing next
    timeout 3 >nul

    cls
    echo Installing 'mineflayer-pathfinder'
    timeout 1 >nul
    echo.
    call npm install mineflayer-pathfinder
    echo.
    echo.
    echo --- DONE INSTALLING EVERYTHING!!! :3
    echo Press any key to exit..
    pause >nul