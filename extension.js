const vscode = require('vscode');

function activate(context) {
	const Save = vscode.commands.registerCommand('save-from-context-menu.Save', function () {
		vscode.commands.executeCommand('workbench.action.files.save');
	});

	const SaveAll = vscode.commands.registerCommand('save-from-context-menu.SaveAll', function () {
		vscode.commands.executeCommand('workbench.action.files.saveAll');
	});

	context.subscriptions.push(Save, SaveAll);
}

exports.activate = activate;

function deactivate() {}

module.exports = {
	activate,
	deactivate
};