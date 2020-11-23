/**
 *
 * App
 *
 */
import 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAppState, makeSelectLoading, makeSelectError} from './selectors';
import { fetchCryptoAction } from './actions';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import { SCREENS } from '../common/constant';

const Stack = createStackNavigator();

export const App = () => {

  return (
    <NavigationContainer >
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={SCREENS.DETAILS}
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const mapStateToProps = () => {
  return createStructuredSelector({
    app: makeSelectAppState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
  });
};

export const mapDispatchToProps = {
    fetchCryptoAStart: fetchCryptoAction.start,
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
