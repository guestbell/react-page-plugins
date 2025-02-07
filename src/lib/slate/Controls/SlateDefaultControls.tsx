import * as React from 'react';

import { SlateControlsProps as SlateControlsCustomProps } from '../types/controls';
import { withReact, Slate, Editable } from 'slate-react';
import { createEditor, Node } from 'slate';
import debounce from 'lodash/debounce';
import { HoveringToolbar } from '../../common/components/slateEditor/HoveringToolbar';
import {
  withEmphasize,
  MARK_HOTKEYS,
} from '../plugins/emphasize/withEmphasize';
import { withLinks } from '../plugins/links/withLinks';
import isHotkey from 'is-hotkey';
import { AlignmentButtons } from '../plugins/alignment/AlignmentButtons';
import { withAlignments } from '../plugins/alignment';
import { withHeadings } from '../plugins/heading/withHeadings';
import { withLists } from '../plugins/lists/withLists';
import { ListButtons } from '../plugins/lists/ListButtons';
import { withFontSizes } from '../plugins/fontSize';
import ColorButton from '../plugins/color/ColorButton';
import { withColors } from '../plugins/color/withColors';
import { withQuotes } from '../plugins/quote/withQuotes';
import { QuoteButton } from '../plugins/quote/QuoteButton';
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
import {
  renderElement,
  renderLeaf,
} from '../../common/components/slateEditor/Components';

type SlateControlsProps = SlateControlsCustomProps;

const allHotkeys = { ...MARK_HOTKEYS };

const SlateDefaultControls: React.FC<SlateControlsProps> = props => {
  const { readOnly, focused, translations, onChange } = props;
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

  const [value, setValue] = React.useState(
    (props.data.value &&
      Array.isArray(props.data.value) &&
      props.data.value.every(node => Node.isNode(node)) &&
      props.data.value) ||
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
    let newValue: SlateValue = props.data.value;
    if (
      !value ||
      !Array.isArray(value) ||
      !value.every(node => Node.isNode(node))
    ) {
      newValue = slateEmptyValue();
      isDirty = true;
    } else {
      const migrationResult = Migrator.migrateState(
        props.data.version,
        props.data.value,
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
    <PaddingComponent state={props.data}>
      <div className="slateControls ory-prevent-blur">
        <Slate editor={editor} initialValue={value} onChange={stateChanged}>
          <Editable
            readOnly={props.readOnly}
            placeholder={translations.textPlaceholder}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
            onKeyDown={event => {
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
          {!readOnly && focused && (
            <>
              <HoveringToolbar>
                <EmphasizeButton type={EmphasizeTypes.Bold} />
                <EmphasizeButton type={EmphasizeTypes.Italic} />
                <EmphasizeButton type={EmphasizeTypes.Underline} />
                <LinkButton />
                <ColorButton />
              </HoveringToolbar>
              <HeadingButtonCompact />
              {/*<FontSizeButton />*/}
              <ColorButton />
              <AlignmentButtons />
              <ListButtons />
              <LinkButton />
              <QuoteButton />
            </>
          )}
          {/*<pre>{JSON.stringify(props.state.slateState, null, 2)}</pre>*/}
        </Slate>
      </div>
    </PaddingComponent>
  );
};

export default SlateDefaultControls;
