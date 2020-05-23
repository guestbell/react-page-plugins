import { VideoState } from './../types/state';
import { VideoTypeEnum } from '../types/enum/VideoTypeEnum';
export const defaultVideoState: VideoState = {
  embeddedSrc: '',
  type: VideoTypeEnum.Embedded,
  uploadedSrc: '',
};
