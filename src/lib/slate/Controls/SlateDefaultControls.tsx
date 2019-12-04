import * as React from 'react';

import { SlateControlsProps as SlateControlsCustomProps } from '../types/controls';
import {
  withReact,
  Slate,
  Editable,
  RenderElementProps,
  useEditor,
  RenderMarkProps,
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
import {
  withAlignments,
  addAlignmentStyles,
} from '../plugins/alignment/withAlignments';
import { Heading } from '../plugins/heading/Heading';
import { Paragraph } from '../plugins/paragraph/Paragraph';
import { withHeadings } from '../plugins/heading/withHeadings';
import { List } from '../plugins/lists/List';
import { withLists } from '../plugins/lists/withLists';
import { ListButtons } from '../plugins/lists/ListButtons';
import {
  withFontSizes,
  addFontSizeStyles,
} from '../plugins/fontSize/withFontSizes';
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
import { EmphasizeTypes } from '../plugins/emphasize/withEmphasize';
import { slateEmptyValue } from '../../common/components/slateEditor/slateEmptyValue';
import { withHistory } from 'slate-history';

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
  return addFontSizeStyles(editor, element, addAlignmentStyles(element, comp));
};

export const renderMark: React.FC<RenderMarkProps> = props => {
  const comp = Emphasize(props);
  return comp;
};

const SlateDefaultControls: React.SFC<SlateControlsProps> = props => {
  const defaultValue = props.state.slateState || slateEmptyValue();

  const { readOnly, focused, remove, translations, onChange } = props;
  const editor = React.useRef(
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
    )
  ).current;

  const stateChanged = (slateState: Node[]) => onChange({ slateState });

  const debouncedOnChange = React.useRef(
    debounce(stateChanged, 2000, { leading: false, trailing: true })
  ).current;

  /*React.useEffect(() => {
    setTimeout(
      () =>
        onChange({
          slateState: defaultValue2,
          slateStateTimestamp: new Date().getTime(),
        }),
      1000
    );
  }, []);*/

  return (
    <div className="slateControls ory-prevent-blur">
      <Slate
        key={props.state.slateStateTimestamp}
        editor={editor}
        defaultValue={defaultValue}
        onChange={debouncedOnChange}
      >
        <Editable
          readOnly={props.readOnly}
          placeholder={translations.textPlaceholder}
          renderMark={renderMark}
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
            if (isHotkey('shift+enter', (event as unknown) as KeyboardEvent)) {
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
              theme={props.theme}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <HeadingButtonCompact />
                <FontSizeButton />
                <ColorButton />
                <AlignmentButtons />
                <ListButtons />
                <LinkButton />
                <QuoteButton />
              </div>
            </BottomToolbar>
          </>
        )}
        {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
      </Slate>
    </div>
  );
};

export default SlateDefaultControls;
