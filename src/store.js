import {
  compose,
  createStore,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = [applyMiddleware(thunk)];
if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
  //require('set.prototype.tojson');
  //require('map.prototype.tojson');
  middlewares.push(window.devToolsExtension());
}
const store = createStore(reducers, compose(...middlewares));

export default store;
