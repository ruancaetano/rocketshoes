import { combineReducers } from 'redux';
import cartReducer from './modules/cart/reducer';

export default combineReducers({
  cart: cartReducer,
});
