import * as React from 'react';

export const defaultTranslations = {
  pluginName: 'Text',
  pluginDescription: 'Text editor',
  textPlaceholder: 'Write here ...',
};

export const defaultSettings = {
  translations: defaultTranslations,
  Controls: () => <>Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer for this plugin was not provided</>,
};
