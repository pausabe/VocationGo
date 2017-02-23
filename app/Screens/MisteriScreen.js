import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

const Sound = require('react-native-sound');

class MisteriScreen extends Component {
  constructor(props) {
    super(props);

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
      s.play(() => s.release());
    }

    this.stopSound = () => {
      s.stop();
    }

    this.setTimeSound = (seconds) => {
      s.setCurrentTime(seconds);
    }

    this.pauseSound = () => {
      s.pause();
    }

    this.releaseSound = () => {
      s.release();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.playSound}>
          <Text style={styles.button}>Play</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.stopSound}>
          <Text style={styles.button}>Stop</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.setTimeSound.bind(this, 20)}>
          <Text style={styles.button}>Seconds</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.pauseSound}>
          <Text style={styles.button}>Pause</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  feature: {
    padding: 20,
    alignSelf: 'stretch',
  }
});

export default MisteriScreen;
