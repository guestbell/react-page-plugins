import { Editor, Transforms, Element } from 'slate';
import { ElementType } from '../../../declarations/slate';
import { omitFirstArg } from '../../types/omitFirstArg';
import { ParagraphType } from '../paragraph/withParagraph';
import { QuoteType } from './quoteType';

export const isQuoteActive = (editor: Editor) => {
  const [quote] = Editor.nodes(editor, {
    match: (elem: Element) => elem.type === QuoteType,
  });
  return !!quote;
};

const toggleQuote = (editor: Editor) => {
  if (isQuoteActive(editor)) {
    Transforms.setNodes(editor, {
      type: editor.quotesConfig?.defaultBlockType,
    });
    return;
  }

  const quote: Element = { type: QuoteType };
  Transforms.setNodes(editor, quote);
  // Editor.collapse(editor, { edge: 'end' });
};

export interface QuotesPluginConfig {
  defaultBlockType: ElementType;
}

export const defaultConfig: QuotesPluginConfig = {
  defaultBlockType: ParagraphType,
};

export interface QuotesEditor {
  quotesConfig: QuotesPluginConfig;
  toggleQuote: omitFirstArg<typeof toggleQuote>;
  isQuoteActive: omitFirstArg<typeof isQuoteActive>;
}

export const withQuotes = (config?: QuotesPluginConfig) => (editor: Editor) => {
  config = { ...defaultConfig, ...config };
  editor.toggleQuote = toggleQuote.bind(null, editor);
  editor.isQuoteActive = isQuoteActive.bind(null, editor);
  editor.quotesConfig = config;
  return editor;
};
