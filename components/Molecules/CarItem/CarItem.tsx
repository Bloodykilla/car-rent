import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface CarItemProps {
  thumbnail: string | null;
  alt: string | null;
  label: string | null;
  price: string | null;
  className?: string;
}

export const CarItem = ({
  thumbnail,
  alt,
  label,
  price,
  className,
}: CarItemProps) => {
  return (
    <Link
      href={"/car-order"}
      className={[styles.container, className].join(" ")}
    >
      {label && (
        <Title
          className={styles.label}
          tag="h3"
          content={label}
          align={"left"}
        />
      )}

      <Image
        className={styles.image}
        src={
          thumbnail
            ? process.env.NEXT_PUBLIC_API + thumbnail
            : "/images/vehicles/suv.png"
        }
        width={237}
        height={126}
        alt={"image"}
      />

      {price && (
        <span className={styles.priceContainer}>
          from <span className={styles.price}>{price}</span>
          /day
        </span>
      )}
    </Link>
  );
};
