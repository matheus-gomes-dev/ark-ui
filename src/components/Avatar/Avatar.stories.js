import React from 'react';

import Avatar from './';


export default {
  title: 'Example/Avatar',
  component: Avatar
};

const Template = (args) => <Avatar {...args} />;

export const User = Template.bind({});
User.args = {
  type: 'user',
};

export const Wallet = Template.bind({});
Wallet.args = {
  type: 'wallet',
};