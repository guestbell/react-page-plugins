import { SpacerControlsProps } from './controls';
import { SpacerHtmlRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export interface SpacerSettings {
  Renderer: React.ComponentType<SpacerHtmlRendererProps>;
  Controls: React.ComponentType<SpacerControlsProps>;
  translations?: Translations;
  theme?: Theme;
}
