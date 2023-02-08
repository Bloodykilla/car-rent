import { Thumbnail } from './Thumbnail';
export interface MetaData {
  id: number;
  title: string;
  description: string;
  author?: any;
  image: Thumbnail;
}