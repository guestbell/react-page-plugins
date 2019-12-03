import { JsonSchema } from './jsonSchema';

import {
  ContentPluginProps,
  ContentPluginConfig,
  LayoutPluginConfig,
  LayoutPluginProps,
  PluginProps,
} from '@react-page/core/lib/service/plugin/classes';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export type ControlsType<T> = React.ComponentType<ControlProps<T>>;

export type ControlsLayout = {
  columnCount: number;
};
type CommonProps<T extends {}> = {
  schema: Omit<JsonSchema<T>, 'type'>;
  theme?: Theme;
  controlsLayout?: ControlsLayout;
};

type CommonContentPluginProps<T> = {
  Renderer: React.ComponentType<ContentPluginProps<T>>;
};
type CommonLayoutPluginProps<T> = {
  Renderer: React.ComponentType<LayoutPluginProps<T>>;
};

export type ControlProps<T> = CommonProps<T> & {
  Renderer: React.ComponentType<PluginProps<T>>;
} & PluginProps<T>;

export type ContentPluginDefinition<T> = CommonProps<T> &
  CommonContentPluginProps<T> &
  ContentPluginConfig<T>;

export type LayoutPluginDefinition<T> = CommonProps<T> &
  CommonLayoutPluginProps<T> &
  LayoutPluginConfig<T>;
