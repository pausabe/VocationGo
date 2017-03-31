import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import BottomBar from '../BottomBar/BottomBar'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class PVocScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons1.jpg')} style={styles.backgroundImage}>
          <View style={styles.misteriContainer}>
            <Text>Us preguem Senyor, per les famílies cristianes, perquè siguin "església domèstica" on puguin néixer futures vocacions per a l'Església universal.
            </Text>
          </View>
          <View style={styles.audioContainer}>
            <AudioBar soundName={'goig.mp3'}
                      colorThumb={'rgb(204, 68, 0)'}
                      colorTrack={'rgb(255, 119, 51)'}/>
          </View>
        </Image>
        <BottomBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingBar()
  },
  backgroundImage: {
   flex: 1,
   backgroundColor: 'transparent',
   width: null,
   height: null,
   resizeMode: 'cover',
   paddingHorizontal: 10,

  },
  audioContainer:{
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(192, 164, 153, 0.9)',
    backgroundColor: 'rgba(96, 83, 79, 0.32)',
    //backgroundColor: 'black',
    //opacity: 0.4
  },
  misteriContainer: {
    flex:1,
    //backgroundColor: 'red',
    //opacity: 0.3,
    paddingVertical: 15,
  },
  titolMisteri: {
    height: 30,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'rgba(66,73,109,0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(66,73,109,0.4)',
    //opacity: 0.4,
    //paddingVertical: 5,
  },
  descripcioMisteri: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    //backgroundColor: 'blue',
    //opacity: 0.4
  },
  textDescripcio: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '300',
  },
  textTitolMisteri: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  }
});
export default PVocScreen;
