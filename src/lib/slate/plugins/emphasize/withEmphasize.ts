import { Editor, Transforms, Text } from 'slate';
import { omitFirstArg } from '../../types/omitFirstArg';
import { EmphasizeTypes } from './emphasizeTypes';

export const isEmphasizeActive = (editor: Editor, type: EmphasizeTypes) => {
  const [mark] = Editor.nodes(editor, {
    match: elem => elem[type],
    mode: 'all',
  });
  return !!mark;
};

export const toggleEmphasis = (editor: Editor, type: EmphasizeTypes) => {
  const isActive = isEmphasizeActive(editor, type);
  Transforms.setNodes(
    editor,
    { [type]: isActive ? null : true },
    { match: Text.isText, split: true }
  );
};

export interface EmphasizeEditor {
  isEmphasizeActive: omitFirstArg<typeof isEmphasizeActive>;
  toggleEmphasis: omitFirstArg<typeof toggleEmphasis>;
}

export const withEmphasize = (editor: Editor) => {
  editor.isEmphasizeActive = isEmphasizeActive.bind(null, editor);
  editor.toggleEmphasis = toggleEmphasis.bind(null, editor);
  return editor;
};

export const MARK_HOTKEYS = {
  'mod+b': EmphasizeTypes.Bold,
  'mod+i': EmphasizeTypes.Italic,
  'mod+u': EmphasizeTypes.Underline,
};
