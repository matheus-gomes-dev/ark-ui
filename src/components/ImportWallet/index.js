import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from 'components/Input';
import Button from 'components/Button';
import ImportWalletPicture from 'assets/importWallet.png';
import actions from 'state/import-wallet/actions';

const ImportWallet = ({ value, fieldUpdated }) => (
  <div className="container xl bg-white mt-8 rounded-lg" style={{ height: 'calc(100vh - 180px)', minHeight: '450px' }}>
    <div className="h-half w-full">
      <div className="m-8 pt-8">
        <span>1. Import Wallet</span>
      </div>
      <div className="m-8">
        <Input label="Address" value={value} onChange={(e) => fieldUpdated(e.target.value)} />
      </div>
      <div className="flex justify-center items-center sm:pt-4">
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


const mapStateToProps = state => ({
  value: state.importWalletReducer.value
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImportWallet);
