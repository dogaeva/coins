import axios from 'axios';

export const getCoins = () => {
  const URL = 'https://api.coincap.io/v2/assets';
  return async dispatch => {
    dispatch({ type: 'GET_COINS_START' });
    try {
      const response = await axios.get(URL, {params: {limit: 15}});
      dispatch({ type: 'GET_COINS_SUCCESS', data: response.data });
    } catch (error) {
      const { status, statusText } = error.response;
      dispatch({ type: 'GET_COINS_ERROR', error: { status, statusText }});
    }
  };
};
