// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let defaultColorTheme = vscode.workspace.getConfiguration().get('workbench.colorTheme');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "check" is now active!');

	// register a command to update theme based on time
	let updateTheme = vscode.commands.registerCommand('check.updateTheme', () => {
		let date = new Date();
		let hour = date.getHours();
		vscode.window.showInformationMessage(`${hour}`)
		let theme = hour >= 6 && hour < 18 ? 'Light' : 'Dark';
		vscode.workspace.getConfiguration().update('workbench.colorTheme', `Default ${theme} Modern`, true);
	});

	context.subscriptions.push(updateTheme);
}

// This method is called when your extension is deactivated
export function deactivate() {
	// Revert to the default theme
	vscode.workspace.getConfiguration().update('workbench.colorTheme', defaultColorTheme, true);
}
