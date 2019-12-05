import { Image } from '../../common/types/image/Image';

export enum ImageConstraintMode {
  FullWidth = 0,
  BigHeight = 1,
  MediumHeight = 2,
  SmallHeight = 3,
}

export interface ImageState {
  imageId?: number;
  image?: Image;
  src?: string;
  srcSet?: string;
  href?: string;
  constraintMode?: ImageConstraintMode;
}
