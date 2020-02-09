const fs = require('fs');
const config = require('./config');
const getAllFilePaths = require('./helpers/getAllFilePaths');

const TEMPLATE_PATH = 'template';
const NEW_TOOL_PATH = `..\\..\\..\\tools\\${config.toolName}`;
const PATHS_IGNORE = [`${TEMPLATE_PATH}\\node_modules`, `${TEMPLATE_PATH}\\package-lock.json`];

console.log(`> Generating tool: ${config.toolName}...`)

console.log(`> Getting template file paths...`)
const templateFiles = getAllFilePaths(TEMPLATE_PATH, PATHS_IGNORE);
const files = templateFiles.map(file => {
	return file.replace(TEMPLATE_PATH, '');
});

console.log(`> Generating skeleton folder structure...`)
fs.mkdirSync(NEW_TOOL_PATH);
files.forEach(file => {
	const parts = file.split('\\');
	if (parts.length === 1) return;
	parts.pop();
	parts.forEach((part, index) => {
		let newFolder = part;
		for (let i=0; i<index; i++) {
			newFolder = `${parts[i]}\\${newFolder}`;
		};
		if (!fs.existsSync(`${NEW_TOOL_PATH}\\${newFolder}`)) {
			fs.mkdirSync(`${NEW_TOOL_PATH}\\${newFolder}`)
		}
	});
});

console.log(`> Writing files...`)
files.forEach(file => {
	const content = fs.readFileSync(`${TEMPLATE_PATH}\\${file}`, 'utf8');
	const newFile = `${NEW_TOOL_PATH}\\${file}`;
	// #TODO: implement handlebars here to generate updated tool
	fs.writeFileSync(newFile, content);
});

console.log(`> Done.`)
