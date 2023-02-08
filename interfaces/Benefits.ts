import { Icon } from "./Icon";
import { Meta } from "./Meta";

export interface Attributes {
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  iconColor: string;
  icon: Icon  ;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Benefits {
  data: Datum[];
  meta: Meta;
}
