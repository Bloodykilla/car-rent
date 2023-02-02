import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Logo } from "./Logo";

export default {
  title: "Components/Icons/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Props = Template.bind({});
