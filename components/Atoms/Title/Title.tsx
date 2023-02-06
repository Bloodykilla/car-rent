import { CustomTag } from "helpres/CustomTag";
import styles from "./styles.module.scss";

interface TitleProps {
  /**
   * What content should be?
   */
  title: string;
  /**
   * Which tag should be?
   */
  tag: "h1" | "h2" | "h3" | "h4";
  /**
   * Which text align should be?
   */
  align: "left" | "center";
  isHeroTitle?: boolean;
  className?: string;
}

export const Title = ({
  title,
  tag,
  align,
  isHeroTitle = false,
  className,
}: TitleProps) => {
  return (
    <CustomTag
      className={[
        styles[align],
        isHeroTitle && styles.heroTitle,
        className,
      ].join(" ")}
      tag={tag}
    >
      {title}
    </CustomTag>
  );
};
