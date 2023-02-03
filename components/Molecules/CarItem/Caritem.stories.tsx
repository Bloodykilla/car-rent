import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CarItem } from "./CarItem";

export default {
  title: "Components/Molecules/CarItem",
  component: CarItem,
} as ComponentMeta<typeof CarItem>;

const Template: ComponentStory<typeof CarItem> = (args) => (
  <CarItem {...args} />
);

export const Props = Template.bind({});
