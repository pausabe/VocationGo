import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  AppRegistry,
  BackAndroid
} from 'react-native';

const Sound = require('react-native-sound');

export default class AudioBar extends Component {
  componentWillMount() {
    /*BackAndroid.addEventListener('hardwareBackPress', () => {
      this.stopSound();
    });*/
  }

  componentWillUnmount(){
    this.stopSound();
  }

  constructor(props) {
    super(props);

    this.state = {
      playing: false
    }

    Sound.setCategory('Playback', true);

    var s = new Sound('goig.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
          return;
        }
        console.log('duration', s.getDuration());
    });

    this.playSound = () => {
      //not if already playing
      if(this.state.playing === false){
        this.setState({playing: true});
        s.play(() => s.release());
      }
      else{
        this.setState({playing: false});
        s.pause();
      }
    }

    this.stopSound = () => {
      if(this.state.playing === true){
        s.stop();
        s.release();
      }
    }

    this.setTimeSound = (seconds) => {
      if(this.state.playing === true){
        s.setCurrentTime(seconds);
      }
    }
  }

  render() {
    return (
      <View style={styles.backgroundBox}>
        <TouchableOpacity onPress={this.playSound}>
          <Text style={styles.textbutton}>
            {this.state.playing ? 'Pause' : 'Play'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setTimeSound.bind(this, 20)}>
          <Text style={styles.textbutton}>Seconds</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundBox: {
    padding: 10,
    backgroundColor: '#cce5ff'
  },
  textbutton: {
    color: '#000000'
  }
});

AppRegistry.registerComponent('AudioBar', () => AudioBar);
