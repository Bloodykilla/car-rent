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
          isHeroTitle={true}
          className={styles.title}
          title={"Car Rental in Vienna"}
          tag={"h1"}
          align={"left"}
        />
        <Title
          tag={"h4"}
          align={"left"}
          title="We support you throughout your trip, whenever and wherever you need
          assistance..."
        />

        <Button href={"/car-order"} type={"fill"}>
          View vehicle types
        </Button>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.carContainer}>
          <Image
            priority={true}
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
