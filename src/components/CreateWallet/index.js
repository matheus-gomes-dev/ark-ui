import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

import Button from 'components/Button';
import CreateWalletPicture from 'assets/create-wallet.png';
import actions from 'state/create-wallet/actions';

const CreateWallet = ({
  phrase = [],
  address,
  isLoading,
  hasError,
  generatePhrase
}) => {

  useEffect(() => {
    generatePhrase();
  }, []);

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">
      <div className="h-half w-full">
        <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
          <span>Create Wallet</span>
        </div>

        <div className="m-4 sm:m-8">
          {phrase.map((word, index) => (
            <div className="m-1 inline-block">
              <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
                <span>{`${index + 1}. ${word}`}</span>
              </div>
            </div>
          ))}

        </div>
        <div className="flex justify-center items-center pt-2">
          <Button
            label="Create"
            size="md"
            isLoading={isLoading}
            disabled={!address}
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
}


const mapStateToProps = state => ({
  phrase: state.createWalletReducer.phrase,
  address: state.createWalletReducer.address,
  isLoading: state.createWalletReducer.isLoading,
  hasError: state.createWalletReducer.hasError,
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateWallet);
