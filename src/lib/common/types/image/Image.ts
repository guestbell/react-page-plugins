import { Moment } from 'moment/moment';
import { Tag } from '../tag/Tag';
import { ImageInstance } from './ImageInstance';

export interface Image {
  id: number;
  title: string;
  description: string;
  src: string;
  srcSet: string;
  createdOn: Moment;
  sizes: ImageInstance[];
  tags: Tag[];
}
