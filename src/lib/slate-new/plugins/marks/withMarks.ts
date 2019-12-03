import { Editor } from 'slate';

export enum MarkTypes {
  Bold = 'bold',
  Italic = 'italic',
  Underline = 'underline',
}

export const isMarkActive = (editor: Editor, type: MarkTypes) => {
  const [mark] = Editor.marks(editor, { match: { type }, mode: 'all' });
  return !!mark;
};

export const withMarks = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    switch (command.type) {
      case 'toggle_mark': {
        const { mark } = command;
        const isActive = isMarkActive(editor, mark.type);
        const cmd = isActive ? 'remove_mark' : 'add_mark';
        editor.exec({ type: cmd, mark });
        break;
      }

      default: {
        exec(command);
        break;
      }
    }
  };

  return editor;
};

export const MARK_HOTKEYS = {
  'mod+b': MarkTypes.Bold,
  'mod+i': MarkTypes.Italic,
  'mod+u': MarkTypes.Underline,
};
