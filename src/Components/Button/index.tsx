import React from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import selectedTheme from '../../styles/theme';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: selectedTheme.fontSize.one,
    color: selectedTheme.color.primaryColor,
    margin: 0,
  },
});

interface Props {
    text: any,
    onPress: () => void,
    style: any,
  }

export const Button = (props: Props) => {
  const { onPress, text, style } = props;
    return (
        <TouchableOpacity
          onPress={onPress}
        >
            <Text style={[styles.buttonText, style]}>{text}</Text>
        </TouchableOpacity>
    );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default Button;