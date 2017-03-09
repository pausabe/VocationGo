import React, { Component, PropTypes } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import TextVGdb from '../SQL/TextVGdb';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 0;
  }
  return 54;
}

export default class PVocScreen extends Component {
  componentWillMount(){
    if(Platform.OS === 'ios'){
      barPad = 0;
    }
  }

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
    paddingTop: paddingBar(),
    paddingHorizontal: 10,
    backgroundColor: '#E1F5FE'
  }
})
