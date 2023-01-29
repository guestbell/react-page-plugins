import { SpacerHtmlRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@mui/material/styles';
import { ReactNode } from 'react';

export interface SpacerSettings {
  Renderer: React.ComponentType<SpacerHtmlRendererProps>;
  icon?: ReactNode;
  translations?: Translations;
  theme?: Theme;
}
