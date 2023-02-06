import { Container } from "@/components/Atoms/Container/Container";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Title } from "@/components/Atoms/Title/Title";
import { LocationBlock } from "@/components/Organisms/Blocks/LocationBlock/LocationBlock";
import { VehicleBlock } from "@/components/Organisms/Blocks/VehicleBlock/VehicleBlock";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  return (
    <TemplateMain>
      <ImageBanner thumbnail={""} alt={""} />
      <Container display="flex" flexDirection="col" verticalIndent="medium">
        <Title
          className={styles.title}
          title="Rent a car in Austria"
          tag={"h1"}
          align={"center"}
        />
        <p className={styles.description}>
          {`Decided to take a trip to breathtaking Austria? We advise you to rent
          a car with which you can spend your vacation as comfortably as
          possible, travel and visit beautiful and exciting places. Don't know
          where to rent a car in Austria? Please contact CARETA. With us, each
          client will be able to choose the right car at the most affordable
          prices. The companies managers have an individual approach to each
          client and will arrange a car rental in the shortest possible time.`}
        </p>
        <Title
          className={styles.subTitle}
          tag={"h4"}
          title={"Welcome to our company!"}
          align={"center"}
        />
      </Container>
      <VehicleBlock />
      <LocationBlock />
    </TemplateMain>
  );
};
export default Index;
