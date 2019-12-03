import * as React from 'react';
import { Portal, Paper } from '@material-ui/core';
import { useSlate, ReactEditor } from 'slate-react';
import { Editor, Range } from 'slate';
import { lazyLoad } from '@react-page/core';
import { MarkButton } from '../../plugins/marks/MarkButton';
import { MarkTypes } from '../../plugins/marks/withMarks';
import { LinkButton } from '../../plugins/links/LinkButton';

const ItalicIcon = lazyLoad(() => import('@material-ui/icons/FormatItalic'));
const FormatBold = lazyLoad(() => import('@material-ui/icons/FormatBold'));
const FormatUnderlined = lazyLoad(() =>
  import('@material-ui/icons/FormatUnderlined')
);
const LinkIcon = lazyLoad(() => import('@material-ui/icons/Link'));

export const HoveringToolbar: React.FC = () => {
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
      Editor.text(editor, selection) === ''
    ) {
      el.style.opacity = '0';
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = '1';
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;

    el.style.left = `${Math.floor(
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
    )}px`;
  });
  return (
    <Portal>
      <div ref={ref} className={'ory-plugins-content-slate-inline-toolbar'}>
        <Paper style={{ padding: 0 }}>
          <MarkButton type={MarkTypes.Bold} icon={<FormatBold />} />
          <MarkButton type={MarkTypes.Italic} icon={<ItalicIcon />} />
          <MarkButton type={MarkTypes.Underline} icon={<FormatUnderlined />} />
          <LinkButton icon={<LinkIcon />} />
        </Paper>
      </div>
    </Portal>
  );
};
