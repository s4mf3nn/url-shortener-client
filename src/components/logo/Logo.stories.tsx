import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'Collection/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Overview = Template.bind({});

export const WithBrand = Template.bind({});
WithBrand.args = {
  withBrand: true,
};