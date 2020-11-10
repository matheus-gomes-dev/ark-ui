import React from 'react';

import Button from './';

export default {
  title: 'Form/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Enabled = Template.bind({});
Enabled.args = {
  label: 'Button',
  disabled: false
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  disabled: false,
  size: 'sm'
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Button',
  disabled: false,
  size: 'md'
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  disabled: false,
  size: 'lg'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Button',
  disabled: true
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Button',
  isLoading: true
};
