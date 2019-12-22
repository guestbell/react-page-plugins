import { Editor } from 'slate';
import { RGBColor } from 'react-color';
import { ColorType } from './colorType';

export const isColorActive = (editor: Editor) => {
  const [node] = Editor.elements(editor, {
    match: { type: ColorType },
    mode: 'all',
  });
  return !!node;
};

export const getActiveColors = (editor: Editor): RGBColor[] => {
  const nodes = Editor.nodes(editor, { at: editor.selection, mode: 'all' });
  let colors = [];
  for (const [node] of nodes) {
    colors.push(node.color);
  }
  colors = colors.filter(i => i);
  const unique = new Set(colors);
  return [...unique];
};

export const ColorCommands = {
  SetColor: 'set_color',
  ClearColor: 'clear_color',
};

const unwrapColor = (editor: Editor) => {
  Editor.unwrapNodes(editor, { match: { type: ColorType } });
};

const wrapColor = (editor: Editor, color: RGBColor) => {
  const isActive = isColorActive(editor);

  const c = { type: ColorType, color, children: [] };
  // Wrap no matter what because if it's active, it splits the inline correctly
  Editor.wrapNodes(editor, c, { split: true });
  if (isActive) {
    // Unwrap the new wrap
    unwrapColor(editor);
    // Unwrap the original color
    unwrapColor(editor);
    // Wrap to give it the new color
    Editor.wrapNodes(editor, c, { split: true });
  }
  // Editor.collapse(editor, { edge: 'end' });
};

export const withColors = (editor: Editor) => {
  const { exec, isInline } = editor;

  editor.isInline = element => {
    return element.type === ColorType ? true : isInline(element);
  };

  editor.exec = command => {
    if (command.type === ColorCommands.SetColor) {
      const { color } = command;

      if (editor.selection) {
        wrapColor(editor, color);
      }

      return;
    }

    if (command.type === ColorCommands.ClearColor) {
      if (editor.selection) {
        unwrapColor(editor);
      }

      return;
    }
    exec(command);
  };

  return editor;
};
