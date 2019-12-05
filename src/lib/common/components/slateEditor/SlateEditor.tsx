import * as React from 'react';
import { Node, createEditor, Editor } from 'slate';
import { withFontSizes } from '../../../slate/plugins/fontSize/withFontSizes';
import { withLists } from '../../../slate/plugins/lists/withLists';
import { withHeadings } from '../../../slate/plugins/heading/withHeadings';
import { withAlignments } from '../../../slate/plugins/alignment/withAlignments';
import { withLinks } from '../../../slate/plugins/links/withLinks';
import {
  withEmphasize,
  MARK_HOTKEYS,
  EmphasizeTypes,
  EmphasizeCommands,
} from '../../../slate/plugins/emphasize/withEmphasize';
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
import { EmphasizeButton } from '../../../slate/plugins/emphasize/EmphasizeButton';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles, { WithStyles } from '@material-ui/styles/withStyles';
import classNames from 'classnames';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import InputGroup from 'guestbell-forms/build/components/inputGroup';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';
import { withHistory } from 'slate-history';

export type SlateEditorOnChangeHandler = (val: {
  value: Node[];
  isDirty: boolean;
  isValid: boolean;
}) => void;

export interface SlateEditorCustomProps {
  value: Node[];
  initialValue?: Node[];
  onChange?: SlateEditorOnChangeHandler;
  placeholder?: string;
  label?: JSX.Element | string;
  title?: JSX.Element | string;
  maxChars?: number;
  readOnly?: boolean;
}

const styles = ({ spacing, palette, typography }: Theme) =>
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
    },
    editableEditable: {
      background: palette.grey[100],
    },
    characterCountContainer: {
      position: 'absolute',
      right: 3,
      bottom: 3,
      fontSize: typography.caption.fontSize,
      color: palette.grey[500],
      transition: '0.5s color',
    },
    characterCountContainerWarning: {
      color: yellow[700],
    },
    characterCountContainerError: {
      color: red[700],
    },
    root: {
      position: 'relative',
    },
  });

const allHotkeys = { ...MARK_HOTKEYS };

type SlateEditorProps = SlateEditorCustomProps & WithStyles<typeof styles>;

const SlateEditor: React.SFC<SlateEditorProps> = props => {
  const { classes } = props;
  const editor = React.useRef(
    withHistory(
      withFontSizes()(
        withLists(
          withHeadings()(
            withAlignments(withLinks(withEmphasize(withReact(createEditor()))))
          )
        )
      )
    )
  ).current;
  const [hasFocus, setHasFocus] = React.useState(false);
  const onFocus = () => setHasFocus(true);
  const onBlur = () => setHasFocus(false);

  let allowNewChar = true;
  let chars = 0;
  let charsLeft = 0;
  let progress = 0;
  if (props.maxChars && !props.readOnly) {
    try {
      chars = Editor.text(editor, {
        anchor: Editor.start(editor, []),
        focus: Editor.end(editor, []),
      }).length;
    } catch (error) {
      chars = 0;
    }
    charsLeft = props.maxChars - chars;
    progress = (charsLeft / props.maxChars) * 100;
    if (charsLeft === 0) {
      allowNewChar = false;
    }
  }

  const onChange = (val: Node[]) =>
    props.onChange({ value: val, isValid: allowNewChar, isDirty: true });

  const [key, setKey] = React.useState(0);
  React.useEffect(() => setKey(key + 1), [props.readOnly && props.value]);
  return (
    <InputGroup title={props.title} key={props.readOnly ? key : undefined}>
      <Slate editor={editor} defaultValue={props.value} onChange={onChange}>
        <div className={classNames('slate-editor', classes.root)}>
          {!props.readOnly && (
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
          )}
          <Editable
            readOnly={props.readOnly}
            className={classNames(classes.editable, {
              [classes.editableEditable]: !props.readOnly,
            })}
            renderMark={renderMark}
            renderElement={renderElement}
            onKeyDown={event => {
              if (!allowNewChar) {
                if (!(event.keyCode === 8 || event.keyCode === 46)) {
                  event.preventDefault();
                  return;
                }
              }
              for (const hotkey in allHotkeys) {
                if (isHotkey(hotkey, (event as unknown) as KeyboardEvent)) {
                  event.preventDefault();
                  editor.exec({
                    type: EmphasizeCommands.ToggleEmphasize,
                    mark: { type: MARK_HOTKEYS[hotkey] },
                  });
                }
              }
              if (
                isHotkey('shift+enter', (event as unknown) as KeyboardEvent)
              ) {
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
          {props.maxChars && !props.readOnly && (
            <div
              className={classNames(
                'slate-editor__char-count',
                classes.characterCountContainer,
                {
                  [classes.characterCountContainerWarning]: progress <= 10,
                  'slate-editor__char-count--warning': progress <= 10,
                  [classes.characterCountContainerError]: progress <= 0,
                  'slate-editor__char-count--error': progress <= 0,
                }
              )}
            >
              {chars}/{props.maxChars}
            </div>
          )}
          {editor.selection && !props.readOnly && (
            <>
              <HoveringToolbar>
                <EmphasizeButton type={EmphasizeTypes.Bold} />
                <EmphasizeButton type={EmphasizeTypes.Italic} />
                <EmphasizeButton type={EmphasizeTypes.Underline} />
                <LinkButton />
              </HoveringToolbar>
            </>
          )}
          {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
        </div>
      </Slate>
    </InputGroup>
  );
};

export default withStyles(styles)(SlateEditor);
