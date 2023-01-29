import { VideoControlsProps } from './controls';
import { VideoHtmlRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@mui/material/styles';
import { VideoTypeEnum } from './enum/VideoTypeEnum';

export interface VideoSettings {
  Renderer: React.ComponentType<VideoHtmlRendererProps>;
  Controls: React.ComponentType<VideoControlsProps>;
  placeholder?: string;
  label?: string;
  translations?: Translations;
  icon?: React.ReactNode;
  theme?: Theme;
  enabledTypes?: VideoTypeEnum;
  defaultType?: VideoTypeEnum;
}
