import * as React from 'react';

import SlatePlugin from '../types/SlatePlugin';
import simpleToggleHotKeyHandler from './utils/simpleToggleHotKeyHandler';
import {
  SlatePluginDefinition,
  PluginButtonProps,
} from '../types/slatePluginDefinitions';
import { lazyLoad } from '@react-page/core';

function createBasePlugin<T extends {}>(
  pluginDefinition: SlatePluginDefinition<T>
): SlatePlugin {
  const PluginButton = lazyLoad(
    () =>
      (import('./components/PluginButton') as unknown) as Promise<
        React.ComponentType<
          PluginButtonProps & { config: SlatePluginDefinition<T> }
        >
      >
  );
  const Button = (props: PluginButtonProps) => (
    <PluginButton {...props} config={pluginDefinition} />
  );

  return {
    pluginDefinition,
    onKeyDown:
      pluginDefinition.onKeyDown || pluginDefinition.hotKey
        ? simpleToggleHotKeyHandler<T>(pluginDefinition)
        : (e, editor, next) => next(),

    hoverButtons: pluginDefinition.addHoverButton ? [Button] : [],
    toolbarButtons: pluginDefinition.addToolbarButton ? [Button] : [],
  };
}

export default createBasePlugin;
