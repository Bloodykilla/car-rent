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
          width={24}
          height={24}
          className={styles.icon}
          src={
            icon ? process.env.NEXT_PUBLIC_API + icon : "/images/icons/taxi.svg"
          }
          alt={alt!}
        />
      </div>

      {title && (
        <Title
          className={styles.title}
          title={title}
          tag={"h4"}
          align={"center"}
        />
      )}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
