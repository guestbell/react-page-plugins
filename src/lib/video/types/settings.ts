import { VideoControlsProps } from './controls';
import { VideoHtmlRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface VideoSettings {
  Renderer: React.ComponentType<VideoHtmlRendererProps>;
  Controls: React.ComponentType<VideoControlsProps>;
  placeholder?: string;
  label?: string;
  translations?: Translations;
  IconComponent?: React.ReactNode;
  theme?: Theme;
}
