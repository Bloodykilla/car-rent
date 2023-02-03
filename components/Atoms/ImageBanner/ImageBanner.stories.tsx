import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageBanner } from "./ImageBanner";

export default {
  title: "Components/Atoms/ImageBanner",
  component: ImageBanner,
} as ComponentMeta<typeof ImageBanner>;

const Template: ComponentStory<typeof ImageBanner> = (args) => (
  <ImageBanner {...args} />
);

export const Props = Template.bind({});
