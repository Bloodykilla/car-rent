import { Button } from "@/components/Atoms/Buttons/Button/Button";
import { Container } from "@/components/Atoms/Container/Container";
import { ImageBanner } from "@/components/Atoms/ImageBanner/ImageBanner";
import { Meta } from "@/components/Atoms/Meta/Meta";
import { Title } from "@/components/Atoms/Title/Title";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";
import { useEffect, useState } from "react";

interface ErrorPageProps {}

const ErrorPage = ({}: ErrorPageProps) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {!isLoading && (
        <TemplateMain>
          <Meta title={`404`} description={`404`} />
          <ImageBanner thumbnail={null} alt={null} />
          <Container
            display={"flex"}
            flexDirection={"col"}
            verticalIndent={"medium"}
          >
            <Title title={"404 - Page not found"} tag={"h1"} align={"center"} />
            <Button href="/" type={"fill"}>
              {"Back to Home Page"}
            </Button>
          </Container>
        </TemplateMain>
      )}
    </>
  );
};
export default ErrorPage;
