import { ComponentMeta, ComponentStory } from "@storybook/react";
import { GlobeIcon } from "./GlobeIcon";

export default {
  title: "Components/Icons/GlobeIcon",
  component: GlobeIcon,
} as ComponentMeta<typeof GlobeIcon>;

const Template: ComponentStory<typeof GlobeIcon> = (args) => (
  <GlobeIcon {...args} />
);

export const Props = Template.bind({});
