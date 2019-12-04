import { Editor } from 'slate';

export enum EmphasizeTypes {
  Bold = 'BOLD',
  Italic = 'ITALIC',
  Underline = 'UNDERLINE',
}

export const EmphasizeCommands = {
  ToggleEmphasize: 'toggle_emphasize',
};

export const isEmphasizeActive = (editor: Editor, type: EmphasizeTypes) => {
  const [mark] = Editor.marks(editor, { match: { type }, mode: 'all' });
  return !!mark;
};

export const withEmphasize = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    switch (command.type) {
      case EmphasizeCommands.ToggleEmphasize: {
        const { mark } = command;
        const isActive = isEmphasizeActive(editor, mark.type);
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
  'mod+b': EmphasizeTypes.Bold,
  'mod+i': EmphasizeTypes.Italic,
  'mod+u': EmphasizeTypes.Underline,
};
