import { Button } from "@/components/Atoms/Buttons/Button/Button";
import { Container } from "@/components/Atoms/Container/Container";
import { Title } from "@/components/Atoms/Title/Title";
import styles from "./styles.module.scss";

interface LocationBlockProps {}

interface LocationSelectorProps {
  path: string;
  title: string;
  locations: { href: string; title: string; id: string }[];
}

const LocationSelector = ({
  title,
  locations,
  path,
}: LocationSelectorProps) => {
  return (
    <div className={styles.locationContainer}>
      <Title tag={"h2"} align={"left"} title={title} />
      <div
        className={[
          styles.locationSelect,
          locations.length > 8 && styles.scroll,
        ].join(" ")}
      >
        {locations.map((location) => (
          <Button
            className={styles.locationItem}
            type={location.id === "at" ? "fill" : "outline"}
            key={location.id}
            href={`${path}/${location.href}`}
          >
            {location.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export const LocationBlock = ({}: LocationBlockProps) => {
  return (
    <Container
      className={styles.container}
      display={"flex"}
      verticalIndent={"large"}
    >
      <Title
        className={styles.title}
        tag={"h2"}
        align={"center"}
        title={"We are based in Vienna but we also deliver to:"}
      />
      <LocationSelector path={"countries"} title={"Country"} locations={[]} />
      <LocationSelector
        path={"countries/cities"}
        title={"Cities"}
        locations={[]}
      />
      <LocationSelector
        path={"countries/airports"}
        title={"Airports"}
        locations={[]}
      />
    </Container>
  );
};
