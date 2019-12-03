import { ContentPluginConfig, InitialChildrenDef } from '@react-page/core';
import { RGBColor } from '@react-page/ui/lib/ColorPicker/types';
import { BackgroundControlsProps } from './controls';
import { ModeEnum } from './ModeEnum';
import { BackgroundRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { UploadImageField } from '../../common/components/uploadImageField/UploadImageField';

export type BackgroundSettings = {
  Renderer: React.ComponentType<BackgroundRendererProps>;
  Controls: React.ComponentType<BackgroundControlsProps>;
  defaultPlugin: ContentPluginConfig;
  enabledModes?: ModeEnum;
  // tslint:disable-next-line:no-any
  getInitialChildren?: () => InitialChildrenDef;
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

  theme?: Theme;
  UploadImageField?: UploadImageField;
};
