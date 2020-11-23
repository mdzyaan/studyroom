/**
 *
 * Home
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectHomeState, makeSelectLoading, makeSelectError} from './selectors';
import { HomeAction } from './actions';
import { ActionArr } from './constants';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as globalSelectors from '../../App/selectors';
import CoinCard from '../../Components/CoinCard';
import selectedTheme from '../../styles/theme';
import { SCREENS } from '../../common/constant';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: selectedTheme.color.white,
  },
  SectionHeader: {
    fontSize: selectedTheme.fontSize.two,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    marginBottom: 12,
    marginLeft: 12,
  },
  secondary: {
    fontSize: selectedTheme.fontSize.four,
    fontWeight: 'bold',
    color: selectedTheme.color.lightGrey,
    marginBottom: 0,
  },
  statValue: {
    fontSize: selectedTheme.fontSize.one,
    fontWeight: 'bold',
    color: selectedTheme.color.primaryColor,
    marginBottom: 12,
  },
  flex: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    // justifyContent: 'space-around',
  },
  statValueContainer: {
    width: '50%',
  },
  coinListContainer: {
    padding: 16,
  },
  coinCard: {
    borderRadius: 10,
    backgroundColor: selectedTheme.color.primaryColor,
  },
});

interface Props {
  crypto50: any,
  navigation: any
}
export const Home = (props: Props) => {

  const { crypto50 } = props;
  return (
    <ScrollView style={styles.homeContainer}>
      <Text style={styles.SectionHeader}>
        Market Stats
      </Text>
      <View style={styles.flex}>
        <View style={styles.statValueContainer}>
          <Text style={styles.secondary}>Market Cap</Text>
          <Text style={styles.statValue}>${crypto50.stats.totalMarketCap.toString().substr(0, 3)}B</Text>
        </View>
        <View>
          <Text style={styles.secondary}>24h Volume</Text>
          <Text style={styles.statValue}>${crypto50.stats.total24hVolume.toString().substr(0, 3)}B</Text>
        </View>
      </View>
      <Text style={styles.SectionHeader}>
        Top 50 Coins
      </Text>
      <View style={styles.coinListContainer}>
        {crypto50.coins.map((coin: any, coinId: number) => {

          return (
            <CoinCard {...coin} key={coinId} onPress={() => {
              props.navigation.navigate(SCREENS.DETAILS, {
                coin,
              });
            }}/>
          );
        })}
      </View>
    </ScrollView>
  );
};

Home.propTypes = {
  // HomeStart: PropTypes.func.isRequired,
};

export const mapStateToProps = () => {
  // @dev you can pass props to makeSelectFuncs(props) like so.
  return createStructuredSelector({
    home: makeSelectHomeState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    crypto50: globalSelectors.makeSelectCrypto50(),
});
};

export const mapDispatchToProps = () => {
  return {
    HomeStart: (data: ActionArr) => HomeAction.start(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
