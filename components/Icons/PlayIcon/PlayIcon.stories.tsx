import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PlayIcon } from "./PlayIcon";

export default {
  title: "Components/Icons/PlayIcon",
  component: PlayIcon,
} as ComponentMeta<typeof PlayIcon>;

const Template: ComponentStory<typeof PlayIcon> = (args) => (
  <PlayIcon {...args} />
);

export const Props = Template.bind({});
