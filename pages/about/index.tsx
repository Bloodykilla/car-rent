import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  return (
    <TemplateMain>
      <ImageBanner thumbnail={null} alt={null} />
      <Container display={"block"} verticalIndent={"medium"}>
        <Grid className={styles.grid} display={"grid"} col={"col-2"}>
          <GridCell
            className={styles.firstItem}
            title={"About Us"}
            isPageTitle={true}
            hasIcon={false}
          />
          <GridCell
            hasArrowBorder={true}
            title={`"Renting a car from Careta is as easy andenjoyable as driving your own car."`}
            hasIcon={true}
            index={1}
            description={
              "Careta strives to give you the opportunity to experience freedom and see as much as possible. Our task is a comfortable rental from start to finish"
            }
          />
          <GridCell
            hasArrowBorder={true}
            title={`"The maximum service life of a car according to Careta standards does not exceed two years."`}
            hasIcon={true}
            index={2}
            description={
              "The safety of customers is our top priority, so we provide you with only the highest quality, newest and world-class cars for rent. Also, we guarantee you a high level of service, compliance with quality standards of services, reliability of cars and low prices."
            }
          />
          <GridCell
            hasArrowBorder={true}
            title={`"We support you throughout your trip, whenever and wherever you need help."`}
            hasIcon={true}
            index={3}
            description={
              "Renting a car is the freedom that we offer you at a very attractive price. But this is only a small part of what we do. We work to make car rental hassle-free, fast and enjoyable. We stay with you from the beginning of the lease until its completion."
            }
          />
        </Grid>
      </Container>
    </TemplateMain>
  );
};
export default Index;
