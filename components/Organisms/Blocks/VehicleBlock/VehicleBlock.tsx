import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { Title } from "@/components/Atoms/Title/Title";
import { CarItem } from "@/components/Molecules/CarItem/CarItem";
import styles from "./styles.module.scss";

interface VehicleBlockProps {}

export const VehicleBlock = ({}: VehicleBlockProps) => {
  return (
    <Container display={"block"} verticalIndent={"medium"}>
      <Title tag={"h2"} align={"center"} content={"Select vehicle type"} />
      <Grid className={styles.grid} display={"flex"}>
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Sedan"}
          price={"39"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Hatchback"}
          price={"33"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Station"}
          price={"40"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"SUV"}
          price={"37"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Van"}
          price={"33"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Manual"}
          price={"39"}
        />
        <CarItem
          className={styles.item}
          thumbnail={""}
          alt={"car"}
          label={"Automatic"}
          price={"30"}
        />
      </Grid>
    </Container>
  );
};
