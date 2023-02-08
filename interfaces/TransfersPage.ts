import { ContentItem } from "./ContentItem";
import { MetaData } from "./MetaData";
import { Thumbnail } from "./Thumbnail";

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path?: any;
  size: number;
  width: number;
  height: number;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail;
}

export interface Attributes3 {
  name: string;
  alternativeText?: any;
  caption?: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: any;
  provider: string;
  provider_metadata?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface Data3 {
  id: number;
  attributes: Attributes3;
}

export interface Banner {
  data: Data3;
}

export interface Attributes {
  title: string;
  description: string;
  bottomText: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  content: ContentItem[];
  banner: Banner;
  meta: MetaData;
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface TransfersPage {
  data: Data;
}
