import * as React from 'react';
import { Node, createEditor, Editor, Transforms } from 'slate';
import { withFontSizes } from '../../../slate/plugins/fontSize/withFontSizes';
import { withLists } from '../../../slate/plugins/lists/withLists';
import { withHeadings } from '../../../slate/plugins/heading/withHeadings';
import { withAlignments } from '../../../slate/plugins/alignment/withAlignments';
import { withLinks } from '../../../slate/plugins/links/withLinks';
import {
  withEmphasize,
  MARK_HOTKEYS,
  EmphasizeTypes,
} from '../../../slate/plugins/emphasize';
import { withReact, Slate, Editable } from 'slate-react';
import isHotkey from 'is-hotkey';
import { HoveringToolbar } from './HoveringToolbar';
import FontSizeButton from '../../../slate/plugins/fontSize/FontSizeButton';
import { AlignmentButtons } from '../../../slate/plugins/alignment/AlignmentButtons';
import { EmphasizeButton } from '../../../slate/plugins/emphasize/EmphasizeButton';
import classNames from 'classnames';
import { Theme } from '@mui/material/styles';
import InputGroup from 'guestbell-forms/build/components/inputGroup';
import { withHistory } from 'slate-history';
import { SlateValue } from '../../types/slate/SlateValue';
import { Migrator } from '../../slateMigrations/Migrator';
import { Migration } from '../../slateMigrations/Migration';
import { slateEmptyValue } from './slateEmptyValue';
import { withColors } from '../../../slate/plugins/color';
import ColorButton from '../../../slate/plugins/color/ColorButton';
import makeStyles from '@mui/styles/makeStyles';
import { withHtml } from '../../../slate/plugins/htmlPaste/withHtmlPaste';
import { withQuotes } from '../../../slate/plugins/quote';
import HeadingButtonCompact from '../../../slate/plugins/heading/HeadingButtonCompact';
import { ListButtons } from '../../../slate/plugins/lists/ListButtons';
import { LinkButton } from '../../../slate/plugins/links/LinkButton';
import { QuoteButton } from '../../../slate/plugins/quote/QuoteButton';
import { renderElement, renderLeaf } from './Components';
import { SelectionToolbar } from './SelectionToolbar';
import Divider from '@mui/material/Divider/Divider';
import Grid from '@mui/material/Grid/Grid';

import { yellow, red } from '@mui/material/colors';

export type SlateEditorOnChangeHandler = (val: {
  value: SlateValue;
  isDirty: boolean;
  isValid: boolean;
}) => void;

export enum ToolbarButtonTypes {
  Link = 1,
  Heading = 2,
  Lists = 4,
  Color = 8,
  Alignment = 16,
  Quote = 32,
  FontSize = 64,
}

export enum HoverButtonTypes {
  Bold = 1,
  Italic = 2,
  Underline = 4,
  Link = 8,
  Color = 16,
}

export interface SlateEditorCustomProps {
  value: SlateValue;
  onChange: SlateEditorOnChangeHandler;
  className?: string;
  placeholder?: string;
  label?: JSX.Element | string;
  title?: JSX.Element | string;
  maxChars?: number;
  version?: number;
  migrations?: Migration[];
  extraToolbarButtons?: JSX.Element;
  extraHoverButtons?: JSX.Element;
  toolbarButtons?: ToolbarButtonTypes;
  hoverButtons?: HoverButtonTypes;
  hideToolbar?: boolean;
}

const useStyles = makeStyles(({ spacing, palette, typography }: Theme) => ({
  toolbar: {
    // marginBottom: spacing(3),
    alignItems: 'center',
    backgroundColor: palette.background.paper,
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
    // background: palette.grey[100],
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
}));

const resetEditor = <T extends Node = Node>(
  editor: Editor,
  nodes?: SlateValue
) => {
  Editor.withoutNormalizing(editor, () => {
    // Remove all nodes
    editor.children = nodes ?? [];

    // Reset the selection to the start of the document
    Transforms.select(editor, [0, 0]);

    // Normalize the editor state
    editor.onChange();
  });
};

const allHotkeys = { ...MARK_HOTKEYS };

type SlateEditorProps = SlateEditorCustomProps;

const SlateEditor: React.FC<SlateEditorProps> = props => {
  const {
    migrations,
    extraToolbarButtons,
    version,
    toolbarButtons = ToolbarButtonTypes.FontSize | ToolbarButtonTypes.Alignment,
    hoverButtons = HoverButtonTypes.Bold |
      HoverButtonTypes.Italic |
      HoverButtonTypes.Underline |
      HoverButtonTypes.Color,
    className,
    hideToolbar,
  } = props;
  const classes = useStyles();
  const editor = React.useMemo(
    () =>
      withHistory(
        withHtml(
          withQuotes()(
            withColors(
              withFontSizes()(
                withLists(
                  withHeadings()(
                    withAlignments(
                      withLinks(withEmphasize(withReact(createEditor())))
                    )
                  )
                )
              )
            )
          )
        )
      ),
    []
  );

  let allowNewChar = true;
  let chars = 0;
  let charsLeft = 0;
  let progress = 0;
  if (props.maxChars) {
    try {
      chars = Editor.string(editor, {
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

  const [value, setValue] = React.useState<SlateValue | null>(props.value);

  // This is the initial check and/or migration
  React.useEffect(() => {
    let isDirty = false;
    let newValue: SlateValue = props.value;
    if (
      !value ||
      !Array.isArray(value) ||
      !value.every(node => Node.isNode(node))
    ) {
      newValue = slateEmptyValue();
      isDirty = true;
    } else {
      const migrationResult = Migrator.migrateState(
        version,
        props.value,
        migrations
      );
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }
    if (isDirty) {
      props.onChange({
        value: newValue,
        isValid: allowNewChar,
        isDirty,
      });
      setValue(newValue);
    }
  }, []);

  React.useEffect(() => {
    if (value !== null && props.value !== value) {
      setValue(props.value);
      resetEditor(editor, props.value);
    }
  }, [props.value]);

  const onChange = React.useCallback(
    (val: SlateValue) => {
      // This might possibly be stupid but right now, it triggers on every focus which causes
      // problems with re-rendering components and losing focus in modals (link, color)
      if (JSON.stringify(value) !== JSON.stringify(val)) {
        const newValue: SlateValue = val;
        setValue(newValue);
        props.onChange({
          value: newValue,
          isValid: allowNewChar,
          isDirty: true,
        });
      }
    },
    [props.onChange, value]
  );
  return value ? (
    <InputGroup title={props.title}>
      <Slate editor={editor} initialValue={value} onChange={onChange}>
        <div className={classNames('slate-editor', className, classes.root)}>
          {!hideToolbar && (
            <div className={classes.toolbar}>
              {props.label && (
                <div
                  className={classNames('slate-editor__label', classes.label, {
                    'slate-editor__label--active': false,
                    [classes.labelFocused]: false,
                  })}
                >
                  {props.label}
                </div>
              )}
              <Grid container alignItems="center" className={classes.root}>
                {(toolbarButtons & ToolbarButtonTypes.Heading) !== 0 && (
                  <HeadingButtonCompact />
                )}
                {(toolbarButtons & ToolbarButtonTypes.FontSize) !== 0 && (
                  <FontSizeButton />
                )}
                {(toolbarButtons & ToolbarButtonTypes.Color) !== 0 && (
                  <ColorButton />
                )}
                {(toolbarButtons & ToolbarButtonTypes.Alignment) !== 0 && (
                  <AlignmentButtons />
                )}
                {(toolbarButtons & ToolbarButtonTypes.Lists) !== 0 && (
                  <ListButtons />
                )}
                {(toolbarButtons & ToolbarButtonTypes.Link) !== 0 && (
                  <LinkButton />
                )}
                {(toolbarButtons & ToolbarButtonTypes.Quote) !== 0 && (
                  <QuoteButton />
                )}
                <SelectionToolbar>
                  {enabled => (
                    <>
                      <Divider orientation="vertical" flexItem={true} />
                      {(hoverButtons & HoverButtonTypes.Bold) !== 0 && (
                        <EmphasizeButton
                          type={EmphasizeTypes.Bold}
                          disabled={!enabled}
                        />
                      )}
                      {(hoverButtons & HoverButtonTypes.Italic) !== 0 && (
                        <EmphasizeButton
                          type={EmphasizeTypes.Italic}
                          disabled={!enabled}
                        />
                      )}
                      {(hoverButtons & HoverButtonTypes.Underline) !== 0 && (
                        <EmphasizeButton
                          type={EmphasizeTypes.Underline}
                          disabled={!enabled}
                        />
                      )}
                      {(hoverButtons & HoverButtonTypes.Link) !== 0 && (
                        <LinkButton disabled={!enabled} />
                      )}
                      {(hoverButtons & HoverButtonTypes.Color) !== 0 && (
                        <ColorButton disabled={!enabled} />
                      )}
                    </>
                  )}
                </SelectionToolbar>
                {extraToolbarButtons}
              </Grid>
            </div>
          )}
          <Editable
            className={classNames('slate-editable', classes.editable)}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={event => {
              if (!allowNewChar) {
                if (!(event.keyCode === 8 || event.keyCode === 46)) {
                  event.preventDefault();
                  return;
                }
              }
              for (const hotkey in allHotkeys) {
                if (isHotkey(hotkey, event as unknown as KeyboardEvent)) {
                  event.preventDefault();
                  editor.toggleEmphasis(MARK_HOTKEYS[hotkey]);
                }
              }
              if (isHotkey('shift+enter', event as unknown as KeyboardEvent)) {
                event.preventDefault();
                editor.insertText('\n');
              }
            }}
          />
          {props.maxChars && (
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
          {false && (
            <HoveringToolbar>
              {(hoverButtons & HoverButtonTypes.Bold) !== 0 && (
                <EmphasizeButton type={EmphasizeTypes.Bold} />
              )}
              {(hoverButtons & HoverButtonTypes.Italic) !== 0 && (
                <EmphasizeButton type={EmphasizeTypes.Italic} />
              )}
              {(hoverButtons & HoverButtonTypes.Underline) !== 0 && (
                <EmphasizeButton type={EmphasizeTypes.Underline} />
              )}
              {(hoverButtons & HoverButtonTypes.Link) !== 0 && <LinkButton />}
              {(hoverButtons & HoverButtonTypes.Color) !== 0 && <ColorButton />}
              {props.extraHoverButtons}
            </HoveringToolbar>
          )}
          {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
        </div>
      </Slate>
    </InputGroup>
  ) : null;
};

export default SlateEditor;
