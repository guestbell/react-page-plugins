import { Editor, Element } from 'slate';
import React from 'react';
var classnames = require('classnames');

export enum AlignmentTypes {
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}

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
    if (command.type === 'toggle_alignment') {
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

export const addAlignmentStyles = (element: Element, children: JSX.Element) => {
  const { alignment } = element;
  if (!alignment) {
    return children;
  }
  return React.cloneElement(children, {
    className: classnames(
      children && children.props && children.props.className,
      `block-alignment-${alignment}`
    ),
  });
};
