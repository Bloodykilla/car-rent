import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BenefitCard } from "./BenefitCard";

export default {
  title: "Components/Molecules/BenefitCard",
  component: BenefitCard,
} as ComponentMeta<typeof BenefitCard>;

const Template: ComponentStory<typeof BenefitCard> = (args) => (
  <BenefitCard {...args} />
);

export const Props = Template.bind({});
