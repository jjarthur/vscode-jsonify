import * as vscode from 'vscode';
import { toJSON } from './toJSON';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand(
			'jsonify.toJSON',
			() => toJSON()
		));
}

export function deactivate() { }
