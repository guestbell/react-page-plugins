import { VideoTypeEnum } from './enum/VideoTypeEnum';

export interface VideoApi {
  changeEmbeddedSrc: (src: string) => void;
  changeUploadedSrc: (src: string) => void;
  changeType: (type: VideoTypeEnum) => void;
}
