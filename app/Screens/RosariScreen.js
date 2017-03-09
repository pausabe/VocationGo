import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 0;
  }
  return 54;
}

export default class RosariScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.normalText}> Rosari </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: paddingBar(),
    backgroundColor: '#E1F5FE',
  },
  normalText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '300'
  }
})
