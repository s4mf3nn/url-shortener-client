import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Collection/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  bgColor: '#1663ff',
  labelColor: '#fff',
  label: 'Shorten',
  scissors: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  bgColor: '#f7ce22',
  labelColor: '#000',
  label: 'Signup',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  bgColor: '#fff',
  labelColor: '#000',
  label: 'Login',
};