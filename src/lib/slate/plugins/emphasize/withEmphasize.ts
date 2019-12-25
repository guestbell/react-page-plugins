import { Editor, Transforms, Text } from 'slate';
import { EmphasizeTypes } from './emphasizeTypes';
import { ReactEditor } from 'slate-react';

export const EmphasizeCommands = {
  ToggleEmphasize: 'toggle_emphasize',
};

export const isEmphasizeActive = (editor: Editor, type: EmphasizeTypes) => {
  const [mark] = Editor.nodes(editor, {
    match: elem => elem[type],
    mode: 'all',
  });
  return !!mark;
};

export const withEmphasize = (editor: ReactEditor) => {
  const { exec } = editor;

  editor.exec = command => {
    switch (command.type) {
      case EmphasizeCommands.ToggleEmphasize: {
        const { mark } = command;
        const isActive = isEmphasizeActive(editor, mark);
        Transforms.setNodes(
          editor,
          { [mark]: isActive ? null : true },
          { match: Text.isText, split: true }
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
