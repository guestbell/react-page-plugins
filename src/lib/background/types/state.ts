import { RGBColor } from '@react-page/ui/lib/ColorPicker/types';
import { Gradient } from './gradient';
import { ModeEnum } from './ModeEnum';
import { Image } from '../../common/types/image/Image';

export interface BackgroundState {
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
}
