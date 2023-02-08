import { ContentItem } from "./ContentItem";
import { MetaData } from "./MetaData";

export interface Attributes {
  title: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  content: ContentItem[];
  meta: MetaData;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface AboutPage {
  data: Data;
}
