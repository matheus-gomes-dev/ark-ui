import axios from 'axios';

const API_URL = 'https://explorer.ark.io/api';

const api = {
  importWallet: (publicKey) => axios.get(`${API_URL}/wallets/${publicKey}`),
  retrieveDelegate: (delegate) => axios.get(`${API_URL}/delegates/${delegate}`),
  fetchDelegates: (paginatedEndpoint = 'delegates?page=1&limit=20') =>
    axios.get(`${API_URL}/${paginatedEndpoint}`)
};

export default api;
