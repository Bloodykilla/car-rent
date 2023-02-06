import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Title } from "@/components/Atoms/Title/Title";
import { InfoCard } from "@/components/Molecules/InfoCard/InfoCard";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  return (
    <TemplateMain>
      <ImageBanner thumbnail={null} alt={null} />
      <Container display="block" verticalIndent="medium">
        <Title
          className={styles.title}
          title={"Useful information"}
          tag={"h1"}
          align={"center"}
        />
        <Grid display="grid" col="col-3">
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/useful-information/post-1"}
            title={"TOP-5 attractions in Vienna"}
            excerpt={
              "You are going on a sightseeing tour or planning an independent trip to Vienna?"
            }
            date={"Jan 10, 2023"}
          />
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/"}
            title={"Everything about renting in Careta"}
            excerpt={"Frequently asked questions about car rental"}
            date={"Jan 10, 2023"}
          />
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/"}
            title={"Parking tickets in Vienna"}
            excerpt={
              "There are certain areas in Vienna where special rules apply for short-term"
            }
            date={"Jan 10, 2023"}
          />
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/"}
            title={"TOP-5 attractions in Vienna"}
            excerpt={
              "You are going on a sightseeing tour or planning an independent trip to Vienna?"
            }
            date={"Jan 10, 2023"}
          />
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/"}
            title={"Everything about renting in Careta"}
            excerpt={"Frequently asked questions about car rental"}
            date={"Jan 10, 2023"}
          />
          <InfoCard
            thumbnail={"/images/banner.png"}
            href={"/"}
            title={"Parking tickets in Vienna"}
            excerpt={
              "There are certain areas in Vienna where special rules apply for short-term"
            }
            date={"Jan 10, 2023"}
          />
        </Grid>
      </Container>
    </TemplateMain>
  );
};
export default Index;
