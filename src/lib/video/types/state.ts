import { PaddingState } from '../../common/types/padding/PaddingState';
import { VideoTypeEnum } from './enum/VideoTypeEnum';

export interface VideoState extends PaddingState {
  embeddedSrc: string;
  uploadedSrc: string;
  type: VideoTypeEnum;
}
