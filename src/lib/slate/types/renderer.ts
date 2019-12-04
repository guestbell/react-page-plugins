import { SlateProps } from './component';

export interface SlateRendererExtraProps {
  controls?: JSX.Element;
}

export type SlateRendererProps = SlateProps & Partial<SlateRendererExtraProps>;
