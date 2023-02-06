import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GridCell } from "./GridCell";

export default {
  title: "Components/GridCell",
  component: GridCell,
} as ComponentMeta<typeof GridCell>;

const Template: ComponentStory<typeof GridCell> = (args) => (
  <GridCell {...args} />
);

export const Props = Template.bind({});
