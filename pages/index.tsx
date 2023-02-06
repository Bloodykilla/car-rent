import { BenefitBlock } from "@/components/Organisms/Blocks/BenefitBlock/BenefitBlock";
import { HeroBlock } from "@/components/Organisms/Blocks/HeroBlock/HeroBlock";
import { LocationBlock } from "@/components/Organisms/Blocks/LocationBlock/LocationBlock";
import { VehicleBlock } from "@/components/Organisms/Blocks/VehicleBlock/VehicleBlock";
import { VideoBlock } from "@/components/Organisms/Blocks/VideoBlock/VideoBlock";
import { TemplateMain } from "@/components/Templates/TemplateMain/TemplateMain";

export default function Home() {
  return (
    <TemplateMain>
      <HeroBlock />
      <VehicleBlock />
      <LocationBlock />
      <BenefitBlock />
      <VideoBlock />
    </TemplateMain>
  );
}
