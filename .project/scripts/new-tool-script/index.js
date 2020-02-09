const fs = require('fs');
const getAllFilePaths = require('./helpers/getAllFilePaths');

const TOOL_NAME = process.argv[2];
if (!TOOL_NAME) throw new Error('please provide a tool-name');

const TEMPLATE_PATH = 'template';
const NEW_TOOL_PATH = `..\\..\\..\\tools\\${TOOL_NAME}`;
const PATHS_IGNORE = [`${TEMPLATE_PATH}\\node_modules`, `${TEMPLATE_PATH}\\package-lock.json`];

console.log(`> Generating tool: ${TOOL_NAME}...`)

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
	fs.writeFileSync(newFile, content);
});

console.log(`> Done.`)
