import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface InfoItemProps {
  href: string;
  title: string;
  excerpt: string;
  thumbnail?: string;
  alt?: string;
  date?: string;
  className?: string;
}

export const InfoItem = ({
  href,
  title,
  excerpt,
  thumbnail,
  alt,
  date,
  className,
}: InfoItemProps) => {
  return (
    <>
      {href && (
        <Link className={[styles.container, className].join(" ")} href={href}>
          {thumbnail && (
            <span className={styles.imageContainer}>
              <Image
                className={styles.image}
                fill={true}
                src={thumbnail}
                alt={alt ?? title}
              />
            </span>
          )}
          <span className={styles.textContainer}>
            {title && <Title tag="h3" content={title} align={"left"} />}
            {excerpt && <p>{excerpt}</p>}
            {date && <span className={styles.date}>{date}</span>}
          </span>
        </Link>
      )}
    </>
  );
};
