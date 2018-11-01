const initialState = {
  isFetching: false,
  coins: []
};

const coins = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_COINS_START':
    return {
      isFetching: true
    };
  case 'GET_COINS_SUCCESS':
    return {
      coins: action.data.data,
      isFetching: false
    };
  default:
    return state;
  }
};

export default coins;
