import { Editor, Transforms, Text } from 'slate';
import { RGBColor } from 'react-color';
import { omitFirstArg } from '../../types/omitFirstArg';

export const isColorActive = (editor: Editor) => {
  const [mark] = Editor.nodes(editor, {
    match: (elem: Text) => Boolean(elem.color),
    mode: 'all',
  });
  return !!mark;
};

export const getActiveColors = (editor: Editor): RGBColor[] => {
  const nodes = Editor.nodes<Text>(editor, {
    at: editor.selection,
    mode: 'all',
  });
  let colors = [];
  for (const [node] of nodes) {
    colors.push(node.color);
  }
  colors = colors.filter(i => i);
  const unique = new Set(colors);
  return [...unique];
};

const unwrapColor = (editor: Editor) => {
  Transforms.setNodes(
    editor,
    {
      color: null,
    },
    { match: Text.isText, split: true }
  );
};

const wrapColor = (editor: Editor, color: RGBColor) => {
  Transforms.setNodes(editor, { color }, { match: Text.isText, split: true });
  // Editor.collapse(editor, { edge: 'end' });
};

export interface ColorEditor {
  isColorActive: omitFirstArg<typeof isColorActive>;
  wrapColor: omitFirstArg<typeof wrapColor>;
  unwrapColor: omitFirstArg<typeof unwrapColor>;
  getActiveColors: omitFirstArg<typeof getActiveColors>;
}

export const withColors = (editor: Editor) => {
  /*const { isInline } = editor;

  editor.isInline = element => {
    return element.type === ColorType ? true : isInline(element);
  };*/
  editor.wrapColor = wrapColor.bind(null, editor);
  editor.unwrapColor = unwrapColor.bind(null, editor);
  editor.isColorActive = isColorActive.bind(null, editor);
  editor.getActiveColors = getActiveColors.bind(null, editor);

  return editor;
};
