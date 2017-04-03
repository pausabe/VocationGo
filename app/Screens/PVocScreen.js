import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import BottomBar from '../BottomBar/BottomBar'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 0;
  }
  return 54;
}

class PVocScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons3.jpg')} style={styles.backgroundImage}>
          <ScrollView automaticallyAdjustContentInsets={false} style={styles.square}>
            <Text style={styles.normalText}>Un objectiu del pla pastoral del bisbat de Terrassa és la creació de grups de pregària per les vocacions. Ens falten capellans i hem de demanar aquest do. Ajuda'ns a aconseguir-ho formant un grup de pregària.</Text>
          </ScrollView>
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
  },
  backgroundImage: {
   flex: 1,
   backgroundColor: 'transparent',
   width: null,
   height: null,
   resizeMode: 'cover',
   padding: 10,
   paddingTop:100,
 },square: {
   //flexDirection: 'column',
   //flex: 1,
   height: 200,
   padding: 10,
   backgroundColor: 'rgba(230, 242, 255, 0.3)',
 },
 title1:{
   textAlign: 'center',
   fontSize: 30,
   color: 'rgb(0, 26, 51)',
   fontWeight: '600',
 },
 title2:{
   textAlign: 'center',
   fontSize: 30,
   color: 'rgb(0, 26, 51)',
   fontWeight: '800',
 },
 italicText: {
   color: 'rgb(0, 25, 51)',
   fontSize: 13,
   fontStyle: 'italic',
   textAlign: 'center'
 },
 normalText: {
   flexWrap: 'wrap',
   color: 'rgb(0, 25, 51)',
   fontSize: 16,
   textAlign: 'center'
 },
 justText: {
   flexWrap: 'wrap',
   color: 'rgb(0, 25, 51)',
   fontSize: 16,
   textAlign: 'center'
 },
 boldText: {
   flexWrap: 'wrap',
   color: 'rgb(0, 25, 51)',
   fontSize: 16,
   fontWeight: 'bold',
   textAlign: 'center'
 },
 logoImage:{
   flex: 1,
   paddingRight: 5,
   width: null,
   height: null,
   resizeMode: 'contain',
 },
});
export default PVocScreen;
