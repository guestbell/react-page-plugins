import { ContentInstance } from './ContentInstance';
import { ContentType } from './enum/ContentType';
import { Moment } from 'moment';
import { Tag } from '../tag/Tag';

export interface Content {
  id: number;
  createdOn: Moment;
  title: string;
  type: ContentType;
  data: ContentInstance[];
  tags: Tag[];
}
