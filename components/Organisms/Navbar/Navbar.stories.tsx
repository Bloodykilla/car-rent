import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Navbar } from "./Navbar";

export default {
  title: "Components/Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Props = Template.bind({});
