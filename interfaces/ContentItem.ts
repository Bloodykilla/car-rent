import { Icon } from "./Icon";
import { Thumbnail } from "./Thumbnail";

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  iconColor: string;
  icon: Icon;
  thumbnail: Thumbnail;
}
