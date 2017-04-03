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

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons3.jpg')} style={styles.backgroundImage}>
          <View >
          <Text style={styles.title1}>GRUP DE PREGÀRIA</Text>
          <Text style={styles.title2}>PER LES VOCACIONS</Text>
          <Text style={styles.italicText}>Pregueu a l'amo dels sembrats que enviï més segadors</Text>
          <Text />
          <Text />
          </View>
          <ScrollView automaticallyAdjustContentInsets={false}style={styles.square}>
            <Text style={styles.normalText}>Un objectiu del pla pastoral del bisbat de Terrassa és la creació de grups de pregària per les vocacions. Ens falten capellans i hem de demanar aquest do. Ajuda'ns a aconseguir-ho formant un grup de pregària.</Text>
            <Text />
            <Text />
            <Text style={styles.boldText}>A què em comprometo?</Text>
            <Text />
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 40}}>
                <Image  source={require('../img/altres/user1.png')}
                        style={styles.logoImage}/>
              </View>
              <View style={{flex:1}}>
                <Text style={styles.justText}>A nivell individual: Pregar diàriament per les vocacions. VocationGo t'ofereix el rosari, un misteri i pregàries i textos vocacionls.</Text>
              </View>
            </View>
            <Text />
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 40}}>
                <Image  source={require('../img/altres/user2.png')}
                        style={styles.logoImage}/>
              </View>
              <View style={{flex:1}}>
                <Text style={styles.justText}>A nivell comunitari: Trobar-se, almenys, un cop al mes amb tots els membres del grup per pregar per les vocacions.</Text>
              </View>
            </View>
            <Text />
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 40}}>
                <Image  source={require('../img/altres/user4.png')}
                        style={styles.logoImage}/>
              </View>
              <View style={{flex:1}}>
                <Text style={styles.justText}>Pregar per un seminarista: Pregar per un seminarista assignat en el grup.</Text>
              </View>
            </View>
            <Text />
            <Text />
            <Text style={styles.italicText}>Per començar un grup nou</Text>
            <Text style={styles.italicText}>contacta amb Mn Guillem 600 847 213</Text>
            <Text />
            <Text />
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
    paddingTop: paddingBar()
  },
  backgroundImage: {
   flex: 1,
   backgroundColor: 'transparent',
   width: null,
   height: null,
   resizeMode: 'cover',
   padding: 15,
  },
  square: {
    //flexDirection: 'column',
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(230, 242, 255, 0.2)',
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
  italicTextWhite: {
    color: 'white',
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
    marginRight: 5,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
export default AboutScreen;
