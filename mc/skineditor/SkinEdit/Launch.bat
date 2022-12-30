@echo off

REM Windows only!

REM Made by Patrik Swedman 2009 for MCSkinEdit alpha 2
REM Updated by Patrik Swedman 2011 for MCSkinEdit alpha 3 pre 7

FOR /F "skip=2 tokens=2*" %%A IN ('REG QUERY "HKLM\Software\JavaSoft\Java Runtime Environment" /v CurrentVersion') DO set CurVer=%%B

FOR /F "skip=2 tokens=2*" %%A IN ('REG QUERY "HKLM\Software\JavaSoft\Java Runtime Environment\%CurVer%" /v JavaHome') DO set JAVA_HOME=%%B

echo.
echo Java installed to: %JAVA_HOME%
echo.
echo Launching SkinEdit...
echo.

"%JAVA_HOME%\bin\java.exe" -jar MCSkinEdit.jar

echo.
echo.
echo SkinEdit closed.
echo If nothing happend please reinstall java. For more info visit java.com
echo.
echo.
pause