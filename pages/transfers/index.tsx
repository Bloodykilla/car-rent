import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Markdown } from "@/components/Atoms/Markdown/Markdown";
import { Meta } from "@/components/Atoms/Meta/Meta";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import { fetchTransfersPage } from "api/http";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  const { isLoading, isError, data } = useQuery(
    "transfers",
    fetchTransfersPage
  );

  return (
    <TemplateMain>
      <Meta
        title={data?.data?.attributes?.meta?.title}
        description={data?.data?.attributes?.meta?.description}
      />
      {data?.data?.attributes?.banner?.data?.attributes?.url && (
        <ImageBanner
          thumbnail={data?.data?.attributes?.banner?.data?.attributes?.url}
          alt={data?.data?.attributes?.title}
        />
      )}
      <Container display={"block"} verticalIndent={"medium"}>
        <Grid className={styles.grid} display={"grid"} col={"col-2"}>
          <GridCell
            className={styles.firstItem}
            title={data?.data?.attributes?.title ?? "Transfers"}
            description={data?.data?.attributes?.description}
            isPageTitle={true}
            hasIcon={false}
          />
          {!isLoading && data?.data?.attributes?.content?.length! > 0 && (
            <>
              {data?.data?.attributes?.content.map((content) => (
                <GridCell
                  iconColor={content?.iconColor}
                  key={content.id}
                  icon={
                    process.env.NEXT_PUBLIC_API +
                    content?.icon?.data.attributes.url
                  }
                  hasArrowBorder={true}
                  title={content?.title}
                  hasIcon={true}
                  description={content?.description}
                />
              ))}
            </>
          )}
        </Grid>
        {data?.data?.attributes?.bottomText && (
          <Markdown
            className={styles.bottomText}
            content={data?.data?.attributes?.bottomText}
          />
        )}
      </Container>
    </TemplateMain>
  );
};
export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery("transfers", fetchTransfersPage);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {}
}
