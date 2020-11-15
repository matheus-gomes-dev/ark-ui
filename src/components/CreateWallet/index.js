import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import Input from 'components/Input';
import Button from 'components/Button';
import CreateWalletPicture from 'assets/create-wallet.png';
import actions from 'state/import-wallet/actions';

const CreateWallet = ({
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
        <span>Create Wallet</span>
      </div>
      <div className="m-4 sm:m-8">
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
        <div className="m-1 inline-block">
          <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
            <span>1. luggage</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pt-2">
        <Button
          label="Create"
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
        <span>Create Wallet</span>
      </div>
      <div className="text-white text-sm font-thin text-center">
        <span>Be sure to save your passphrase securely. Do not show this passphrase to anyone.</span>
      </div>
      <div
        className="section-responsive-picture"
        style={{
          background: `url(${CreateWalletPicture}) no-repeat center`,
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateWallet);
