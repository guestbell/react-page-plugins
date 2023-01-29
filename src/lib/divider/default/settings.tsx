import { lazyLoad } from '@react-page/editor';
import * as React from 'react';
const Remove = lazyLoad(() => import('@mui/icons-material/Remove'));

export const defaultTranslations = {
  pluginName: 'Divider',
  pluginDescription: 'A horizontal divider',
};

export const defaultSettings = {
  translations: defaultTranslations,
  icon: <Remove />,
  Controls: () => <>Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer for this plugin was not provided</>,
};
