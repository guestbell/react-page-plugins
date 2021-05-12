import * as React from 'react';

import { DividerSettings } from './types/settings';
import { DividerState } from './types/state';
import { defaultSettings } from './default/settings';
import { CellPlugin } from '@react-page/editor';

const createPlugin: (
  settings: DividerSettings
) => CellPlugin<DividerState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Controls, Renderer, ...rest } = mergedSettings;
  return {
    Renderer: Renderer,
    controls: {
      type: 'custom',
      Component: props => <Controls {...props} {...rest} />,
    },
    id: 'ory/editor/core/content/divider',
    title: mergedSettings.translations.pluginName,
    version: 1,
    icon: rest.icon,
    text: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
  };
};

export default createPlugin;
