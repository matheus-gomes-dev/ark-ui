import Mnemonic from 'bitcore-mnemonic';

const generatePassPhrase = () => {
  const mnemonicWords = new Mnemonic(Mnemonic.Words.ENGLISH).toString();
  return mnemonicWords.split(' ');
}

export default { generatePassPhrase };
