import * as vscode from 'vscode';

import { fromJSON } from './fromJSON';
import { toJSON } from './toJSON';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('jsonify.toJSON', () => toJSON()),
    vscode.commands.registerCommand('jsonify.fromJSON', () => fromJSON())
  );
}
