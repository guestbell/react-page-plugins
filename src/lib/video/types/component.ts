import { VideoState } from './state';
import { VideoSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type VideoProps = CellPluginComponentProps<VideoState> &
  Omit<VideoSettings, 'Renderer' | 'Controls'>;
