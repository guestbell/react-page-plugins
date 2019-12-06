import { Editor } from 'slate';
import { EmphasizeTypes } from './emphasizeTypes';

export const EmphasizeCommands = {
  ToggleEmphasize: 'toggle_emphasize',
};

export const isEmphasizeActive = (editor: Editor, type: EmphasizeTypes) => {
  const [mark] = Editor.nodes(editor, {
    match: { [type]: true },
    mode: 'all',
  });
  return !!mark;
};

export const withEmphasize = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    switch (command.type) {
      case EmphasizeCommands.ToggleEmphasize: {
        const { mark } = command;
        const isActive = isEmphasizeActive(editor, mark);
        Editor.setNodes(
          editor,
          { [mark]: isActive ? null : true },
          { match: 'text', split: true }
        );
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
