import { Editor } from 'slate';
import { FontSizePluginConfig, defaultConfig } from './fontSizeConfig';

export const getActiveFontSizes = (editor: Editor): number[] => {
  const nodes = Editor.nodes(editor, { at: editor.selection, mode: 'all' });
  let fontSizes = [];
  for (const [node] of nodes) {
    fontSizes.push(node.fontSize);
  }
  fontSizes = fontSizes.filter(i => i);
  const unique = new Set(fontSizes);
  return [...unique];
};

export const isFontSizeActive = (editor: Editor, fontSize: number) => {
  const [node] = Editor.nodes(editor, { match: { fontSize }, mode: 'all' });
  return !!node;
};

const changeFontSize = (editor: Editor, fontSize: number) => {
  if (isFontSizeActive(editor, fontSize)) {
    Editor.setNodes(editor, { fontSize: null });
    return;
  }

  const data = { fontSize };
  Editor.setNodes(editor, data);
  // Editor.collapse(editor, { edge: 'end' });
};

const clearFontSize = (editor: Editor) => {
  Editor.setNodes(editor, { fontSize: null });
};

export const FontSizeCommands = {
  ChangeFontSize: 'change_fontsize',
  ClearFontSize: 'clear_fontsize',
};

export const withFontSizes = (options?: FontSizePluginConfig) => (
  editor: Editor
) => {
  options = { ...defaultConfig, ...options };
  const { exec } = editor;

  editor.exec = command => {
    if (command.type === FontSizeCommands.ChangeFontSize) {
      const { fontSize } = command;

      if (editor.selection) {
        changeFontSize(editor, fontSize);
      }

      return;
    }
    if (command.type === FontSizeCommands.ClearFontSize) {
      if (editor.selection) {
        clearFontSize(editor);
      }

      return;
    }
    exec(command);
  };
  editor.fontSizeConfig = options;
  return editor;
};
