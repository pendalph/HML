import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { AppNavigator } from '_app/router';
import createStore from './store/configureStore';
import { styles } from './styles';

export const App: React.FC = (): JSX.Element => {
  const store = createStore();
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle='dark-content' animated translucent backgroundColor="rgba(0,0,0,0)" />
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  )
}