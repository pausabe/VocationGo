import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SqlTest from '../SQL/SqlTest'

export default class PVocScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SqlTest />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
  }
})
