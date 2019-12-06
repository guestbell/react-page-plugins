import { Editor } from 'slate';
import { AlignmentTypes } from './alignmentTypes';

export const AlignmentCommands = {
  ToggleAlignment: 'toggle_alignment',
};

export const isAlignmentActive = (
  editor: Editor,
  alignment: AlignmentTypes
) => {
  const [node] = Editor.nodes(editor, { match: { alignment }, mode: 'all' });
  return !!node;
};

const toggleAlignment = (editor: Editor, alignment: AlignmentTypes) => {
  if (isAlignmentActive(editor, alignment)) {
    Editor.setNodes(editor, { alignment: null });
    return;
  }

  const align = { alignment };
  Editor.setNodes(editor, align);
  // Editor.collapse(editor, { edge: 'end' });
};

export const withAlignments = (editor: Editor) => {
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === AlignmentCommands.ToggleAlignment) {
      const { alignment } = command;

      if (editor.selection) {
        toggleAlignment(editor, alignment);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
