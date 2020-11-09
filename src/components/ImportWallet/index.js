import React from 'react';
import ImportWalletPicture from 'assets/importWallet.png';

const ImportWallet = () => (
  <div className="container xl bg-white mt-8 rounded-lg" style={{ height: 'calc(100vh - 180px)' }}>
    <div className="h-half">
      
    </div>
    <div className="h-half w-full flex flex-col justify-center items-center bg-custom-gray">
      <div className="text-white text-lg md:text-2xl font-bold">
        <span>Import Wallet</span>
      </div>
      <div className="text-white text-sm font-thin">
        <span>Fill in the address of your wallet</span>
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
