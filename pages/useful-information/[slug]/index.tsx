import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import styles from "./styles.module.scss";

interface IndexProps {}

const CONTENT_ITEMS_DATA = [{}];

const Index = ({}: IndexProps) => {
  const pageDescription = `Every year Vienna enchants millions of tourists with majestic architecture, magnificent palaces, elegant parks, museums and theaters. Vienna was the heart of the Habsburg Empire, and to this day is not only the capital of Austria, but also the main cultural center of the country. In this article, we will tell you about the most important sights of the city, which for several years in a row has rightly been called the most comfortable city for living.`;

  return (
    <TemplateMain>
      <ImageBanner thumbnail={null} alt={null} />
      <Container display={"block"} verticalIndent={"medium"}>
        <Grid className={styles.grid} display={"grid"} col={"col-2"}>
          <GridCell
            className={styles.firstItem}
            title={"TOP-5 attractions in Vienna"}
            description={pageDescription}
            isPageTitle={true}
            hasIcon={false}
          />
          <GridCell
            iconColor="#F6F6F6"
            hasArrowBorder={true}
            title={`St. Stephen's Cathedral`}
            hasIcon={true}
            index={1}
            description={
              "Unconditionally, the main symbol of the city - the Catholic Cathedral of St. Stephen - is located in the heart of Vienna. Built in the 12th century, this majestic Gothic cathedral fascinates with rich interior decoration. Climbing the 343 steps to the top of the tower, you will be rewarded with unforgettable views of the city."
            }
            thumbnail={
              process.env.NEXT_PUBLIC_API +
              "/uploads/banner_2ffc4ea4f3.png?updated_at=2023-02-03T18:07:58.871Z"
            }
          />
          <GridCell
            iconColor="#1645ED"
            index={2}
            hasArrowBorder={true}
            title={`Vienna State Opera`}
            hasIcon={true}
            description={
              "A visit to Vienna is not complete without a visit to the opera. You will get the most unforgettable impressions from the performance, of course, by visiting one of the best opera houses in the world - the Vienna State Opera. The opera building, built in the Renaissance style, impresses with its elegance, but the interior is no less luxurious: marble staircases, elegant lobbies and a magnificent auditorium will not leave anyone indifferent."
            }
            thumbnail={
              process.env.NEXT_PUBLIC_API +
              "/uploads/banner_2ffc4ea4f3.png?updated_at=2023-02-03T18:07:58.871Z"
            }
          />
          <GridCell
            iconColor="#16ED2B"
            index={3}
            hasArrowBorder={true}
            title={`Imperial residence Hofburg`}
            hasIcon={true}
            description={
              "The Hofburg Palace Complex, the embodiment of the rich history of Austria, includes twelve palaces built in different periods, as well as many other buildings. For centuries, the Hofburg Imperial Palace has been the seat of Europe's most influential royal dynasties, including the Habsburgs and the rulers of the Holy Roman and Austro-Hungarian empires. Today, the residence of the President of Austria is located here. Three parts of the palace are open to the public: the Imperial Apartments, the Museum of Empress Sisi and the Silver Chamber."
            }
            thumbnail={
              process.env.NEXT_PUBLIC_API +
              "/uploads/banner_2ffc4ea4f3.png?updated_at=2023-02-03T18:07:58.871Z"
            }
          />
        </Grid>
      </Container>
    </TemplateMain>
  );
};
export default Index;
