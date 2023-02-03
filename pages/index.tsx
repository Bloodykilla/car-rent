import { Button } from "@/components/Atoms/Buttons/Button/Button";
import { Container } from "@/components/Atoms/Container/Container";
import { Title } from "@/components/Atoms/Title/Title";
import { VehicleBlock } from "@/components/Organisms/Blocks/VehicleBlock/VehicleBlock";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";

export default function Home() {
  return (
    <TemplateMain>
      <Container display={"block"} verticalIndent={"large"}>
        <h1>Car Rental in Vienna</h1>
        <Title
          content={
            "We support you throughout your trip, whenever and wherever you need assistance..."
          }
          tag={"h4"}
          align={"left"}
        />
        <div style={{ backgroundColor: "grey" }}>
          <Button type="fill" href={"/"}>
            {"View vehicle types"}
          </Button>
          <Button type="outline" href={"/"}>
            {"Germany"}
          </Button>
          <Button type="outline" isBlueBorder={true} href={"/"}>
            {"Manage booking"}
          </Button>
        </div>
      </Container>
      <VehicleBlock />
    </TemplateMain>
  );
}
