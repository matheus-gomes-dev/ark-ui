import React from 'react';
import PropTypes from 'prop-types';

import AvatarIcon from 'assets/avatar.png';

const Avatar = ({ name = 'Matheus', amount = '0.00' }) => (
  <div className="h-full flex justify-center items-center">
    <div
      className={`bg-cover bg-center h-16 w-16 hidden md:block rounded-full`}
      style={{ backgroundImage: `url(${AvatarIcon})`}}
    />
    <div className="flex flex-col justify-center items-left pl-4">
      <span className="font-bold text-sm text-black">{name}</span>
      <span className="text-sm text-gray-600 hidden md:block">
        {`Total balance: ${amount}`}
      </span>
      <span className="text-sm text-gray-600 md:hidden">
        {`${amount}`}
      </span>
    </div>
  </div>
);


Avatar.propTypes = {
  name: PropTypes.string,
  amount: PropTypes.string,
};

export default Avatar;
