import * as React from 'react';

import { SlateControlsProps as SlateControlsCustomProps } from '../types/controls';
import {
  withReact,
  Slate,
  Editable,
  RenderElementProps,
  useEditor,
  RenderLeafProps,
  ReactEditor,
} from 'slate-react';
import { createEditor, Node } from 'slate';
import debounce from 'lodash/debounce';
import { HoveringToolbar } from './hoveringToolbar/HoveringToolbar';
import {
  withEmphasize,
  MARK_HOTKEYS,
  EmphasizeCommands,
} from '../plugins/emphasize/withEmphasize';
import { Emphasize } from '../plugins/emphasize/Emphasize';
import { withLinks } from '../plugins/links/withLinks';
import { Link } from '../plugins/links/Link';
import isHotkey from 'is-hotkey';
import { AlignmentButtons } from '../plugins/alignment/AlignmentButtons';
import { withAlignments, addAlignmentStyles } from '../plugins/alignment';
import { Heading } from '../plugins/heading/Heading';
import { Paragraph } from '../plugins/paragraph/Paragraph';
import { withHeadings } from '../plugins/heading/withHeadings';
import { List } from '../plugins/lists/List';
import { withLists } from '../plugins/lists/withLists';
import { ListButtons } from '../plugins/lists/ListButtons';
import { withFontSizes, addFontSizeStyles } from '../plugins/fontSize';
import FontSizeButton from '../plugins/fontSize/FontSizeButton';
import ColorButton from '../plugins/color/ColorButton';
import { withColors } from '../plugins/color/withColors';
import { ColorElement } from '../plugins/color/ColorElement';
import { withQuotes } from '../plugins/quote/withQuotes';
import { Quote } from '../plugins/quote/Quote';
import { QuoteButton } from '../plugins/quote/QuoteButton';
import BottomToolbar from '../../common/components/bottomToolbar/BottomToolbar';
import { withHtml } from '../plugins/htmlPaste/withHtmlPaste';
import { LinkButton } from '../plugins/links/LinkButton';
import HeadingButtonCompact from '../plugins/heading/HeadingButtonCompact';
import { EmphasizeButton } from '../plugins/emphasize/EmphasizeButton';
import { EmphasizeTypes } from '../plugins/emphasize/emphasizeTypes';
import { slateEmptyValue } from '../../common/components/slateEditor/slateEmptyValue';
import { withHistory } from 'slate-history';
import migrations from '../../common/slateMigrations/migrations';
import { SlateValue } from '../../common/types/slate/SlateValue';
import { Migrator } from '../../common/slateMigrations/Migrator';
import PaddingComponent from '../../common/utils/PaddingComponent';

type SlateControlsProps = SlateControlsCustomProps;

const allHotkeys = { ...MARK_HOTKEYS };

export const renderElement: React.FC<RenderElementProps> = props => {
  const { element } = props;
  const editor = useEditor();
  const comp =
    Link(props) ||
    Heading(props) ||
    List(props) ||
    ColorElement(props) ||
    Quote(props) ||
    Paragraph(props);
  return addFontSizeStyles(
    editor.fontSizeConfig,
    element,
    addAlignmentStyles(element, comp)
  );
};

export const renderLeaf: React.FC<RenderLeafProps> = props => {
  const { attributes } = props;
  const children = Emphasize(props);
  return <span {...attributes}>{children}</span>;
};

const SlateDefaultControls: React.SFC<SlateControlsProps> = props => {
  const { readOnly, focused, remove, translations, onChange } = props;
  const editor = React.useRef(
    withHistory<ReactEditor>(
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
    )
  ).current;

  const [value, setValue] = React.useState(
    (props.state.value &&
      Array.isArray(props.state.value) &&
      props.state.value.every(node => Node.isNode(node)) &&
      props.state.value) ||
      slateEmptyValue()
  );

  const debouncedOnChange = React.useRef(
    debounce(onChange, 500, { leading: false, trailing: true })
  ).current;

  const stateChanged = React.useCallback((slateState: SlateValue) => {
    setValue(slateState);
    debouncedOnChange({ value: slateState });
  }, []);

  // This is the initial check and/or migration
  React.useEffect(() => {
    let isDirty = false;
    let newValue: SlateValue = props.state.value;
    if (
      !value ||
      !Array.isArray(value) ||
      !value.every(node => Node.isNode(node))
    ) {
      newValue = slateEmptyValue();
      isDirty = true;
    } else {
      const migrationResult = Migrator.migrateState(
        props.state.version,
        props.state.value,
        migrations
      );
      isDirty = migrationResult.changed;
      newValue = migrationResult.migratedState;
    }
    if (isDirty) {
      stateChanged(newValue);
    }
  }, []);

  return (
    <PaddingComponent state={props.state}>
      <div className="slateControls ory-prevent-blur">
        <Slate
          editor={editor}
          value={value}
          onChange={stateChanged}
          migrations={migrations}
        >
          <Editable
            readOnly={props.readOnly}
            placeholder={translations.textPlaceholder}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={event => {
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
          {!readOnly && focused && (
            <>
              <HoveringToolbar>
                <EmphasizeButton type={EmphasizeTypes.Bold} />
                <EmphasizeButton type={EmphasizeTypes.Italic} />
                <EmphasizeButton type={EmphasizeTypes.Underline} />
                <LinkButton />
                <ColorButton />
              </HoveringToolbar>
              <BottomToolbar
                icon={props.IconComponent}
                open={props.focused}
                title={props.translations.pluginName}
                onDelete={remove}
                {...props}
              >
                <HeadingButtonCompact />
                <FontSizeButton />
                <ColorButton />
                <AlignmentButtons />
                <ListButtons />
                <LinkButton />
                <QuoteButton />
              </BottomToolbar>
            </>
          )}
          {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
        </Slate>
      </div>
    </PaddingComponent>
  );
};

export default SlateDefaultControls;
