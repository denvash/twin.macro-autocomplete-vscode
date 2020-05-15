import * as vscode from "vscode";

const documentType: vscode.DocumentSelector = [
  { scheme: "file", language: "javascript" },
  { scheme: "file", language: "javascriptreact" },
  { scheme: "file", language: "typescriptreact" },
  { scheme: "file", language: "typescript" },
];

const reTrigger = {
  command: "editor.action.triggerSuggest",
  title: "Re-trigger completions...",
};

export function activate(context: vscode.ExtensionContext) {
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

        /* Use regex */
        if (!linePrefix.includes(`tw\``)) {
          return undefined;
        }

        /* Will be dynamic */
        const absolute = new vscode.CompletionItem(
          "absolute",
          vscode.CompletionItemKind.Value
        );

        const text = new vscode.CompletionItem(
          "text-white",
          vscode.CompletionItemKind.Value
        );

        const pointerNoEvent = new vscode.CompletionItem(
          "pointer-events-none",
          vscode.CompletionItemKind.Value
        );

        pointerNoEvent.documentation = new vscode.MarkdownString(
          `Pointer Events docs: https://tailwindcss.com/docs/pointer-events/`
        );

        absolute.command = reTrigger;
        pointerNoEvent.command = reTrigger;
        text.command = reTrigger;

        return [absolute, text, pointerNoEvent];
      },
    }
  );

  context.subscriptions.push(provider);
}
