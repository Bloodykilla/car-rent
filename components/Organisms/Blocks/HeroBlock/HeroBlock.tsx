import { Button } from "@/components/Atoms/Buttons/Button/Button";
import { Title } from "@/components/Atoms/Title/Title";
import Image from "next/image";
import styles from "./styles.module.scss";

interface HeroBlockProps {}

export const HeroBlock = ({}: HeroBlockProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <Title
          className={styles.title}
          content={"Car Rental in Vienna"}
          tag={"h1"}
          align={"left"}
        />
        <Title
          tag={"h4"}
          align={"left"}
          content="    We support you throughout your trip, whenever and wherever you need
          assistance..."
        />

        <Button href={"/rent"} type={"fill"}>
          View vehicle types
        </Button>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.carContainer}>
          <Image
            className={styles.car}
            fill={true}
            src={"/images/hero-car.png"}
            alt={"hero car"}
          />
        </div>
      </div>
    </div>
  );
};
