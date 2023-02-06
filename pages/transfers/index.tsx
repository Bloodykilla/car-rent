import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Markdown } from "@/components/Atoms/Markdown/Markdown";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  const pageDescription = `Careta provides a transfer service to the Vienna airport, a transfer to railway stations and to any other address. \n
  A transfer is a pre-ordered rental of a minibus or car with a driver for a trip along a specific route. This service is necessary if you have to get from the airport to the hotel, meet or see off a client, business partner or relatives.`;

  const pageBottomText = `#### To order a car, you can call our phone (via **Skype**, **WhatsApp** or **Viber**), or send an Email. Our prices, punctuality in everything, as well as speed and quality will pleasantly surprise those who aren’t used to overpaying and appreciate their time.`;

  return (
    <TemplateMain>
      <ImageBanner thumbnail={null} alt={null} />
      <Container display={"block"} verticalIndent={"medium"}>
        <Grid className={styles.grid} display={"grid"} col={"col-2"}>
          <GridCell
            className={styles.firstItem}
            title={"Transfers"}
            description={pageDescription}
            isPageTitle={true}
            hasIcon={false}
          />
          <GridCell
            icon="/images/icons/taxi.svg"
            hasArrowBorder={true}
            title={`"Renting a car from Careta is as easy andenjoyable as driving your own car."`}
            hasIcon={true}
            description={
              "Careta strives to give you the opportunity to experience freedom and see as much as possible. Our task is a comfortable rental from start to finish"
            }
          />
          <GridCell
            icon="/images/icons/taxi.svg"
            hasArrowBorder={true}
            title={`"The maximum service life of a car according to Careta standards does not exceed two years."`}
            hasIcon={true}
            description={
              "The safety of customers is our top priority, so we provide you with only the highest quality, newest and world-class cars for rent. Also, we guarantee you a high level of service, compliance with quality standards of services, reliability of cars and low prices."
            }
          />
          <GridCell
            icon="/images/icons/taxi.svg"
            hasArrowBorder={true}
            title={`"We support you throughout your trip, whenever and wherever you need help."`}
            hasIcon={true}
            description={
              "Renting a car is the freedom that we offer you at a very attractive price. But this is only a small part of what we do. We work to make car rental hassle-free, fast and enjoyable. We stay with you from the beginning of the lease until its completion."
            }
          />
        </Grid>
        <Markdown className={styles.bottomText} content={pageBottomText} />
      </Container>
    </TemplateMain>
  );
};
export default Index;
