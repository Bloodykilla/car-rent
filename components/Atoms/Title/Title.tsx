import { CustomTag } from "helpres/CustomTag";
import styles from "./styles.module.scss";

interface TitleProps {
  /**
   * What content should be?
   */
  content: string;
  /**
   * Which tag should be?
   */
  tag: "h1" | "h2" | "h3" | "h4";
  /**
   * Which text align should be?
   */
  align: "left" | "center";
  className?: string;
}

export const Title = ({ content, tag, align, className }: TitleProps) => {
  return (
    <CustomTag className={[styles[align], className].join(" ")} tag={tag}>
      {content}
    </CustomTag>
  );
};
