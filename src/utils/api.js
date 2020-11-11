import axios from 'axios';

const API_URL = 'https://explorer.ark.io/api';

const api = {
  importWallet: (publicKey) => axios.get(`${API_URL}/wallets/${publicKey}`)
};

export default api;
