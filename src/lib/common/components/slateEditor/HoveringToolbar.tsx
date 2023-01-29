import * as React from 'react';
import Paper from '@mui/material/Paper';
import Portal from '@mui/material/Portal';
import { ReactEditor, useSlate } from 'slate-react';
import { Editor, Range } from 'slate';

export const HoveringToolbar: React.FC = props => {
  const ref = React.useRef<HTMLDivElement>();
  const editor = useSlate();
  React.useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.style.opacity = '0';
      el.style.pointerEvents = 'none';
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = '1';
    el.style.pointerEvents = 'auto';
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;

    el.style.left = `${Math.floor(
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    )}px`;
  });
  return (
    <Portal>
      <div ref={ref} className={'ory-plugins-content-slate-inline-toolbar'}>
        <Paper style={{ padding: 0 }}>{props.children}</Paper>
      </div>
    </Portal>
  );
};
