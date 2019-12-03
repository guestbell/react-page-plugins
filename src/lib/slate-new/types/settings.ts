import { SlateProps } from './component';
import { SlateRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface SlateSettings {
  Renderer: React.ComponentType<SlateRendererProps>;
  Controls: React.ComponentType<SlateProps>;
  translations?: Translations;

  theme?: Theme;
}
