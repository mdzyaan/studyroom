/**
 *
 * App
 *
 */
import 'react-native-gesture-handler';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAppState, makeSelectLoading, makeSelectError} from './selectors';
import { fetchCryptoAction } from './actions';
import {  Props } from './constants';

import React, {useEffect} from 'react';
import {
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';
import { SCREENS } from '../common/constant';

const Stack = createStackNavigator();

export const App = (props: Props) => {

  const { fetchCryptoAStart} = props;

  // useEffect(() => {
  //   fetchCryptoAStart({payload: {}, metadata: {timePeriod: '24h', limit: 10, sort: 'coinranking', pageNumber: 0}});
  // }, []);


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
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

App.propTypes = {
  // AppStart: PropTypes.func,
};

export const mapStateToProps = () => {
  // @dev you can pass props to makeSelectFuncs(props) like so.
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
