import { Editor, Transforms, Element } from 'slate';
import { omitFirstArg } from '../../types/omitFirstArg';
import { FontSizePluginConfig, defaultConfig } from './fontSizeConfig';

export const getActiveFontSizes = (editor: Editor): number[] => {
  const nodes = Editor.nodes<Element>(editor, {
    at: editor.selection,
    mode: 'all',
  });
  let fontSizes = [];
  for (const [node] of nodes) {
    fontSizes.push(node.fontSize);
  }
  fontSizes = fontSizes.filter(i => i);
  const unique = new Set(fontSizes);
  return [...unique];
};

export const isFontSizeActive = (editor: Editor, fontSize: number) => {
  const [node] = Editor.nodes(editor, {
    match: (elem: Element) => elem.fontSize === fontSize,
    mode: 'all',
  });
  return !!node;
};

const changeFontSize = (editor: Editor, fontSize: number) => {
  if (isFontSizeActive(editor, fontSize)) {
    Transforms.setNodes(editor, { fontSize: null });
    return;
  }

  const data = { fontSize };
  Transforms.setNodes(editor, data);
  // Editor.collapse(editor, { edge: 'end' });
};

const clearFontSize = (editor: Editor) => {
  Transforms.setNodes(editor, { fontSize: null });
};

export interface FontSizeEditor {
  fontSizeConfig: FontSizePluginConfig;
  changeFontSize: omitFirstArg<typeof changeFontSize>;
  clearFontSize: omitFirstArg<typeof clearFontSize>;
  isFontSizeActive: omitFirstArg<typeof isFontSizeActive>;
  getActiveFontSizes: omitFirstArg<typeof getActiveFontSizes>;
}

export const withFontSizes = (options?: FontSizePluginConfig) => (
  editor: Editor
) => {
  options = { ...defaultConfig, ...options };
  editor.changeFontSize = changeFontSize.bind(null, editor);
  editor.clearFontSize = clearFontSize.bind(null, editor);
  editor.isFontSizeActive = isFontSizeActive.bind(null, editor);
  editor.getActiveFontSizes = getActiveFontSizes.bind(null, editor);
  editor.fontSizeConfig = options;
  return editor;
};
