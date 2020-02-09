const fs = require('fs');
const handlebars = require('handlebars');
const config = require('./config');
const getAllFilePaths = require('./helpers/getAllFilePaths');

const TEMPLATE_PATH = 'template/tool';
const NEW_TOOL_PATH = `..\\..\\..\\tools\\${config.toolName}`;
const PATHS_IGNORE = [`${TEMPLATE_PATH}\\node_modules`, `${TEMPLATE_PATH}\\package-lock.json`];
const FILE_TYPE_PRESERVE = ['.ico'];
const WORKFLOWS_TEMPLATE_PATH = 'template/workflows';
const WORKFLOWS_PATH = '..\\..\\..\\.github\\workflows';
const HANDLEBARS_DATA = {
	'tool-name': config.toolName,
	'tool-name-human': config.toolNameHuman,
	'tool-name-uppercase': config.toolNameUppercase
};

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
	const newFile = `${NEW_TOOL_PATH}\\${file.replace('{{tool-name-uppercase}}', config.toolNameUppercase)}`;

	// don't try and template image files as handlebars will error
	let doTemplating = true;
	FILE_TYPE_PRESERVE.forEach(type => {
		if (file.endsWith(type)) doTemplating = false;
	});

	if (doTemplating) {
		const template = handlebars.compile(content);
		const newContent = template(HANDLEBARS_DATA);
		fs.writeFileSync(newFile, newContent);
	} else {
		fs.writeFileSync(newFile, content);
	}
});

console.log(`> Generating workflows...`)
const workflowTemplateFiles = getAllFilePaths(WORKFLOWS_TEMPLATE_PATH);
const workflowFiles = workflowTemplateFiles.map(file => {
	return file.replace(WORKFLOWS_TEMPLATE_PATH, '');
});
workflowFiles.forEach(file => {
	const content = fs.readFileSync(`${WORKFLOWS_TEMPLATE_PATH}\\${file}`, 'utf8');
	const newFile = `${WORKFLOWS_PATH}\\${file.replace('{{tool-name}}', config.toolName)}`;
	const template = handlebars.compile(content);
	const newContent = template(HANDLEBARS_DATA);
	fs.writeFileSync(newFile, newContent);
});

console.log(`> Done.`)
