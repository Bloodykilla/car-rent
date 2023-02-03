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

const COUNTRIES_DATA = [
  { href: "austria", title: "Austria", id: "at" },
  { href: "germany", title: "Germany", id: "ge" },
  { href: "slovenia", title: "Slovenia", id: "sl" },
  { href: "czech", title: "Czech", id: "cz" },
];

const CITIES_DATA = [
  { href: "amstetten", title: "Amstetten", id: "amst1" },
  { href: "amstetten", title: "Amstetten", id: "amst2" },
  { href: "amstetten", title: "Amstetten", id: "amst3" },
  { href: "amstetten", title: "Amstetten", id: "amst4" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
  { href: "amstetten", title: "Amstetten", id: "amst5" },
  { href: "amstetten", title: "Amste", id: "amst6" },
  { href: "amstetten", title: "Amstetten", id: "amst7" },
];

const AIRPORTS_DATA = [
  { href: "kunovice", title: "Kunovice", id: "kn1" },
  { href: "kunovice", title: "Kunovice", id: "kn2" },
  { href: "kunovice", title: "Kunovice", id: "kn3" },
  { href: "kunovice", title: "Kuno", id: "kn4" },
  { href: "kunovice", title: "Kuvice", id: "kn5" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn1" },
  { href: "kunovice", title: "Kunovice", id: "kn2" },
  { href: "kunovice", title: "Kunovice", id: "kn3" },
  { href: "kunovice", title: "Kuno", id: "kn4" },
  { href: "kunovice", title: "Kuvice", id: "kn5" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn1" },
  { href: "kunovice", title: "Kunovice", id: "kn2" },
  { href: "kunovice", title: "Kunovice", id: "kn3" },
  { href: "kunovice", title: "Kuno", id: "kn4" },
  { href: "kunovice", title: "Kuvice", id: "kn5" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
  { href: "kunovice", title: "Kunovice", id: "kn6" },
  { href: "kunovice", title: "Knovice", id: "kn7" },
  { href: "kunovice", title: "Kunice", id: "kn8" },
];

const LocationSelector = ({
  title,
  locations,
  path,
}: LocationSelectorProps) => {
  return (
    <div className={styles.locationContainer}>
      <Title tag={"h2"} align={"left"} content={title} />
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
        content={"We are based in Vienna but we also deliver to:"}
      />
      <LocationSelector
        path={"countries"}
        title={"Country"}
        locations={COUNTRIES_DATA}
      />
      <LocationSelector
        path={"countries/cities"}
        title={"Cities"}
        locations={CITIES_DATA}
      />
      <LocationSelector
        path={"countries/airports"}
        title={"Airports"}
        locations={AIRPORTS_DATA}
      />
    </Container>
  );
};
