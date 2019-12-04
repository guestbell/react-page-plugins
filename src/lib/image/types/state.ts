import { Image } from '../../common/types/image/Image';

export interface ImageState {
  imageId?: number;
  image?: Image;
  src?: string;
  srcSet?: string;
  href?: string;
}
