import { Editor } from 'slate';

export const isQuoteActive = (editor: Editor) => {
  const [quote] = Editor.nodes(editor, { match: { type: QuoteType } });
  return !!quote;
};

export const QuoteType = 'QUOTE';

export const QuoteCommands = {
  ToggleQuote: 'toggle_quote',
};

const toggleQuote = (editor: Editor) => {
  if (isQuoteActive(editor)) {
    Editor.setNodes(editor, {
      type: editor.quotesConfig && editor.quotesConfig.defaultBlockType,
    });
    return;
  }

  const quote = { type: QuoteType };
  Editor.setNodes(editor, quote);
  // Editor.collapse(editor, { edge: 'end' });
};

export interface QuotesPluginConfig {
  defaultBlockType: string;
}

export const defaultConfig: QuotesPluginConfig = {
  defaultBlockType: 'PARAGRAPH',
};

export const withQuotes = (config?: QuotesPluginConfig) => (editor: Editor) => {
  config = { ...defaultConfig, ...config };
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === QuoteCommands.ToggleQuote) {
      if (editor.selection) {
        toggleQuote(editor);
      }

      return;
    }
    exec(command);
  };
  editor.quotesConfig = config;
  return editor;
};
