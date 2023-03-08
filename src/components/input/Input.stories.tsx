import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Collection/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Overview = Template.bind({});
Overview.args = {
  type: 'url',
  placeholder: 'Past your link and make it shorter',
};