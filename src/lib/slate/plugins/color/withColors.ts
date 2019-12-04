import { Editor, Mark } from 'slate';
import React from 'react';
import { RGBColor } from 'react-color';

export const isColorActive = (editor: Editor) => {
  const [node] = Editor.elements(editor, {
    match: { type: 'color' },
    mode: 'all',
  });
  return !!node;
};

const unwrapColor = (editor: Editor) => {
  Editor.unwrapNodes(editor, { match: { type: 'color' } });
};

const wrapColor = (editor: Editor, color: RGBColor) => {
  const isActive = isColorActive(editor);

  const c = { type: 'color', color, children: [] };
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
    return element.type === 'color' ? true : isInline(element);
  };

  editor.exec = command => {
    if (command.type === 'set_color') {
      const { color } = command;

      if (editor.selection) {
        wrapColor(editor, color);
      }

      return;
    }

    if (command.type === 'clear_color') {
      if (editor.selection) {
        unwrapColor(editor);
      }

      return;
    }
    exec(command);
  };

  return editor;
};

export const addColorStyles = (element: Mark, children: JSX.Element) => {
  const { color } = element;
  if (!color) {
    return children;
  }
  return (
    children &&
    React.cloneElement(children, {
      style: {
        ...(children && children.props && children.props.style),
        color: `rgba(${color.r},${color.g},${color.b},${color.a})`,
      },
    })
  );
};
