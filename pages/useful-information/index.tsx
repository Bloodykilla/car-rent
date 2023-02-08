import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Meta } from "@/components/Atoms/Meta/Meta";
import { Title } from "@/components/Atoms/Title/Title";
import { InfoCard } from "@/components/Molecules/InfoCard/InfoCard";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import { PostsData } from "@/interfaces/Posts";
import { fetchPosts } from "api/http";
import { WordsLimit } from "helpres/WordsLimit";
import moment from "moment";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface IndexProps {
  res: PostsData;
}

const WORDS_LIMIT = 45;

const Index = ({ res }: IndexProps) => {
  const { isLoading, isError, data } = useQuery("posts", fetchPosts, {
    initialData: res,
  });

  return (
    <TemplateMain>
      <Meta title={""} description={""} />
      <ImageBanner thumbnail={null} alt={null} />
      <Container display="block" verticalIndent="medium">
        <Title
          className={styles.title}
          title={"Useful information"}
          tag={"h1"}
          align={"center"}
        />
        {!isLoading && data?.data?.length! > 0 && (
          <Grid display="grid" col="col-3">
            {data?.data?.map((post) => (
              <InfoCard
                key={post.id}
                thumbnail={
                  process.env.NEXT_PUBLIC_API +
                  post?.attributes?.banner?.data?.attributes?.url
                }
                href={`/useful-information/${post?.attributes?.slug}`}
                title={post?.attributes?.title}
                excerpt={`${WordsLimit(post.attributes.excerpt, WORDS_LIMIT)}`}
                date={moment(post?.attributes?.publishedAt).format(
                  "MMM DD, YYYY"
                )}
              />
            ))}
          </Grid>
        )}
      </Container>
    </TemplateMain>
  );
};
export default Index;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery("posts", fetchPosts);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {}
}
