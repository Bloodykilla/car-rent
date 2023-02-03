import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

interface BenefitCardProps {
  icon: string | null;
  alt: string | null;
  title: string | null;
  description: string | null;
  className?: string;
}

export const BenefitCard = ({
  icon,
  title,
  description,
  className,
}: BenefitCardProps) => {
  return (
    <div className={[styles.container, className].join(" ")}>
      <Image
        className={styles.icon}
        width={64}
        height={64}
        src={
          icon ? process.env.NEXT_PUBLIC_API + icon : "/images/icons/icon-1.svg"
        }
        alt=""
      />

      {title && <Title content={title} tag={"h4"} align={"center"} />}
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
};
