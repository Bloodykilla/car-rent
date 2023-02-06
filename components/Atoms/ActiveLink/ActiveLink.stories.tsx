import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ActiveLink } from "./ActiveLink";

export default {
  title: "Components/Atoms/ActiveLink",
  component: ActiveLink,
} as ComponentMeta<typeof ActiveLink>;

const Template: ComponentStory<typeof ActiveLink> = (args) => (
  <ActiveLink {...args} />
);

export const Props = Template.bind({});
