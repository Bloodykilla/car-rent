import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Grid } from "./Grid";

export default {
  title: "Components/Atoms/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Props = Template.bind({});
