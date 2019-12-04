import { Editor, Element } from 'slate';
import React from 'react';

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

export interface FontSizePluginOptions {
  allowedFontSizes?: number[];
  fontSizesNames?: { [key: number]: string };
  fontSizesStyle?: { [key: number]: string };
}

export const FontSizeCommands = {
  ChangeFontSize: 'change_fontsize',
  ClearFontSize: 'clear_fontsize',
};

export const defaultOptions: FontSizePluginOptions = {
  allowedFontSizes: [1, 2, 4, 5],
  fontSizesNames: { 1: 'Smaller', 2: 'Small', 4: 'Large', 5: 'Larger' },
  fontSizesStyle: {
    1: '0.8rem',
    2: '0.9rem',
    4: '1.25rem',
    5: '1.5rem',
  },
};

export const withFontSizes = (options?: FontSizePluginOptions) => (
  editor: Editor
) => {
  options = { ...defaultOptions, ...options };
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

export const addFontSizeStyles = (
  editor: Editor,
  element: Element,
  children: JSX.Element
) => {
  const { fontSize } = element;
  if (!fontSize) {
    return children;
  }
  const config: FontSizePluginOptions = editor.fontSizeConfig;
  return React.cloneElement(children, {
    style: {
      ...(children && children.props && children.props.style),
      fontSize:
        (config.fontSizesStyle && config.fontSizesStyle[fontSize]) || fontSize,
    },
  });
};
