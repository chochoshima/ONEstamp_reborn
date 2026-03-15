@echo off
title Git Website Manager

cd /d %~dp0

:menu
cls
echo =============================
echo       GIT WEBSITE MENU
echo =============================
echo.
echo 1. Sync dari GitHub (git pull)
echo 2. Upload perubahan website
echo 3. Keluar
echo.
set /p pilih=Pilih menu (1-3): 

if "%pilih%"=="1" goto pull
if "%pilih%"=="2" goto push
if "%pilih%"=="3" exit

goto menu

:pull
echo.
echo Mengambil update dari GitHub...
git pull origin main
echo.
pause
goto menu

:push
echo.
echo Menambahkan perubahan...
git add .

set /p pesan=Masukkan pesan update: 

git commit -m "%pesan%"

echo.
echo Mengirim ke GitHub...
git push origin main

echo.
echo Update selesai.
pause
goto menu