import { BackgroundState } from './state';
import { BackgroundSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type BackgroundProps = CellPluginComponentProps<BackgroundState> &
  Omit<BackgroundSettings, 'Renderer' | 'Controls'>;
