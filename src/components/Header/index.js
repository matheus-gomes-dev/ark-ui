import React from 'react';

import Logo from 'assets/ARK-400x400.png';
import Avatar from 'components/Avatar';
import HeaderAction from 'components/HeaderAction';

const Header = () => (
  <div className="container xl h-32 rounded-lg bg-white mt-8 flex justify-between">
    <div className="object-left flex">
      <div className="bg-cover bg-center h-32 w-32" style={{ backgroundImage: `url(${Logo})`}} />
      <div className="pl-16">
        <Avatar />
      </div>
    </div>
    <div className="object-right flex flex justify-center items-center pr-8">
      <HeaderAction action="list-wallets" label="My Wallets" hasDivider={true} isActive={true} />
      <HeaderAction action="import-wallet" label="Import Wallet" hasDivider={true} />
      <HeaderAction action="add-wallet" label="Create Wallet" />
    </div>
  </div>
);

export default Header;