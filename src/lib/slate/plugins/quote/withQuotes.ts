import { Editor, Transforms } from 'slate';
import { QuoteType } from './quoteType';
import { ReactEditor } from 'slate-react';

export const isQuoteActive = (editor: Editor) => {
  const [quote] = Editor.nodes(editor, {
    match: elem => elem.type === QuoteType,
  });
  return !!quote;
};

export const QuoteCommands = {
  ToggleQuote: 'toggle_quote',
};

const toggleQuote = (editor: Editor) => {
  if (isQuoteActive(editor)) {
    Transforms.setNodes(editor, {
      type: editor.quotesConfig && editor.quotesConfig.defaultBlockType,
    });
    return;
  }

  const quote = { type: QuoteType };
  Transforms.setNodes(editor, quote);
  // Editor.collapse(editor, { edge: 'end' });
};

export interface QuotesPluginConfig {
  defaultBlockType: string;
}

export const defaultConfig: QuotesPluginConfig = {
  defaultBlockType: 'PARAGRAPH',
};

export const withQuotes = (config?: QuotesPluginConfig) => (
  editor: ReactEditor
) => {
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
