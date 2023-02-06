import { Container } from "@/components/Atoms/Container/Container";
import { CardOrderBlock } from "@/components/Organisms/Blocks/CarOrderBlock/CardOrderBlock";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";

interface IndexProps {}

const Index = ({}: IndexProps) => {
  return (
    <TemplateMain>
      <Container display="block" verticalIndent="medium">
        <CardOrderBlock />
      </Container>
    </TemplateMain>
  );
};
export default Index;
