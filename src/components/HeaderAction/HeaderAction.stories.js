import React from 'react';

import HeaderAction from './';

const Template = (args) => <HeaderAction {...args} />;

export const ListWallets = Template.bind({});
ListWallets.args = {
  action: 'list-wallets',
};

export const ImportWallet = Template.bind({});
ImportWallet.args = {
  action: 'import-wallet',
};

export const CreateWallet = Template.bind({});
CreateWallet.args = {
  action: 'add-wallet',
};

export const SeeDelegates = Template.bind({});
SeeDelegates.args = {
  action: 'see-delegates',
};

const stories = {
  title: 'Header/Action',
  component: HeaderAction
};
export default stories;
