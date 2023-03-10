import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Collection/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  shortId: 'y6gpuN',
  originUrl: 'https://github.com/s4mf3nn/solar-system',
  createdAt: new Date(),
  views: 96
};