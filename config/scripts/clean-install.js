const fs = require('fs');
const rimraf = require('rimraf');
const chalk = require('chalk');
const child_process = require('child_process');

let log;

const cleanInstall = function (path) {
  console.time("cleanInstall" + path + "Path");
  log = "***** Installazione dipendenze sulla directory: '" + path + "' - INIT *****";
  console.log(chalk.blue(log));
  try {
    fs.unlinkSync(path + '/package-lock.json');
    console.log('file "' + path + '/package-lock.json" rimosso');
    rimraf.sync(path + "/node_modules");
    console.log('directory "' + path + '/node_modules" rimossa');
  } catch (err) {
    console.error(err)
  }
  child_process.spawnSync('npm', ['install'], {
    cwd: path,
    stdio: "inherit"
  });
  log = "***** Installazione dipendenze sulla directory: '" + path + "' - END *****";
  console.log(chalk.green(log));
  console.timeEnd("cleanInstall" + path + "Path");
}

const rootPath = '.';
const commonsPath = './commons';
const webPath = './typescript-webapp';
const mobilePath = './TypeScriptProject';

cleanInstall(rootPath);
cleanInstall(commonsPath);
cleanInstall(webPath);
cleanInstall(mobilePath);
