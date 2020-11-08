import React from 'react';
import PropTypes from 'prop-types';

import AvatarIcon from 'assets/avatar.png';
import WalletIcon from 'assets/wallet.png';

const Avatar = ({ name = 'Matheus Gomes', amount = '0.00', type = 'user' }) => (
  <div className="h-full flex justify-center items-center">
    <div
      className="bg-cover bg-center h-24 w-24 rounded-full"
      style={{ backgroundImage: `url(${type === 'user' ? AvatarIcon : WalletIcon})`}}
    />
    <div className="flex flex-col justify-center items-left pl-4">
      <span className={type === 'user' ? "font-bold text-xl text-black" : "text-sm text-gray-600"}>{name}</span>
      <span className={type === 'user' ? "text-sm text-gray-600" : "font-bold text-xl text-black"}>
        {type === 'user' ? `Total Balance: ${amount}` : amount}
      </span>
    </div>
  </div>
);


Avatar.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.oneOf(['user', 'avatar'])
};

export default Avatar;
