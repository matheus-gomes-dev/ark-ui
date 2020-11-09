import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Input from './';

export default {
  title: 'Form/Input',
  component: Input
};

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
