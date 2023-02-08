import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Markdown } from "@/components/Atoms/Markdown/Markdown";
import { Title } from "@/components/Atoms/Title/Title";
import { GridCell } from "@/components/Molecules/GridCell/GridCell";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import { fetchPostById, fetchPostBySlug } from "api/http";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface IndexProps {
  id: string;
}

const Index = ({ id }: IndexProps) => {
  const { isLoading, isError, data } = useQuery("post", () =>
    fetchPostById(`${id}`)
  );

  return (
    <TemplateMain>
      <ImageBanner
        thumbnail={data?.data?.attributes?.banner?.data?.attributes?.url!}
        alt={null}
      />
      <Container
        display={"block"}
        className={
          data?.data?.attributes?.contentItems?.length! === 0
            ? styles.markdown
            : ""
        }
        verticalIndent={"medium"}
      >
        {data?.data?.attributes?.contentItems?.length! > 0 ? (
          <Grid className={styles.grid} display={"grid"} col={"col-2"}>
            <GridCell
              className={styles.firstItem}
              title={data?.data?.attributes?.title!}
              description={data?.data?.attributes?.content}
              isPageTitle={true}
              hasIcon={false}
            />
            {data?.data?.attributes?.contentItems.map((contentItem, index) => (
              <GridCell
                iconColor={contentItem?.iconColor}
                index={index + 1}
                hasArrowBorder={true}
                key={contentItem.id}
                title={contentItem.title}
                description={contentItem?.description}
                isPageTitle={false}
                hasIcon={true}
                thumbnail={
                  process.env.NEXT_PUBLIC_API +
                  contentItem?.thumbnail?.data?.attributes?.url
                }
              />
            ))}
          </Grid>
        ) : (
          <>
            {data?.data?.attributes?.title && (
              <Title
                title={data?.data?.attributes?.title!}
                tag={"h1"}
                align={"center"}
              />
            )}
            {data?.data?.attributes?.content && (
              <Markdown
                className={styles.markdown}
                content={data?.data?.attributes?.content}
              />
            )}
          </>
        )}
      </Container>
    </TemplateMain>
  );
};
export default Index;

export async function getServerSideProps({ params }: any) {
  const queryClient = new QueryClient();

  try {
    const { data } = await fetchPostBySlug(params.slug);
    if (data?.length > 0) {
      await queryClient.prefetchQuery("post", () =>
        fetchPostById(`${data[0]?.id}`)
      );
    } else {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        id: data[0]?.id,
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}
