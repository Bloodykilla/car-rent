import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Container } from "./Container";

export default {
  title: "Components/Atoms/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Props = Template.bind({});
