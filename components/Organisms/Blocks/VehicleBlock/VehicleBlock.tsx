import { Container } from "@/components/Atoms/Container/Container";
import { Grid } from "@/components/Atoms/Grid/Grid";
import { Title } from "@/components/Atoms/Title/Title";
import { CarItem } from "@/components/Molecules/CarItem/CarItem";
import { VehiclesData } from "@/interfaces/Vehicles";
import { fetchVehicles } from "api/http";
import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./styles.module.scss";

interface VehicleBlockProps {}

export const VehicleBlock = ({}: VehicleBlockProps) => {
  const { isLoading, isError, data } = useQuery("vehicles", fetchVehicles);

  return (
    <>
      {!isLoading && data?.data?.length! > 0 && (
        <Container display={"block"} verticalIndent={"medium"}>
          <Title
            className={styles.title}
            tag={"h2"}
            align={"center"}
            title={"Select vehicle type"}
          />

          <Grid className={styles.grid} display={"flex"}>
            {data?.data?.map((vehicle) => (
              <CarItem
                key={vehicle.id}
                className={styles.item}
                thumbnail={vehicle.attributes.image.data.attributes.url}
                alt={
                  vehicle?.attributes.image.data.attributes.alternativeText ??
                  vehicle?.attributes.title
                }
                label={vehicle?.attributes.title}
                price={`${vehicle?.attributes.price}`}
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
    await queryClient.prefetchQuery<VehiclesData>("vehicles", fetchVehicles);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (error) {}
}
