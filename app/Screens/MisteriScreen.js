import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import AudioBar from '../AudioBar/AudioBar';

var padBar = 54;

class MisteriScreen extends Component {
  componentWillMount() {
    if(Platform.OS === 'ios'){
      console.log("hola " + Platform.OS);
      padBar = 64;
    }
  }

  render() {
    console.log("padd: " + padBar);
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#E1F5FE',
          paddingTop: padBar
        }}
      >
        <AudioBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({

});

export default MisteriScreen;
