import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

interface CarItemProps {
  thumbnail: string;
  alt: string;
  label: string;
  price: string;
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
    <a className={[styles.container, className].join(" ")}>
      <Title className={styles.label} tag="h3" content={label} align={"left"} />

      <Image
        className={styles.image}
        src={"/images/vehicles/suv.png"}
        width={237}
        height={126}
        alt={"image"}
      />

      <span className={styles.priceContainer}>
        from <span className={styles.price}>{price}</span>
        /day
      </span>
    </a>
  );
};
