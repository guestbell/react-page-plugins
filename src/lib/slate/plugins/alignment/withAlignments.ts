import { Editor, Transforms, Element } from 'slate';
import { AlignmentTypes } from './alignmentTypes';
import { omitFirstArg } from '../../types/omitFirstArg';

export const AlignmentCommands = {
  ToggleAlignment: 'toggle_alignment',
};

export const isAlignmentActive = (
  editor: Editor,
  alignment: AlignmentTypes
) => {
  const [node] = Editor.nodes(editor, {
    match: (elem: Element) => elem.alignment === alignment,
    mode: 'all',
  });
  return !!node;
};

const toggleAlignment = (editor: Editor, alignment: AlignmentTypes) => {
  if (isAlignmentActive(editor, alignment)) {
    Transforms.setNodes(editor, { alignment: null });
    return;
  }

  const align = { alignment };
  Transforms.setNodes(editor, align);
  // Editor.collapse(editor, { edge: 'end' });
};

export interface AlignmentEditor {
  isAlignmentActive: omitFirstArg<typeof isAlignmentActive>;
  toggleAlignment: omitFirstArg<typeof toggleAlignment>;
}

export const withAlignments = (editor: Editor) => {
  editor.toggleAlignment = toggleAlignment.bind(null, editor);
  editor.isAlignmentActive = isAlignmentActive.bind(null, editor);

  return editor;
};
