import { get, join } from 'lodash';

import crypto from 'utils/crypto';
import phraseGenerator from 'utils/passphrase';
import myWalletsActions from 'state/my-wallets/actions';

export const Types = {
  nameUpdated: 'CREATE_WALLET_NAME_UPDATED',
  stepChanged: 'CREATE_WALLET_STEP_CHANGED',
  generatePhrase: 'CREATE_WALLET_GENERATE_PHRASE',
  addressGenerated: 'CREATE_WALLET_ADDRESS_GENERATED',
  resetWalletCreation: 'CREATE_WALLET_RESET'
};

const nameUpdated = (name) => ({ type: Types.nameUpdated, payload: { name }});
const stepChanged = (step) => ({ type: Types.stepChanged, payload: { step }});
const generatePhrase = () => {
  const phrase = phraseGenerator.generatePassPhrase();
  return ({ type: Types.generatePhrase, payload: { phrase }})
};
const addressGenerated = (address) => ({ type: Types.addressGenerated, payload: { address }});
const resetWalletCreation = () => ({ type: Types.resetWalletCreation });

const createWallet = () => (dispatch, getState) => {
  const state = getState();
  const phrase = get(state, 'createWalletReducer.phrase', []);
  const name = get(state, 'createWalletReducer.name', '');
  const address = crypto.generateAddressFromPassphrase(join(phrase, ' '));
  dispatch(myWalletsActions.addWallet({ name, address, delegate: '', balance: '' }));
  dispatch(addressGenerated(address));
  dispatch(stepChanged('success'));
};


const Actions = {
  nameUpdated,
  stepChanged,
  generatePhrase,
  addressGenerated,
  resetWalletCreation,
  createWallet
};

export default Actions;
