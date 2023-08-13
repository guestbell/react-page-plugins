import * as React from 'react';
import type { CellPlugin } from '@react-page/editor';
import { defaultSettings } from './default/settings';

import type { SpacerSettings } from './types/settings';
import type { SpacerState } from './types/state';

const createPlugin: (
  settings: SpacerSettings
) => CellPlugin<SpacerState> = settings => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const { Renderer, Controls, ...rest } = mergedSettings;
  return {
    Renderer: Renderer,
    controls: {
      type: 'custom',
      Component: props => <Controls {...props} {...rest} />,
    },
    id: 'ory/editor/core/content/spacer',
    version: 1,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    description: mergedSettings.translations.pluginDescription,
    allowClickInside: true,
    createInitialData: () => ({
      height: 24,
    }),
  };
};

export default createPlugin;
