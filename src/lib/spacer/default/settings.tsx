import * as React from 'react';
import { SpacerSettings } from '../types/settings';

export const defaultTranslations = {
  pluginName: 'Spacer',
  pluginDescription: 'Resizable, empty space.',
  elementHeightLabel: 'Element height (px)',
};

export const defaultSettings: SpacerSettings = {
  Controls: () => <> Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer; for this plugin was not provided </>,
  translations: defaultTranslations,
};
