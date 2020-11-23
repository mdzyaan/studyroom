/**
 *
 * Details
 *
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import  { htmlToText } from 'html-to-text';
import { makeSelectDetailsState, makeSelectLoading, makeSelectError} from './selectors';
import { DetailsAction } from './actions';
import { ActionArr } from './constants';
import { View, Text, StyleSheet } from 'react-native';
import selectedTheme from '../../styles/theme';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    fontSize: selectedTheme.fontSize.two,
    fontWeight: 'bold',
    color: selectedTheme.color.black,
    marginBottom: 12,
  },
  sectionDesc: {
    fontSize: selectedTheme.fontSize.four,
    color: selectedTheme.color.black,
    marginBottom: 12,
  },
});

interface Props {
  route: any
}

export const Details = (props: Props) => {

  const coin = props.route.params.coin;
  console.log("coin name", coin.name);
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.sectionHeader}>
        About
      </Text>
      <Text style={styles.sectionDesc}>
        {/* {htmlToText(coin.description)} */}
      </Text>
    </View>
  );
};

Details.propTypes = {
  // DetailsStart: PropTypes.func.isRequired,
};

export const mapStateToProps = () => {
  // @dev you can pass props to makeSelectFuncs(props) like so.
  return createStructuredSelector({
    details: makeSelectDetailsState(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
});
};

export const mapDispatchToProps = () => {
  return {
    DetailsStart: (data: ActionArr) => DetailsAction.start(data),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
