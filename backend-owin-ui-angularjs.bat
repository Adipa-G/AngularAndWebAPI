echo ==================== UI =======================
pushd ui\angularjs
call build.bat
popd
echo ==================== Backend =======================
pushd backend\owin
call build.bat
popd
rmdir /s /q backend\owin\Web\www
if %errorlevel% neq 0 exit /b %errorlevel%
mkdir backend\owin\Web\www
if %errorlevel% neq 0 exit /b %errorlevel%
xcopy ui\angularjs\dist backend\owin\Web\www /s /e
if %errorlevel% neq 0 exit /b %errorlevel%
echo ==================== DONE =======================
echo ==================== STARTING APP =======================
pushd backend\owin\Web
"C:\Program Files\IIS Express\iisexpress.exe" /port:5000 /path:"D:\GitHub\SPAandWebAPI\backend\owin\Web"
if %errorlevel% neq 0 exit /b %errorlevel%
popd