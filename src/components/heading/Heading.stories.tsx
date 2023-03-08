import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from './Heading';

export default {
  title: 'Collection/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  level: 'h1',
  children: 'Keep your link fit!',
};

export const Heading2 = Template.bind({});
Heading2.args = {
  level: 'h2',
  children: 'Your links',
};