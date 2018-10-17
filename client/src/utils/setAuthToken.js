import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply token to every req
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthToken;
