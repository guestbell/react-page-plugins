import { Editor } from 'slate-react';
import { NextType } from '../../types/next';
import isHotkey from 'is-hotkey';

import { SlatePluginDefinition } from '../../types/slatePluginDefinitions';
import SlateHelpers from './SlateHelpers';
import { EventHook } from 'slate-react';

export default <T>(
  config: SlatePluginDefinition<T>
): EventHook<React.KeyboardEvent> => (
  e: React.KeyboardEvent,
  editor: Editor,
  next: NextType
): boolean => {
  const slateHelpers = new SlateHelpers(editor, config);
  const { hotKey } = config;
  if (config.isDisabled && config.isDisabled(editor)) {
    return;
  }
  if (isHotkey(hotKey, e.nativeEvent)) {
    if (slateHelpers.isActive()) {
      slateHelpers.remove();
    } else {
      slateHelpers.add(config.getInitialData ? config.getInitialData() : null);
    }

    e.preventDefault();
    return true;
  } else {
    return next();
  }
};
