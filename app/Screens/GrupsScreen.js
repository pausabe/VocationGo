import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import GrupsMap from '../Map/GrupsMap'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 0;
  }
  return 54;
}

export default class GrupsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GrupsMap />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingTop: paddingBar()
  }
})
