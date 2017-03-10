import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import AudioBar from '../AudioBar/AudioBar';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class MisteriScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.audioContainer}>
          <AudioBar soundName={'goig.mp3'}/>
        </View>
        <View style={styles.otherContainer}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    paddingTop: paddingBar()
  },
  audioContainer:{
    flex:1,
  },
  otherContainer: {
    flex:13,
  }
});

export default MisteriScreen;
