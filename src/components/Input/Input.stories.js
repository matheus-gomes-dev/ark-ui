import React from 'react';

import Input from './';

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Address',
  type: 'text'
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Address',
  type: 'text',
  error: 'Wallet not found'
};

const stories = {
  title: 'Form/Input',
  component: Input
};
export default stories;
