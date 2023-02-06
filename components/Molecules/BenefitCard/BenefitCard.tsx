import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

interface BenefitCardProps {
  icon: string | null;
  alt: string | null;
  title: string | null;
  description: string | null;
  iconColor?: string;
  className?: string;
}

export const BenefitCard = ({
  icon,
  alt,
  title,
  description,
  iconColor = "#F6F6F6",
  className,
}: BenefitCardProps) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <div
        style={{ backgroundColor: iconColor }}
        className={styles.iconContainer}
      >
        <Image
          className={styles.icon}
          width={24}
          height={24}
          src={
            icon ? process.env.NEXT_PUBLIC_API + icon : "/images/icons/taxi.svg"
          }
          alt={alt!}
        />
      </div>

      {title && <Title content={title} tag={"h4"} align={"center"} />}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
