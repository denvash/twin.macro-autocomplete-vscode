import * as vscode from 'vscode';

const documentType: vscode.DocumentSelector = [
  { scheme: 'file', language: 'javascript' },
  { scheme: 'file', language: 'javascriptreact' },
  { scheme: 'file', language: 'typescriptreact' },
  { scheme: 'file', language: 'typescript' },
];

export default documentType;
