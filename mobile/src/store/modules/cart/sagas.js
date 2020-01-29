import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';
import api from '../../../services/api';

function* addToCart({ payload: id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stockResponse = yield call(api.get, `/stock/${id}`);

  const stockAmount = stockResponse.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Ops', 'Quantidade solicitada não disponível no estoque!');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const productResponse = yield call(api.get, `/products/${id}`);
    const data = {
      ...productResponse.data,
      amount: 1,
      formattedPrice: formatPrice(productResponse.data.price),
    };
    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  const stockResponse = yield call(api.get, `/stock/${id}`);

  const stockAmount = stockResponse.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Ops', 'Quantidade solicitada não disponível no estoque!');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
