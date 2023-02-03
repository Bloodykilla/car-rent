import Image from "next/image";
import styles from "./styles.module.scss";

interface ImageBannerProps {
  thumbnail: string | null;
  alt: string | null;
  className?: string;
}

export const ImageBanner = ({
  thumbnail,
  alt,
  className,
}: ImageBannerProps) => {
  return (
    <>
      <div className={[styles.container, className].join(" ")}>
        <Image
          className={styles.image}
          fill={true}
          src={
            thumbnail
              ? process.env.NEXT_PUBLIC_API + thumbnail
              : "/images/banner.png"
          }
          alt={alt ?? "alternative text"}
        />
      </div>
    </>
  );
};
