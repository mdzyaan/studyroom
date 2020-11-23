/**
 *
 * Home
 *
 */
import React, {useState} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectHomeState, makeSelectLoading, makeSelectError} from './selectors';
import { HomeAction } from './actions';
import { ActionArr } from './constants';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import * as globalSelectors from '../../App/selectors';
import * as globalActions from '../../App/actions';
import CoinCard from '../../Components/CoinCard';
import selectedTheme from '../../styles/theme';
import { SCREENS } from '../../common/constant';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';

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
  },
  statValueContainer: {
    width: '50%',
  },
  coinListContainer: {
    padding: 16,
    paddingTop: 0,
  },
  coinCard: {
    borderRadius: 10,
    backgroundColor: selectedTheme.color.primaryColor,
  },
  loadingText: {
    fontSize: selectedTheme.fontSize.three,
    color: selectedTheme.color.black,
    marginBottom: 12,
  },
});
let limit = 10;
interface Props {
  crypto: any,
  navigation: any,
  fetchCryptoAStart: any,
}
export const Home = (props: Props) => {

  const { crypto, fetchCryptoAStart } = props;

  const [pageNumber, setPageNumber ] = useState(0);

  let fetchCoins = () => {
    fetchCryptoAStart({payload: {}, metadata: {timePeriod: '24h', limit, sort: 'coinranking', pageNumber}});
    setPageNumber(pageNumber + limit);
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <Text style={styles.SectionHeader}>
        Market Stats
      </Text>
      <View style={styles.flex}>
        <View style={styles.statValueContainer}>
          <Text style={styles.secondary}>Market Cap</Text>
          <Text style={styles.statValue}>${crypto.stats.totalMarketCap.toString().substr(0, 3)}B</Text>
        </View>
        <View>
          <Text style={styles.secondary}>24h Volume</Text>
          <Text style={styles.statValue}>${crypto.stats.total24hVolume.toString().substr(0, 3)}B</Text>
        </View>
      </View>
      <Text style={styles.SectionHeader}>
        Coins
      </Text>
      <View style={styles.coinListContainer}>
        {crypto.coins.map((coin: any, coinId: number) => {

          return (
            <CoinCard {...coin} key={coinId} onPress={() => {
              props.navigation.navigate(SCREENS.DETAILS, {
                coin,
              });
            }}/>
          );
        })}
        <VisibilitySensor onChange={fetchCoins}>
          <Text style={styles.loadingText}>Loading...</Text>
        </VisibilitySensor>
      </View>
    </ScrollView>
  );
};

export const mapStateToProps = () => {
  // @dev you can pass props to makeSelectFuncs(props) like so.
  return createStructuredSelector({
    home: makeSelectHomeState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    crypto: globalSelectors.makeSelectCrypto(),
});
};

export const mapDispatchToProps =  {
    HomeStart: (data: ActionArr) => HomeAction.start(data),
    fetchCryptoAStart: globalActions.fetchCryptoAction.start,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
