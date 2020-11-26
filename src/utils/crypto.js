import { Identities } from '@arkecosystem/crypto';

const crypto = {
  generateAddressFromPassphrase: (phrase) => Identities.Address.fromPassphrase(phrase),
  isValidPublicKey: (publicKey) => {
    try {
      Identities.Address.fromPublicKey(publicKey);
      return true;
    } catch {
      return false;
    }
  }
};

export default crypto;
