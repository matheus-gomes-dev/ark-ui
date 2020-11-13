import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from 'components/Input';
import Button from 'components/Button';
import ImportWalletPicture from 'assets/importWallet.png';
import actions from 'state/import-wallet/actions';

const ImportWallet = ({
  address,
  name,
  isLoading,
  hasError,
  success,
  addressUpdated,
  nameUpdated,
  importWallet
}) => (
  <div className="container xl bg-white mt-8 rounded-lg responsive-display">
    <div className="h-half w-full">
      <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
        <span>Import Wallet</span>
      </div>
        <Input
          label="Name"
          value={name}
          onChange={(e) => nameUpdated(e.target.value)}
        />
        <Input
          label="Address"
          value={address}
          error={hasError ? 'Wallet not found' : ''}
          onChange={(e) => addressUpdated(e.target.value)}
        />
      <div className="flex justify-center items-center pt-4">
        <Button
          label="Import"
          size="md"
          isLoading={isLoading}
          disabled={!address}
          success={success}
          onClick={() => importWallet()}
        />
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
  name: state.importWalletReducer.name,
  address: state.importWalletReducer.address,
  isLoading: state.importWalletReducer.isLoading,
  hasError: state.importWalletReducer.hasError,
  success: state.importWalletReducer.success
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ImportWallet);
