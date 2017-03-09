import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  AppRegistry,
  BackAndroid,
  Dimensions,
  Slider
} from 'react-native';

const Sound = require('react-native-sound');
import Icon from 'react-native-vector-icons/Ionicons'
import Hr from 'react-native-hr';

var lineFlex = 15;
var playFlex = 1;
var duration = 0;

function getPlaySize(){
  let {width, height} = Dimensions.get('window');
  return width/(lineFlex + playFlex)*playFlex;
}

export default class AudioBar extends Component {
  componentWillUnmount(){
    this.stopSound(true);
  }

  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      value: 0,
      duration: 0,
    }

    Sound.setCategory('Playback', true); //ios: "Ambient", "SoloAmbient", "Playback", "Record", "PlayAndRecord", "AudioProcessing", "MultiRoute".

    var s = new Sound('goig.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
          return;
        }
        this.setState({duration: s.getDuration()});
    });

    this.playSound = () => {
      if(this.state.playing === false){
        this.setState({playing: true});
        s.play(() => this.stopSound(false));
        s.setCurrentTime(this.state.value*this.state.duration)
      }
      else{
        this.setState({playing: false});
        s.pause();
      }
    }

    this.stopSound = (leaving) => {
      if(this.state.playing === true){
        s.stop();
        this.setState({playing: false});
        if(leaving){s.release();}
      }
    }

    this.setTimeSound = (seconds) => {
      s.setCurrentTime(seconds);
    }

    /*this.getCurrentTime = () => {
      var s = 0;
      if(this.state.playing){
        s.getCurrentTime((seconds) => console.log('at ' + seconds));
      }
      return s;
    }*/

    // Toggle the state every second
    setInterval(() => {
      if(this.state.playing){
        s.getCurrentTime((seconds) =>
                        this.setState({ value: seconds/s.getDuration() })
                        );
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.columnContainer}>
          <View style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={this.playSound}>
              <Text style={styles.textbutton}>
                {this.state.playing ?
                  <Icon
                    name="ios-pause"
                    size={35}
                    color="#424242"
                  />
                  :
                  <Icon
                    name="ios-play"
                    size={35}
                    color="#424242"
                  />
                }
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.barLine}>
          <Slider
            value={this.state.value}
            onValueChange={(value) => this.moveBar(value)}
            step={0.1}
          />
          </View>
        </View>
      </View>
    )
  }
  moveBar(v){
    this.setState({value: v});
    this.setTimeSound(v*this.state.duration);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 5,
    borderRadius: 15,
    backgroundColor: 'rgba(63,127,191,0.2)',
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textbutton: {
    color: 'black'
  },
  barLine: {
    flex: lineFlex,
    justifyContent: 'center'
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
    slider: {
    height: 10,
    margin: 10,
  },
});

AppRegistry.registerComponent('AudioBar', () => AudioBar);
