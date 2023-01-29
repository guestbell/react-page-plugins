import { RGBColor } from '@react-page/editor';
import { BackgroundControlsProps } from './controls';
import { ModeEnum } from './ModeEnum';
import { BackgroundRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@mui/material/styles';
import { UploadImageField } from '../../common/components/uploadImageField/UploadImageField';
import { CellPlugin } from '@react-page/editor';
import { ReactNode } from 'react';

export type BackgroundSettings = {
  Renderer: React.ComponentType<BackgroundRendererProps>;
  Controls: React.ComponentType<BackgroundControlsProps>;
  enabledModes?: ModeEnum;
  getInitialChildren?: CellPlugin['createInitialChildren'];
  defaultBackgroundColor?: RGBColor;
  defaultGradientColor?: RGBColor;
  defaultGradientSecondaryColor?: RGBColor;
  defaultMode?: ModeEnum;
  defaultModeFlag?: ModeEnum;
  defaultDarken?: number;
  defaultLighten?: number;
  defaultHasPadding?: boolean;
  defaultIsParallax?: boolean;
  translations?: Translations;

  icon?: ReactNode;

  theme?: Theme;
  UploadImageField?: UploadImageField;
  cellStyle?: CellPlugin['cellStyle'];
};
