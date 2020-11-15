import phraseGenerator from 'utils/passphrase';

export const Types = {
  generatePhrase: 'CREATE_WALLET_GENERATE_PHRASE',
  goToConfirmation: 'CREATE_WALLET_GOT_TO_CONFIRMATION',
  loadStarted: 'CREATE_WALLET_LOAD_STARTED',
  loadFinished: 'CREATE_WALLET_LOAD_FINISHED',
  loadFailed: 'CREATE_WALLET_LOAD_FAILED',
  resetWalletCreation: 'CREATE_WALLET_RESET'
};

const generatePhrase = () => {
  const phrase = phraseGenerator.generatePassPhrase();
  return ({ type: Types.generatePhrase, payload: { phrase }})
};
const goToConfirmation = () => ({ type: Types.goToConfirmation });
const loadStarted = () => ({ type: Types.loadStarted });
const loadFinished = (address) => ({ type: Types.loadFinished, payload: { address }});
const loadFailed = () => ({ type: Types.loadFailed });
const resetWalletCreation = () => ({ type: Types.resetWalletCreation })

const Actions = {
  generatePhrase,
  goToConfirmation,
  loadStarted,
  loadFinished,
  loadFailed,
  resetWalletCreation
};

export default Actions;
