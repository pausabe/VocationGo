import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import TextVGdb from '../SQL/TextVGdb';

export default class PVocScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text/>
          <TextVGdb />
          <Text/>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingHorizontal: 10,
    backgroundColor: '#E1F5FE',
  }
})
