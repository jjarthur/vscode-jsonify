import * as json5 from 'json5';
import * as vscode from 'vscode';

export const toJSON = () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const selection = editor.selection;
  if (selection && !selection.isEmpty) {
    const selectionRange = new vscode.Range(
      selection.start.line,
      selection.start.character,
      selection.end.line,
      selection.end.character
    );
    const highlighted = editor.document.getText(selectionRange);
    const parsed = createObjectFromString(highlighted);
    const stringified = JSON.stringify(parsed);
    editor.edit(editBuilder => {
      editBuilder.replace(selectionRange, stringified);
    });
  }
};

export const createObjectFromString = (str: string) => json5.parse(str);
