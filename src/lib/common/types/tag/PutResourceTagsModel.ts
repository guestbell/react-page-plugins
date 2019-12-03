import { Tag } from './Tag';
export interface PutResourceTagsModel {
  tagsToAdd?: Tag[];
  tagsToRemove?: Tag[];
  tagsIdsToAdd?: number[];
  tagsIdsToRemove?: number[];
}
