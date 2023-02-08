import { Markdown } from "@/components/Atoms/Markdown/Markdown";
import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface GridCellProps {
  title: string;
  hasIcon: boolean;
  icon?: string;
  iconColor?: string;
  index?: number;
  description?: string;
  thumbnail?: string;
  alt?: string;
  isPageTitle?: boolean;
  hasArrowBorder?: boolean;
  className?: string;
}

export const GridCell = ({
  title,
  icon,
  iconColor = "#f6f6f6",
  index,
  description,
  thumbnail,
  alt,
  isPageTitle = false,
  hasArrowBorder = false,
  hasIcon = false,
  className,
}: GridCellProps) => {
  const [windowWidthSize, setWindowWidthSize] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateWindowWidthSize = () => {
        setWindowWidthSize(window.innerWidth);
      };

      window.addEventListener("resize", updateWindowWidthSize);

      updateWindowWidthSize();

      return () => window.removeEventListener("resize", updateWindowWidthSize);
    }
  }, []);

  return (
    <div className={[styles.container, className].join(" ")}>
      {hasArrowBorder && (
        <>
          {windowWidthSize < 426 ? (
            <svg
              className={styles.border}
              viewBox="0 0 297 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M296 2C296.552 2 297 1.55228 297 1C297 0.447715 296.552 0 296 0V2ZM7.29289 27.7071C7.68342 28.0976 8.31658 28.0976 8.70711 27.7071L15.0711 21.3431C15.4616 20.9526 15.4616 20.3195 15.0711 19.9289C14.6805 19.5384 14.0474 19.5384 13.6569 19.9289L8 25.5858L2.34315 19.9289C1.95262 19.5384 1.31946 19.5384 0.928932 19.9289C0.538408 20.3195 0.538408 20.9526 0.928932 21.3431L7.29289 27.7071ZM16 2H296V0H16V2ZM9 27V9H7V27H9ZM16 0C11.0294 0 7 4.02944 7 9H9C9 5.13401 12.134 2 16 2V0Z"
                fill="#232323"
                fillOpacity="0.5"
              />
            </svg>
          ) : (
            <svg
              className={styles.border}
              viewBox="0 0 599 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M598 2C598.552 2 599 1.55228 599 1C599 0.447715 598.552 0 598 0V2ZM7.29289 20.7071C7.68342 21.0976 8.31658 21.0976 8.70711 20.7071L15.0711 14.3431C15.4616 13.9526 15.4616 13.3195 15.0711 12.9289C14.6805 12.5384 14.0474 12.5384 13.6569 12.9289L8 18.5858L2.34315 12.9289C1.95262 12.5384 1.31946 12.5384 0.928932 12.9289C0.538408 13.3195 0.538408 13.9526 0.928932 14.3431L7.29289 20.7071ZM16 2H598V0H16V2ZM9 20V9H7V20H9ZM16 0C11.0294 0 7 4.02944 7 9H9C9 5.13401 12.134 2 16 2V0Z"
                fill="#232323"
                fillOpacity="0.5"
              />
            </svg>
          )}
        </>
      )}
      {hasIcon && (
        <div
          style={{ backgroundColor: iconColor }}
          className={styles.iconContainer}
        >
          {icon && !index && (
            <Image width={24} height={24} src={icon} alt={title} />
          )}
          {index && !icon && <span className={styles.index}>{index}</span>}
        </div>
      )}
      {title && (
        <Title tag={isPageTitle ? "h1" : "h3"} title={title} align={"left"} />
      )}
      {description && (
        <Markdown className={styles.markdown} content={description} />
      )}
      {thumbnail && (
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src={thumbnail}
            alt={alt ?? title}
          />
        </div>
      )}
    </div>
  );
};
