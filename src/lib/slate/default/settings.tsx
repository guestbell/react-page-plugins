import { lazyLoad } from '@react-page/editor';
import * as React from 'react';
import {
  HoverButtonTypes,
  ToolbarButtonTypes,
} from '../../common/components/slateEditor/SlateEditor';
import { SlateSettings } from '../types/settings';

const Subject = lazyLoad(() => import('@mui/icons-material/Subject'));

export const defaultTranslations = {
  pluginName: 'Text',
  pluginDescription: 'Text editor',
  textPlaceholder: 'Write here ...',
};

export const defaultSettings: SlateSettings = {
  translations: defaultTranslations,
  // Controls: () => <>Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer for this plugin was not provided</>,
  toolbarButtons:
    ToolbarButtonTypes.Alignment |
    ToolbarButtonTypes.Heading |
    ToolbarButtonTypes.Link |
    ToolbarButtonTypes.Lists |
    ToolbarButtonTypes.Quote,
  hoverButtons:
    HoverButtonTypes.Bold |
    HoverButtonTypes.Italic |
    HoverButtonTypes.Underline |
    HoverButtonTypes.Color,
  icon: <Subject />,
};
