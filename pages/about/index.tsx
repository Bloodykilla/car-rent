import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Meta } from "@/components/Atoms/Meta/Meta";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import { AboutPage } from "@/interfaces/AboutPage";
import { fetchAboutPage } from "api/http";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  const { isLoading, isError, data } = useQuery("about", fetchAboutPage);

  return (
    <TemplateMain>
      <Meta
        title={
          data?.data?.attributes?.meta?.title ?? data?.data?.attributes?.title
        }
        description={data?.data?.attributes?.meta?.description!}
      />
      <ImageBanner thumbnail={null} alt={null} />
      <Container display={"block"} verticalIndent={"medium"}>
        <Grid className={styles.grid} display={"grid"} col={"col-2"}>
          <GridCell
            className={styles.firstItem}
            title={data?.data?.attributes?.title ?? "About Us"}
            isPageTitle={true}
            hasIcon={false}
          />
          {!isLoading && data?.data?.attributes?.content?.length! > 0 && (
            <>
              {data?.data?.attributes?.content.map((content, index) => (
                <GridCell
                  iconColor={content?.iconColor}
                  key={content.id}
                  hasArrowBorder={true}
                  title={content?.title}
                  hasIcon={true}
                  index={index + 1}
                  description={content?.description}
                />
              ))}
            </>
          )}
        </Grid>
      </Container>
    </TemplateMain>
  );
};
export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery<AboutPage>("about", fetchAboutPage);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {}
}
