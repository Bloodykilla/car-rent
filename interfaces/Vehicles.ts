import { Meta } from "./Meta";
import { Thumbnail } from "./Thumbnail";

export interface Formats {
  thumbnail: Thumbnail;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string;
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

export interface Data {
  id: number;
  attributes: ImageAttributes;
}

export interface Image {
  data: Data;
}

export interface Attributes {
  title: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  image: Image;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface VehiclesData {
  data: Datum[];
  meta: Meta;
}
