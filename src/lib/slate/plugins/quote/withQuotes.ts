import { Editor } from 'slate';

export const isQuoteActive = (editor: Editor) => {
  const [quote] = Editor.nodes(editor, { match: { type: 'quote' } });
  return !!quote;
};

const toggleQuote = (editor: Editor) => {
  if (isQuoteActive(editor)) {
    Editor.setNodes(editor, { type: 'paragraph' });
    return;
  }

  const quote = { type: 'quote' };
  Editor.setNodes(editor, quote);
  // Editor.collapse(editor, { edge: 'end' });
};

export const withQuotes = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === 'toggle_quote') {
      if (editor.selection) {
        toggleQuote(editor);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
