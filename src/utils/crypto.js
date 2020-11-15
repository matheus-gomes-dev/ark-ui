import { Identities } from '@arkecosystem/crypto';

const crypto = {
  generateAddressFromPassphrase: (phrase) => Identities.Address.fromPassphrase(phrase)
};

export default crypto;
