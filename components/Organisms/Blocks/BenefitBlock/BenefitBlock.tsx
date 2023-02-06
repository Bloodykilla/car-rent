import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { Title } from "@/components/Atoms/Title/Title";
import { BenefitCard } from "@/components/Molecules/BenefitCard/BenefitCard";
import styles from "./styles.module.scss";

interface BenefitBlockProps {
  className?: string;
}

export const BenefitBlock = ({ className }: BenefitBlockProps) => {
  return (
    <Container display={"flex"} verticalIndent={"medium"}>
      <Title
        className={styles.title}
        tag={"h2"}
        align={"center"}
        title={"Benefits of car rental"}
      />
      <Grid className={styles.grid} display={"flex"}>
        <BenefitCard
          icon={""}
          alt={""}
          title={"The lowest prices in the Region"}
          description={
            "The cost of our services is due to work with a small margin, but a large volume"
          }
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={"Reservation without prepayment"}
          description={
            "You don’t need to pay anything to book a car, you do it for free with us"
          }
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={"Included in cost"}
          description={
            "Payment of roads in Austria, navigator, travel to neighboring countries, additional driver, car delivery to a hotel or airport in Vienna"
          }
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={"Full insurance with the lowest deposit "}
          description={
            "Full insurance with a deposit - from 200 euros (in cash without additional payment or by credit card)"
          }
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={"Rent without a bank card"}
          description={"You can rent a car without a bank card."}
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={`It's that car`}
          description={
            "When booking, you have the opportunity to get photos of your car."
          }
        />
        <BenefitCard
          icon={""}
          alt={""}
          title={"Registration in 5 minutes"}
          description={
            "Quick and easy procedure for handing over the car to the client."
          }
        />
      </Grid>
    </Container>
  );
};
