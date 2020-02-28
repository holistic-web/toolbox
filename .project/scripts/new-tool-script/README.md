# New Tool Script

This script generates a new tool for the toolbox. To generate a tool:

1. open `config.js` from within this folder and set the values you'd like to use

2. run the following from within this folder
	```
	npm install
	node .
	```

3. reset `config.js` to how it was - your tool will be in the `/tools` top level folder =D

4. Follow the steps in the newly generated readme to finish setting up your tool!

## Changing the Template
This script should be fairly resilient to changes in the template structure. This should allow us to update the template as we improve our tools.

## Roadmap
- better CLI flashiness
- take inputs from yargs instead of config
- generate default inputs for ToolName and ToolNameHuman if not provided
- automatically add the new tool to the:
	- package.json as a run script
	- README as a badge, and tools list
- include the installation of packages as part of this tool
- automatically hoist any dependencies from the new tool