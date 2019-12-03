import { ContentPluginProps } from '@react-page/core/lib/service/plugin/classes';
import { SlateState } from './state';

import { SerializationFunctions } from '../serialization';
import { Translations } from './translations';
import SlatePlugin from './SlatePlugin';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

export type SlateProps = ContentPluginProps<SlateState> & {
  theme?: Theme;
  plugins: SlatePlugin[];
  translations?: Translations;
} & {
  serializeFunctions: SerializationFunctions;
};
