import { RGBColor } from '@react-page/editor';
import { Gradient } from './gradient';
import { ModeEnum } from './ModeEnum';
import { Image } from '../../common/types/image/Image';
import { PaddingState } from '../../common/types/padding/PaddingState';

export type BackgroundState = PaddingState & {
  bgImageId?: number;
  bgImage?: Image;
  bgSrc?: string;
  backgroundColor: RGBColor;
  isParallax: boolean;
  modeFlag: ModeEnum;
  padding: number;
  lighten: number;
  darken: number;
  hasPadding: boolean;
  gradients: Gradient[];
};
