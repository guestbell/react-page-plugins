import { SlateProps } from './component';
import { SlateRendererProps } from './renderer';
import { Translations } from './translations';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { ReactNode } from 'react';
import {
  HoverButtonTypes,
  ToolbarButtonTypes,
} from '../../common/components/slateEditor/SlateEditor';

export interface SlateSettings {
  Renderer: React.ComponentType<SlateRendererProps>;
  Controls?: React.ComponentType<SlateProps>;
  translations?: Translations;

  toolbarButtons?: ToolbarButtonTypes;
  hoverButtons?: HoverButtonTypes;

  icon?: ReactNode;
  theme?: Theme;
}
