import { Image } from '../../common/types/image/Image';

export interface ImageState {
  imageId?: number;
  image?: Image;
  caption?: string;
  href?: string;
  target?: string;
  rel?: string;
}
