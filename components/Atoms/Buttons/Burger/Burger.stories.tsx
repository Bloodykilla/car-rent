import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Burger } from './Burger';

export default {
  title: 'Components/Atoms/Buttons/Burger',
  component: Burger
} as ComponentMeta<typeof Burger>;

const Template: ComponentStory<typeof Burger> = (args) => (
  <Burger {...args} />
);

export const Props = Template.bind({});
