import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Collection/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Shorten',
  scissors: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Signup',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  label: 'Login',
};