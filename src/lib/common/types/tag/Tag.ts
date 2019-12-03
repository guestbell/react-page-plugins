import { TagTypeEnum } from './enum/TagTypeEnum';

export interface Tag {
  id: number;
  name: string;
  type?: TagTypeEnum;
}
