import { DividerProps } from './component';
import { DividerRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ReactNode } from 'react';

export interface DividerSettings {
  Renderer: React.ComponentType<DividerRendererProps>;
  Controls: React.ComponentType<DividerProps>;
  translations?: Translations;
  icon?: ReactNode;
  theme?: Theme;
}
