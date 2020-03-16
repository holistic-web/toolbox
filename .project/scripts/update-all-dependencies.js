/**
 * update-all-dependencies.js
 *
 * A script to update all dependencies within the toolbox project.
 * It uses https://www.npmjs.com/package/dx-tools
 *
 * It can be run from from the root of this project with:
 * `node .project/scripts/update-all-dependencies.js`
 */

const { exec } = require('child_process');

const process = exec(
	'npx dx-tools execute-recursive . npm i',
);


process.stdout.on('data', data => {
	console.log(data);
});