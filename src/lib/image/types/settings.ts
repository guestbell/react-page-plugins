import { ImageRendererProps } from './renderer';
import { ImageControlsProps } from './controls';
import { Translations } from './translations';
import { Theme } from '@mui/material/styles';
import { UploadImageField } from '../../common/components/uploadImageField/UploadImageField';

export type ImageSettings = {
  Renderer: React.ComponentType<ImageRendererProps>;
  Controls: React.ComponentType<ImageControlsProps>;
  translations?: Translations;
  icon?: React.ReactNode;

  theme?: Theme;
  UploadImageField?: UploadImageField;
};
