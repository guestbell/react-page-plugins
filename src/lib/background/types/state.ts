import { RGBColor } from '@react-page/ui/lib/ColorPicker/types';
import { Gradient } from './gradient';
import { ModeEnum } from './ModeEnum';
import { Image } from '../../common/types/image/Image';
import { PaddingState } from '../../common/types/padding/PaddingState';

export interface BackgroundState extends PaddingState {
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
