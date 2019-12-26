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
} from '../../../slate/plugins/emphasize';
import { withReact, Slate, Editable, ReactEditor } from 'slate-react';
import isHotkey from 'is-hotkey';
import {
  renderLeaf,
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
import { SlateValue } from '../../types/slate/SlateValue';
import { Migrator } from '../../slateMigrations/Migrator';
import { Migration } from '../../slateMigrations/Migration';
import { slateEmptyValue } from './slateEmptyValue';

export type SlateEditorOnChangeHandler = (val: {
  value: SlateValue;
  isDirty: boolean;
  isValid: boolean;
}) => void;

export interface SlateEditorCustomProps {
  value: SlateValue;
  onChange: SlateEditorOnChangeHandler;
  placeholder?: string;
  label?: JSX.Element | string;
  title?: JSX.Element | string;
  maxChars?: number;
  version?: number;
  migrations?: Migration[];
  extraToolbarButtons?: JSX.Element;
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

const SlateEditor: React.FC<SlateEditorProps> = props => {
  const { classes, migrations, extraToolbarButtons, version } = props;
  const editor: ReactEditor = React.useRef(
    withHistory<ReactEditor>(
      withFontSizes()(
        withLists(
          withHeadings()(
            withAlignments(withLinks(withEmphasize(withReact(createEditor()))))
          )
        )
      )
    )
  ).current;

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
    }
  }, [props.value]);

  const onChange = React.useCallback(
    (val: Node[]) => {
      const newValue: SlateValue = val;
      setValue(newValue);
      props.onChange({
        value: newValue,
        isValid: allowNewChar,
        isDirty: true,
      });
    },
    [props.onChange]
  );

  return (
    value && (
      <InputGroup title={props.title}>
        <Slate editor={editor} value={value} onChange={onChange}>
          <div className={classNames('slate-editor', classes.root)}>
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
              <HeadingButtonCompact />
              <FontSizeButton />
              <AlignmentButtons />
              <ListButtons />
              <LinkButton />
              {extraToolbarButtons}
            </div>
            <Editable
              className={classNames(classes.editable)}
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
            {editor.selection && (
              <HoveringToolbar>
                <EmphasizeButton type={EmphasizeTypes.Bold} />
                <EmphasizeButton type={EmphasizeTypes.Italic} />
                <EmphasizeButton type={EmphasizeTypes.Underline} />
                <LinkButton />
              </HoveringToolbar>
            )}
            {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
          </div>
        </Slate>
      </InputGroup>
    )
  );
};

export default withStyles(styles)(SlateEditor) as React.ComponentType<
  SlateEditorCustomProps & Partial<WithStyles<typeof styles>>
>;
