import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddlware = createSagaMiddleware({ sagaMonitor });
const enhancer = __DEV__ ? console.tron.createEnhancer() : null;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddlware), enhancer)
);

sagaMiddlware.run(rootSaga);

export default store;
