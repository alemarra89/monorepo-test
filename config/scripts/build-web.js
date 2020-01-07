const chalk = require('chalk');
const child_process = require('child_process');

const webPath = './typescript-webapp';

console.time("build-web");
console.log(chalk.blue("***** Esecuzione comando 'npm run build' per il progetto web - INIT *****"));
child_process.spawnSync('npm', ['run', 'build'], {
  cwd: webPath,
  stdio: "inherit"
});
console.log(chalk.green("***** Esecuzione comando 'npm run build' per il progetto web - INIT *****"));
console.timeEnd("build-web");
