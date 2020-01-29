import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import colors from './styles/colors';
import './config/reactotronConfig';
import store from './store';
import Routes from './routes';

export default function src() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </Provider>
  );
}
