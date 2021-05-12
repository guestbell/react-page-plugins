import { DividerState } from './state';
import { DividerSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type DividerProps = CellPluginComponentProps<DividerState> &
  Omit<DividerSettings, 'Renderer' | 'Controls'>;
