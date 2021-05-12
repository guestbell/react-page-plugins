import { SpacerState } from './state';
import { SpacerSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type SpacerProps = CellPluginComponentProps<SpacerState> &
  Omit<SpacerSettings, 'Controls' | 'Renderer'>;
