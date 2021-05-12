import { CellPlugin } from '@react-page/editor';
import React from 'react';
import { defaultSettings } from './default/settings';
import { ImageSettings } from './types/settings';
import { ImageState } from './types/state';

const createPlugin = (settings?: ImageSettings): CellPlugin<ImageState> => {
  const mergedSettings = { ...defaultSettings, ...settings };
  const Controls = mergedSettings.Controls;
  return {
    controls: {
      type: 'custom',
      Component: props => (
        <Controls
          {...props}
          translations={mergedSettings.translations}
          UploadImageField={mergedSettings.UploadImageField}
        />
      ),
    },
    Renderer: mergedSettings.Renderer,
    id: 'ory/editor/core/content/image',
    version: 1,
    icon: mergedSettings.icon,
    title: mergedSettings.translations.pluginName,
    isInlineable: true,
    description: mergedSettings.translations.pluginDescription,
  };
};
export default createPlugin;
