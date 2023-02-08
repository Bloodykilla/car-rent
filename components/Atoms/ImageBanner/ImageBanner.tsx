import Image from "next/image";
import { useRef } from "react";
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
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <>
      <div className={[styles.container, className].join(" ")}>
        <Image
          placeholder="blur"
          blurDataURL="/images/banner.png"
          priority={true}
          ref={imageRef}
          className={styles.image}
          fill
          src={
            thumbnail
              ? process.env.NEXT_PUBLIC_API + thumbnail
              : "/images/banner.png"
          }
          sizes="(max-width: 768px) 100%,
          (max-width: 1200px) 100%,
          100%"
          alt={alt ?? "alternative text"}
        />
      </div>
    </>
  );
};
