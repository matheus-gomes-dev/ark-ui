import React from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import ImportWalletPicture from 'assets/importWallet.png';

const ImportWallet = () => (
  <div className="container xl bg-white mt-8 rounded-lg" style={{ height: 'calc(100vh - 180px)' }}>
    <div className="h-half w-full">
      <div className="m-8 pt-8">
        <span>1. Import Wallet</span>
      </div>
      <div className="m-8">
        <Input label="Address" />
      </div>
      <div className="flex justify-center items-center sm:pt-8">
        <Button label="Import" size="md" />
      </div>
    </div>
    <div className="h-half w-full flex flex-col justify-center items-center bg-custom-gray rounded-b-lg">
      <div className="text-white text-lg md:text-2xl font-bold">
        <span>Import Wallet</span>
      </div>
      <div className="text-white text-sm font-thin">
        <span>Fill in the public address of your wallet</span>
      </div>
      <div
        className="section-responsive-picture"
        style={{
          background: `url(${ImportWalletPicture}) no-repeat center`,
          backgroundSize: 'cover'
        }}
      />
    </div>
  </div>
);

export default ImportWallet;
