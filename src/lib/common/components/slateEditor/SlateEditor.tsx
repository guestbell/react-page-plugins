import * as React from 'react';
import { Node, createEditor } from 'slate';
import { withFontSizes } from '../../../slate/plugins/fontSize/withFontSizes';
import { withLists } from '../../../slate/plugins/lists/withLists';
import { withHeadings } from '../../../slate/plugins/heading/withHeadings';
import { withAlignments } from '../../../slate/plugins/alignment/withAlignments';
import { withLinks } from '../../../slate/plugins/links/withLinks';
import {
  withMarks,
  MARK_HOTKEYS,
  MarkTypes,
} from '../../../slate/plugins/marks/withMarks';
import { withReact, Slate, Editable } from 'slate-react';
import isHotkey from 'is-hotkey';
import {
  renderMark,
  renderElement,
} from '../../../slate/Controls/SlateDefaultControls';
import { HoveringToolbar } from '../../../slate/Controls/hoveringToolbar/HoveringToolbar';
import HeadingButtonCompact from '../../../slate/plugins/heading/HeadingButtonCompact';
import FontSizeButton from '../../../slate/plugins/fontSize/FontSizeButton';
import { AlignmentButtons } from '../../../slate/plugins/alignment/AlignmentButtons';
import { ListButtons } from '../../../slate/plugins/lists/ListButtons';
import { LinkButton } from '../../../slate/plugins/links/LinkButton';
import { MarkButton } from '../../../slate/plugins/marks/MarkButton';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import classNames from 'classnames';
import { Theme } from '@material-ui/core';

export interface SlateEditorCustomProps {
  value: Node[];
  onChange: (value: Node[]) => void;
  placeholder?: string;
  label?: JSX.Element | string;
}

const styles = ({ spacing, palette }: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      padding: spacing(),
      fontSize: '1.2rem',
      transition: '0.5s color',
    },
    labelFocused: {
      color: palette.primary.main,
    },
    editable: {
      padding: spacing(2),
      background: palette.grey[100],
    },
  });

const allHotkeys = { ...MARK_HOTKEYS };

type SlateEditorProps = SlateEditorCustomProps & WithStyles<typeof styles>;

const SlateEditor: React.SFC<SlateEditorProps> = props => {
  const { classes } = props;
  const editor = React.useRef(
    withFontSizes()(
      withLists(
        withHeadings()(
          withAlignments(withLinks(withMarks(withReact(createEditor()))))
        )
      )
    )
  ).current;
  const [hasFocus, setHasFocus] = React.useState(false);
  const onFocus = () => setHasFocus(true);
  const onBlur = () => setHasFocus(false);
  return (
    <Slate editor={editor} defaultValue={props.value} onChange={props.onChange}>
      <div className={classes.toolbar}>
        {props.label && (
          <div
            className={classNames('slate-editor__label', classes.label, {
              'slate-editor__label--active': hasFocus,
              [classes.labelFocused]: hasFocus,
            })}
          >
            {props.label}
          </div>
        )}
        <HeadingButtonCompact />
        <FontSizeButton />
        <AlignmentButtons />
        <ListButtons />
        <LinkButton />
      </div>
      <Editable
        className={classes.editable}
        renderMark={renderMark}
        renderElement={renderElement}
        onKeyDown={event => {
          for (const hotkey in allHotkeys) {
            if (isHotkey(hotkey, (event as unknown) as KeyboardEvent)) {
              event.preventDefault();
              editor.exec({
                type: 'toggle_mark',
                mark: { type: MARK_HOTKEYS[hotkey] },
              });
            }
          }
          if (isHotkey('shift+enter', (event as unknown) as KeyboardEvent)) {
            event.preventDefault();
            editor.exec({
              type: 'insert_text',
              text: '\n',
            });
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {editor.selection && (
        <>
          <HoveringToolbar>
            <MarkButton type={MarkTypes.Bold} />
            <MarkButton type={MarkTypes.Italic} />
            <MarkButton type={MarkTypes.Underline} />
            <LinkButton />
          </HoveringToolbar>
        </>
      )}
      {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
    </Slate>
  );
};

export default withStyles(styles)(SlateEditor);
