import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';

import Stopwatch from './components/Stopwatch';
import {createStore, applyMiddleware} from 'redux';
import store from './reducers/rootReducer';
import StackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
//import {createStackNavigator} from 'react-navigation-stack';
// import {NavigationContainer} from '@react-navigation/native';
//import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerNavigator from '@react-navigation/drawer/src/navigators/createDrawerNavigator';
import SyncStorage from 'sync-storage';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
export default class App extends Component{
    storeRedux = createStore(store);
  render(){

      // createStack = () => {
      //     <StackNavigator>
      //     </StackNavigator>
      // };

      return (
          <Provider store={this.storeRedux}>
              <View
                  style={{
                      flex: 1,
                  }}>
                  {/*//<NavigationContainer>*/}
                  <Stopwatch />
                  {/*</NavigationContainer>*/}
              </View>
          </Provider>
      );
  }
}
