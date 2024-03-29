import { Image } from '../../common/types/image/Image';
import { PaddingState } from '../../common/types/padding/PaddingState';

export enum ImageConstraintMode {
  FullWidth = 0,
  BigHeight = 1,
  MediumHeight = 2,
  SmallHeight = 3,
}

export type ImageState = PaddingState & {
  imageId?: number;
  image?: Image;
  src?: string;
  srcSet?: string;
  href?: string;
  constraintMode?: ImageConstraintMode;
  hasMargin?: boolean;
};
