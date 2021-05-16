import * as React from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { Editor, Range } from 'slate';

export const SelectionToolbar: React.FC<{
  children: (enabled: boolean) => JSX.Element;
}> = props => {
  const editor = useSlate();

  const { selection } = editor;
  if (
    !selection ||
    !ReactEditor.isFocused(editor) ||
    Range.isCollapsed(selection) ||
    Editor.string(editor, selection) === ''
  ) {
    return props.children(false);
  }
  return props.children(true);
};
