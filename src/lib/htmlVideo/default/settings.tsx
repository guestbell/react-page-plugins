import * as React from 'react';
import { Html5VideoSettings } from '../types/settings';
import { lazyLoad } from '@react-page/core';

const PlayArrow = lazyLoad(() => import('@material-ui/icons/PlayArrow'));

export const defaultTranslations = {
  pluginName: 'Uploaded video',
  pluginDescription: 'Add webm, ogg and other HTML5 video',
  urlLabel: 'Video url ( mp4 | avi | ... )',
  urlPlaceholder: 'https://example.com/video.webm',
};

export const defaultSettings: Html5VideoSettings = {
  Controls: () => <> Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer; for this plugin was not provided </>,
  translations: defaultTranslations,
  IconComponent: <PlayArrow />,
};
