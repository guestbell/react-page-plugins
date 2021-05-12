import { SlateState } from './state';
import { SlateSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type SlateProps = CellPluginComponentProps<SlateState> &
  Omit<SlateSettings, 'Renderer' | 'Controls'>;
