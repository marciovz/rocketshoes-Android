import { call, put, all, takeLatest } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  const data = {
    ...response.data,
    amount: 1,
    priceFormatted: formatPrice(response.data.price),
  };

  yield put(addToCartSuccess(data));

  NavigationService.navigate('Cart');
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
