import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import selectedTheme from '../../styles/theme';

const styles = StyleSheet.create({
  coinCard: {
    borderRadius: 10,
    padding: 16,
    borderColor: selectedTheme.color.border,
    backgroundColor: selectedTheme.color.white,
    borderWidth: 1,
    height: 82,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  symbol: {
    fontSize: selectedTheme.fontSize.three,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    margin: 0,
  },
  coinPrice: {
    fontSize: selectedTheme.fontSize.one,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    margin: 0,
  },
  name: {
    fontSize: selectedTheme.fontSize.four,
    color: selectedTheme.color.lightGrey,
    margin: 0,
  },
  coinCardContent: {
    flexDirection: 'row',
  },
});

interface Props {
    name: string,
    symbol: string,
    iconUrl: string,
    price: string,
    onPress: () => void
  }

export const CoinCard = (props: Props) => {
  const {name, symbol, onPress, price} = props;
    return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.coinCard}
        >
            <View style={styles.coinCardContent}>
                <View>
                    <Text style={styles.symbol}>{symbol}</Text>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
            <Text style={styles.coinPrice}>${parseFloat(price).toFixed(2)}</Text>
        </TouchableOpacity>
    );
};

export default CoinCard;