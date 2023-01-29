import { PaddingState } from '../../common/types/padding/PaddingState';
import { VideoTypeEnum } from './enum/VideoTypeEnum';

export type VideoState = PaddingState & {
  embeddedSrc: string;
  uploadedSrc: string;
  type: VideoTypeEnum;
};
