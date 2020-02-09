const directoryTree = require('directory-tree');

const getAllFilePaths = (folder, pathsToIgnore) => {
	const { children } = directoryTree(folder);
	const paths = [];
 	children.forEach(child => {
		if (pathsToIgnore && pathsToIgnore.includes(child.path)) return;
		if (child.children) {
			const childPaths = getAllFilePaths(child.path);
			paths.push(...childPaths);
		} else {
			paths.push(child.path);
		}
	});
	return paths;
};

module.exports = getAllFilePaths;