import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';

export default {
  title: 'Collection/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  ellipsis: false,
  children: 'Start shortening your URLs today in just a few clicks and keep track your audience.',
};