import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { Title } from "@/components/Atoms/Title/Title";
import { BenefitCard } from "@/components/Molecules/BenefitCard/BenefitCard";
import { Benefits } from "@/interfaces/Benefits";
import { fetchBenefits } from "api/http";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface BenefitBlockProps {}

export const BenefitBlock = ({}: BenefitBlockProps) => {
  const { isLoading, isError, data } = useQuery("benefits", fetchBenefits);

  return (
    <>
      {!isLoading && data?.data?.length! > 0 && (
        <Container display={"flex"} verticalIndent={"medium"}>
          <Title
            className={styles.title}
            tag={"h2"}
            align={"center"}
            title={"Benefits of car rental"}
          />

          <Grid className={styles.grid} display={"flex"}>
            {data?.data.map((benefit) => (
              <BenefitCard
                key={benefit.id}
                iconColor={benefit?.attributes?.iconColor}
                icon={benefit?.attributes.icon.data?.attributes.url}
                alt={
                  benefit?.attributes.icon.data?.attributes?.alternativeText ??
                  benefit?.attributes.title
                }
                title={benefit?.attributes.title}
                description={benefit?.attributes.description}
              />
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  try {
    await queryClient.prefetchQuery<Benefits>("benefits", fetchBenefits);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {}
}
