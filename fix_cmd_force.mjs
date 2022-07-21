import fs from "fs";
import path from "path";

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log(process.env.APPDATA);
console.log(process.env.HOME);
console.log(process.env);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const cmdCode = (name) => {
    return `@ECHO off
GOTO start
:find_dp0
SET dp0=%~dp0
EXIT /b
:start
SETLOCAL
CALL :find_dp0

IF EXIST "%dp0%\\node.exe" (
    SET "_prog=%dp0%\\node.exe"
) ELSE (
    SET "_prog=node"
    SET PATHEXT=%PATHEXT:;.MJS;=;%
)

ECHO %dp0%

endLocal & goto #_undefined_# 2>NUL || title %COMSPEC% & "%_prog%"  "%dp0%\\node_modules\\${name}\\cli.mjs" %*`;
}

let appdata = process.env.npm_config_global_prefix || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share");
appdata = path.join(appdata, 'npm');
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log('appdata');
console.log(appdata);
const cmd_path = path.join(appdata, `${process.env.npm_package_name}.cmd`);
console.log('cmd_path');
console.log(cmd_path);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
process.exit(9);

try {
    const cmd_code = cmdCode(process.env.npm_package_name);
    fs.writeFileSync(cmd_path, cmd_code);
} catch (err) {
    console.error(err);
    throw err;
}