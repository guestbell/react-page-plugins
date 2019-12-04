import { BackgroundProps } from './component';
import { RGBColor } from '@react-page/ui/lib/ColorPicker/types';

export interface BackgroundRendererExtraProps {
  backgroundColorPreview?: RGBColor;
  gradientDegPreview?: number;
  gradientDegPreviewIndex?: number;
  gradientOpacityPreview?: number;
  gradientOpacityPreviewIndex?: number;
  gradientColorPreview?: RGBColor;
  gradientColorPreviewIndex?: number;
  gradientColorPreviewColorIndex?: number;
  darkenPreview?: number;
  lightenPreview?: number;
}

export type BackgroundRendererProps = BackgroundProps &
  BackgroundRendererExtraProps;
