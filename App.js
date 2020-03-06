import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Stopwatch from './components/Stopwatch';
import {createStore, applyMiddleware} from 'redux';
import Lap from './components/LapShow';
import store from './reducers/rootReducer';

export default class App extends Component{
  render(){
      const storeRedux = createStore(store);
      const Stack = createStackNavigator();

      return (
          <Provider store={storeRedux}>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen name='Stopwatch' component={Stopwatch} />
                      <Stack.Screen name='Lap' component={Lap} />
                  </Stack.Navigator>
              </NavigationContainer>
          </Provider>
      );
  }
}
