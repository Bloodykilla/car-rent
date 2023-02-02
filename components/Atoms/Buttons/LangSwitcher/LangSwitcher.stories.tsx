import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

export default {
  title: "Components/Atoms/Buttons/LangSwitcher",
  component: LangSwitcher,
} as ComponentMeta<typeof LangSwitcher>;

const Template: ComponentStory<typeof LangSwitcher> = (args) => (
  <LangSwitcher {...args} />
);

export const Props = Template.bind({});
