import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 0;
  }
  return 54;
}

var Slider = require('react-native-slider');

export default class AboutScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playing: false,
      value: 0,
      duration: 0,
    }
  }
  render() {
    return (
      <View style={styles.barLine}>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.moveBar(value)}

          minimumTrackTintColor='#1fb28a'
          maximumTrackTintColor='#d3d3d3'
          thumbTintColor='#1a9274'
        />
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
    flex: 15,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  }
});

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
    height: 20,
  },
  track: {
    height: 2,
    backgroundColor: '#303030',
  },
  thumb: {
    width: 10,
    height: 10,
    backgroundColor: '#31a4db',
    borderRadius: 10 / 2
  }
});

/*
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
*/
