import * as vscode from 'vscode';
import documentType from './config/documentType';
import dynamicStyles from './config/dynamicStyles';
import variantConfig from './config/variantConfig';
import staticStyles from './language-server/staticStyles';

const staticCompletionItems = Object.keys(staticStyles);
const dynamicCompletionItems = Object.keys(dynamicStyles);
const variantCompletionItems = Object.keys(variantConfig);

const mapToItem = (type: vscode.CompletionItemKind) => (
  item: string
): vscode.CompletionItem => {
  const completionItem = new vscode.CompletionItem(item, type);
  return completionItem;
};

export function activate(context: vscode.ExtensionContext): void {
  const provider = vscode.languages.registerCompletionItemProvider(
    documentType,
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position
      ) {
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);

        console.log(linePrefix);

        /* Fix to use regex */
        if (!linePrefix.includes(`tw\``)) {
          return undefined;
        }

        const staticItems = staticCompletionItems.map(
          mapToItem(vscode.CompletionItemKind.Property)
        );
        const dynamicItems = dynamicCompletionItems.map(
          mapToItem(vscode.CompletionItemKind.Variable)
        );
        const variantItems = variantCompletionItems.map(
          mapToItem(vscode.CompletionItemKind.Value)
        );

        return [...staticItems, ...dynamicItems, ...variantItems];
      },
    }
  );

  context.subscriptions.push(provider);
}
