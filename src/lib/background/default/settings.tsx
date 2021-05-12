import * as React from 'react';
import { BackgroundSettings } from '../types/settings';
import {
  IMAGE_MODE_FLAG,
  COLOR_MODE_FLAG,
  GRADIENT_MODE_FLAG,
} from './../const/mode';
import { defaultTranslations as defaultImageUploadTranslations } from '@react-page/editor/lib-es/ui/ImageUpload/defaultTranslations';
import { lazyLoad } from '@react-page/editor';
const Icon = lazyLoad(() => import('@material-ui/icons/CropLandscape'));

export const defaultTranslations = {
  ...defaultImageUploadTranslations,
  imageMode: 'Image',
  colorMode: 'Color',
  gradientMode: 'Gradient',
  lighten: 'Lighten',
  darken: 'Darken',
  usePadding: 'Use Padding',
  onOff: 'ON/OFF',
  gradientRotation: 'Gradient rotation',
  degrees: 'deg',
  gradientOpacity: 'Gradient opacity',
  addColor: 'Add color',
  addGradient: 'Add gradient',
  pluginName: 'Background',
  pluginDescription: '',
};

export const defaultSettings: Partial<BackgroundSettings> = {
  defaultBackgroundColor: { r: 245, g: 0, b: 87, a: 1 },
  defaultGradientColor: { r: 245, g: 0, b: 87, a: 1 },
  defaultGradientSecondaryColor: { r: 71, g: 245, b: 87, a: 1 },
  defaultMode: 1,
  defaultModeFlag: 1,
  defaultDarken: 0,
  defaultLighten: 0,
  defaultHasPadding: false,
  defaultIsParallax: true,
  translations: defaultTranslations,
  enabledModes: IMAGE_MODE_FLAG | COLOR_MODE_FLAG | GRADIENT_MODE_FLAG,
  Controls: () => <> Controls for this plugin were not provided</>,
  Renderer: () => <>Renderer; for this plugin was not provided </>,
  UploadImageField: () => <>Upload image field was not provided</>,
  icon: <Icon />,
};
