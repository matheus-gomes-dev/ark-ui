import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from 'components/Input';
import Button from 'components/Button';
import CreateWalletPicture from 'assets/create-wallet.png';
import actions from 'state/create-wallet/actions';

const CreateWallet = ({
  phrase = [],
  name,
  address,
  step,
  nameUpdated,
  stepChanged,
  resetWalletCreation,
  generatePhrase,
  createWallet
}) => {

  return (
    <div className="container xl bg-white mt-8 rounded-lg responsive-display">

      <div className="h-half w-full">

        <div className="m-4 sm:m-8 pt-2 sm:pt-8 font-black">
          <span>Create Wallet</span>
        </div>

        {step === 'name-definition' &&
          <div>
            <Input
              label="Name"
              value={name}
              onChange={(e) => nameUpdated(e.target.value)}
            />
            <div className="flex justify-center items-center pt-4">
              <Button
                label="Next"
                size="md"
                disabled={!name}
                onClick={() => {
                  generatePhrase();
                  stepChanged('passphrase')
                }}
              />
            </div>
          </div>
        }

        {step === 'passphrase' &&
          <div>
            <div className="m-4 sm:m-8 lg:flex lg:justify-center lg:items-center sm:pt-8">
              {phrase.map((word, index) => (
                <div className="m-1 inline-block lg:block" key={`phrase_word_${index}`}>
                  <div className="h-8 w-20 text-sm bg-gray-200 flex justify-center items-center">
                    <span>{`${index + 1}. ${word}`}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center pt-2 sm:pt-8">
              <Button
                label="Next"
                size="md"
                onClick={() => createWallet()}
              />
            </div>
          </div>
        }

        {step === 'success' &&
          <div>
            <div className="m-4 sm:m-8 text-center text-xs md:text-sm pt-8">
              <span>{address}</span>
            </div>
            <div className="flex justify-center items-center pt-2 sm:pt-8">
              <Button
                label="Finish"
                size="md"
                onClick={() => {
                  navigator.clipboard.writeText(address);
                  resetWalletCreation();
                }}
              />
            </div>
          </div>
        }

      </div>


      <div className="h-half w-full flex flex-col justify-center items-center bg-custom-gray rounded-b-lg">

        <div className="text-white text-lg md:text-2xl font-bold">
          <span>{step === 'success' ? 'Success!' : 'Create Wallet'}</span>
        </div>

        {step === 'name-definition' &&
          <div className="text-white text-sm font-thin text-center">
            <span>Define the name of your wallet.</span>
          </div>
        }

        {step === 'passphrase' &&
          <div className="text-white text-sm font-thin text-center">
            <span>Be sure to save your passphrase securely. Do not show this passphrase to anyone.</span>
          </div>
        }

        {step === 'success' &&
          <div className="text-white text-sm font-thin text-center">
            <span>Click finish to copy the generated address to your clipboard.</span>
          </div>
        }

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
  name: state.createWalletReducer.name,
  step: state.createWalletReducer.step,
  phrase: state.createWalletReducer.phrase,
  address: state.createWalletReducer.address,
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateWallet);
