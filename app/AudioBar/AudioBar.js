import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  AppRegistry,
  BackAndroid,
  Dimensions
} from 'react-native';

var Slider = require('react-native-slider');

const Sound = require('react-native-sound');
import Icon from 'react-native-vector-icons/Ionicons'
import Hr from 'react-native-hr';

var lineFlex = 15;
var playFlex = 1;
var duration = 0;
var colorTrack = 'white';
var colorThumb = 'white';

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

    colorTrack = this.props.colorTrack;
    colorThumb = this.props.colorThumb;

    Sound.setCategory('Playback', true); //ios: "Ambient", "SoloAmbient", "Playback", "Record", "PlayAndRecord", "AudioProcessing", "MultiRoute".

    var s = new Sound(`${this.props.soundName}`, Sound.MAIN_BUNDLE, (e) => {
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
        this.setState({playing: false, value: 1.0});
        if(leaving){s.release();}
      }
    }

    this.setTimeSound = (seconds) => {
      s.setCurrentTime(seconds);
    }

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
          <View style={{width: 35, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity hitSlop={{top:35,bottom:35,right:35,left:40}} onPress={this.playSound}>
              <Text style={styles.textbutton}>
                {this.state.playing ?
                  <Icon
                    name="ios-pause"
                    size={30}
                    color="#424242"
                  />
                  :
                  <Icon
                    name="ios-play"
                    size={30}
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
              style={{
                alignItems: 'stretch',
                justifyContent: 'center',
              }}
              trackStyle={{
                height: 2,
                marginTop: -2,
                backgroundColor: '#303030',
              }}
              thumbStyle={{
                width: 10,
                height: 10,
                backgroundColor: colorThumb,
                borderRadius: 10 / 2,
                position: 'absolute',
                top: 20,
                bottom: 0,
              }}
              minimumTrackTintColor={colorTrack}
              thumbTouchSize={{width: 50, height: 40}}
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
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textbutton: {
    color: 'black'
  },
  barLine: {
    flex: 1,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'center',
    //backgroundColor: 'black', opacity: 0.3,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
});

/*
var iosStyles = StyleSheet.create({
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
  }
});

var customStyles2 = StyleSheet.create({
  track: {
    height: 4,
    borderRadius: 2,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    borderColor: '#30a935',
    borderWidth: 2,
  }
});

var customStyles3 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d0d0d0',
  },
  thumb: {
    width: 10,
    height: 30,
    borderRadius: 5,
    backgroundColor: '#eb6e1b',
  }
});

var customStyles4 = StyleSheet.create({
  track: {
    height: 10,
    borderRadius: 4,
    backgroundColor: 'white',


  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#f8a1d6',
    borderColor: '#a4126e',
    borderWidth: 5,
    borderRadius: 10,
    paddingTop: 5
  }
});

var customStyles5 = StyleSheet.create({
  track: {
    height: 18,
    borderRadius: 1,
    backgroundColor: '#d5d8e8',
  },
  thumb: {
    width: 20,
    height: 30,
    borderRadius: 1,
    backgroundColor: '#838486',
  }
});

var customStyles6 = StyleSheet.create({
  track: {
    height: 14,
    borderRadius: 2,
    backgroundColor: 'white',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 2,
    backgroundColor: '#eaeaea',
    borderColor: '#9a9a9a',
    borderWidth: 1,
  }
});

var customStyles7 = StyleSheet.create({
  track: {
    height: 1,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(150, 150, 150, 0.3)',
    borderColor: 'rgba(150, 150, 150, 0.6)',
    borderWidth: 14,
    borderRadius: 15,
  }
});

var customStyles8 = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  track: {
    height: 2,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: colorThumb,
    borderRadius: 10 / 2,
    position: 'absolute',
    top: 20,
    bottom: 0,
  }
});*/


AppRegistry.registerComponent('AudioBar', () => AudioBar);
