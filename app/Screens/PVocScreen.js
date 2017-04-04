import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image, BackAndroid } from 'react-native';

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
    const pregaria = "Déu i Pare nostre, que espereu amb els braços oberts els qui s’acosten a Vós, reconeixent la seva debilitat i el seu pecat.\n\nAjudeu els qui Vós elegiu com a ministres del perdó perquè, responent amb generosa entrega, modelin el seu cor amb el signe de la compassió, la comprensió i l’amor.\n\nFeu-los humils ministres vostres, presència de la vostra misericòrdia enmig d’aquest món, perquè hi facin eficaç la força de la vostra  delitat i del vostre amor.\n\nMarqueu la seva vida amb el signe d’una compassió que, no tan sols comprèn el sofriment, sinó que s’apropa per socórrer els qui pateixen.\n\nTransformeu la seva persona en mans que acullen i acaricien per ser «misericordiosos com el Pare».\n\nPer Crist, el vostre Fill, nostre Senyor, que es va entregar per la nostra salvació. Amén.";

    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons7.jpg')} style={styles.backgroundImage}>
          <ScrollView automaticallyAdjustContentInsets={false} >
            <View style={styles.square}>
              <Text style={styles.title}>DIA DEL SEMINARI 2016</Text>
              <Text />
              <Text style={styles.normalText}>{pregaria}</Text>
            </View>
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
    flexDirection: 'column',
    //flex: 1,
    padding: 10,
    backgroundColor: 'rgba(230, 242, 255, 0.4)',
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
    color: 'rgb(0, 26, 51)',
    fontWeight: '600',
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
export default PVocScreen;
