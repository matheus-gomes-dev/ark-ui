import React from 'react';

import Logo from 'assets/ARK-400x400.png';
import Avatar from 'components/Avatar';

const Header = () => (
  <div className="container xl h-32 rounded-lg bg-white mt-8 flex justify-between">
    <div className="object-left flex">
      <div className="bg-cover bg-center h-32 w-32" style={{ backgroundImage: `url(${Logo})`}} />
      <div className="pl-16">
        <Avatar />
      </div>
    </div>
    <div className="object-right w-20" style={{ border: '1px solid green'}}>
    </div>
  </div>
);

export default Header;