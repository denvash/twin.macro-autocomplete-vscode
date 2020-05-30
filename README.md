# twin.macro auto-complete (Work in progress!)

Currently only supports Autocomplete (no intellisense) for one line scope:

```js
tw`/* auto complete here as one-liner */`
```

> VScode intellisense extension for [twin.macro](https://github.com/ben-rogerson/twin.macro)

Install from [marketplace](https://marketplace.visualstudio.com/items?itemName=DennisVash.twin-macro-autocomplete-vscode).

![screenshot](https://user-images.githubusercontent.com/27515937/82094436-ba08f000-9705-11ea-8157-c3e270c5c5e4.png)

## [Customizing IntelliSense](https://code.visualstudio.com/docs/editor/intellisense#_customizing-intellisense)

```json
{
    // Controls if quick suggestions should show up while typing
    "editor.quickSuggestions": true,

    // Controls if suggestions should be accepted with "Enter" - in addition to "Tab". Helps to avoid ambiguity between inserting new lines and accepting suggestions.
    "editor.acceptSuggestionOnEnter": true,

    // Controls the delay in ms after which quick suggestions will show up.
    "editor.quickSuggestionsDelay": 10,

    // Enable word based suggestions
    "editor.wordBasedSuggestions": true,

    // Enable parameter hints
    "editor.parameterHints": true
}
```

## Resources

- [Programmatic Language Features](https://code.visualstudio.com/api/language-extensions/programmatic-language-features)
- [Language Server Extension Guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide)
