import { ImageState } from './state';
import { ImageSettings } from './settings';
import { CellPluginComponentProps } from '@react-page/editor';

export type ImageProps = CellPluginComponentProps<ImageState> &
  Pick<ImageSettings, 'UploadImageField' | 'translations' | 'icon'>;
