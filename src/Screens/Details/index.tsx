/**
 *
 * Details
 *
 */
import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectDetailsState, makeSelectLoading, makeSelectError} from './selectors';
import { DetailsAction } from './actions';
import { View, Text, StyleSheet, Linking, Alert } from 'react-native';
import selectedTheme from '../../styles/theme';
import Button from '../../Components/Button';
import {capitalize, timestampToReadableDate} from '../../utils/formatter';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    backgroundColor: selectedTheme.color.white,
    padding: 16,
  },
  sectionHeader: {
    fontSize: selectedTheme.fontSize.two,
    fontWeight: 'bold',
    color: selectedTheme.color.lightGrey,
  },
  sectionDesc: {
    fontSize: selectedTheme.fontSize.four,
    color: selectedTheme.color.black,
    marginBottom: 12,
  },
  socialButtonStyle: {
    fontSize: selectedTheme.fontSize.three,
    marginVertical: 3,
  },
  coinPrice: {
    fontSize: selectedTheme.fontSize.one,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    margin: 0,
    marginVertical: 6,
  },
  infoContainer: {
    flexDirection: 'row',
    marginVertical: 3,
  },
  infoLabel: {
    fontSize: selectedTheme.fontSize.three,
    color: selectedTheme.color.black,
    margin: 0,
    minWidth: 200,
  },
  infoValue: {
    fontSize: selectedTheme.fontSize.three,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    margin: 0,
  },
});

interface Props {
  route: any,
}

export const Details = (props: Props) => {

  const coin = props.route.params.coin;

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const renderDetails = (
    <View>
      <Text style={styles.sectionHeader}>
        Details
      </Text>
      {coin.rank && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Rank</Text>
        <Text style={styles.infoValue}>: {coin.rank}</Text>
      </View>}
      {coin.symbol && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Symbol</Text>
        <Text style={styles.infoValue}>: {coin.symbol}</Text>
      </View>}
      {coin.numberOfMarkets && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Markets</Text>
        <Text style={styles.infoValue}>: {coin.numberOfMarkets}</Text>
      </View>}
      {coin.numberOfExchanges && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Exchanges</Text>
        <Text style={styles.infoValue}>: {coin.numberOfExchanges}</Text>
      </View>}
      {coin.listedAt && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Listed At</Text>
        <Text style={styles.infoValue}>: {timestampToReadableDate(coin.listedAt * 1000)}</Text>
      </View>}
      {coin.websiteUrl && <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Website</Text>
        <Button
          text={`: ${coin.websiteUrl}`}
          onPress={() => handlePress(coin.websiteUrl)}
          style={styles.socialButtonStyle}
        />
      </View>}
    </View>
  );

  const renderSocial = useMemo(() => {
    return (
      <View>
        <Text style={styles.sectionHeader}>
          Social
        </Text>
        {coin.socials.map((social, socialId) => {
          let buttonText = capitalize(social.type);

          return (
            <Button
              text={buttonText}
              onPress={() => handlePress(social.url)}
              style={styles.socialButtonStyle}
              key={socialId}
            />
          );
        })}
      </View>
    );
  }, [coin.socials]);

  const renderLinks = useMemo(() => {
    return (
      <View>
        <Text style={styles.sectionHeader}>
          Related Links
        </Text>
        {coin.links.map((link, linkId) => {
          let buttonText = capitalize(link.type);
          // tslint:disable-next-line: no-shadowed-variable
          const handlePress = async () => {
            const supported = await Linking.canOpenURL(link.url);
            if (supported) {
              await Linking.openURL(link.url);
            } else {
              Alert.alert(`Don't know how to open this URL: ${link.url}`);
            }
          }
          return (
            <Button
              text={buttonText}
              onPress={handlePress}
              style={styles.socialButtonStyle}
              key={linkId}
            />
          );
        })}
      </View>
    );
  }, [coin.socials]);
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionHeader}>
          {coin.name}
        </Text>
      <Text style={styles.coinPrice}>
        ${parseFloat(coin.price).toFixed(2)}
      </Text>
      {renderDetails}
      {renderSocial}
      {renderLinks}

    </View>
  );
};

export const mapStateToProps = () => {
  return createStructuredSelector({
    details: makeSelectDetailsState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});
};

export const mapDispatchToProps =  {
  DetailsStart: DetailsAction.start,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
