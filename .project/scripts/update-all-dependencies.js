const { exec } = require('child_process');

const process = exec(
	'npx dx-tools execute-recursive . npm i',
	{ cwd: '../../.' }
);


process.stdout.on('data', data => {
	console.log(data);
});