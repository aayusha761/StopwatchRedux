import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Stopwatch from './components/Stopwatch';
import {createStore, applyMiddleware} from 'redux';
import store from './reducers/rootReducer';

function App() {
   const storeRedux = createStore(store);
  return (
    <Provider store={storeRedux}>
      <View
        style={{
          flex: 1,
        }}>
        <Stopwatch />
      </View>
    </Provider>
  );
}

export default App;
