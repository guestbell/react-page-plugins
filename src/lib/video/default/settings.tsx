import * as React from 'react';
import { VideoSettings } from '../types/settings';
import { lazyLoad } from '@react-page/core';
import { VideoTypeEnum } from '../types/enum/VideoTypeEnum';

const PlayArrow = lazyLoad(() => import('@material-ui/icons/PlayArrow'));

export const defaultTranslations = {
  pluginName: 'Video',
  pluginDescription: 'Include videos',
  embeddedLabel: 'YouTube/Vimeo url',
  uploadedLabel: 'File url',
  embeddedPlaceholder: 'https://www.youtube.com/watch?v=ER97mPHhgtM',
  uploadedPlaceholder: 'http://techslides.com/demos/sample-videos/small.mp4',
  uploadedDescription:
    'Use this if you have a video file uploaded on your server',
  embeddedDescription:
    'Use this if you have a video uploaded to Vimeo or YouTube',
};

export const defaultSettings: VideoSettings = {
  Controls: () => <> Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer; for this plugin was not provided </>,
  translations: defaultTranslations,
  IconComponent: <PlayArrow />,
  enabledTypes: VideoTypeEnum.Embedded | VideoTypeEnum.Uploaded,
};
