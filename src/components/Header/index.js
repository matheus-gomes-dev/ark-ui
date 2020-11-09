import React from 'react';

import Logo from 'assets/ARK-400x400.png';
import Avatar from 'components/Avatar';
import HeaderAction from 'components/HeaderAction';

const Header = () => (
  <div className="container xl h-20 md:h-24 rounded-lg bg-white mt-8 flex justify-between">
    <div className="object-left flex">
      <div
        className="bg-cover bg-center h-20 w-20 rounded-tl-lg rounded-bl-lg md:h-24 md:w-24"
        style={{ backgroundImage: `url(${Logo})` }}
      />
      <div className="pl-0 md:pl-8">
        <Avatar />
      </div>
    </div>
    <div className="object-right flex justify-center items-center md:pr-4">
      <HeaderAction action="list-wallets" label="My Wallets" hasDivider={true} isActive={true} />
      <HeaderAction action="import-wallet" label="Import Wallet" hasDivider={true} />
      <HeaderAction action="add-wallet" label="Create Wallet" />
    </div>
  </div>
);

export default Header;