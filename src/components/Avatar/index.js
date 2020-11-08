import React from 'react';
import AvatarIcon from 'assets/avatar.png'

const Avatar = () => (
  <div className="h-full flex justify-center items-center">
    <div className="bg-cover bg-center h-24 w-24 rounded-full" style={{ backgroundImage: `url(${AvatarIcon})`}} />
    <div className="flex flex-col justify-center items-left pl-4">
      <span className="font-bold text-xl text-black">Matheus Gomes</span>
      <span className="text-sm text-gray-600">Total Balance: 0.00</span>
    </div>
  </div>
);

export default Avatar;