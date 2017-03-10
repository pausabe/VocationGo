import React, { Component, PropTypes } from 'react';
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

export default class RosariScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons1.jpg')} style={styles.backgroundImage}>
          <ScrollView>
            <View style={styles.misteriContainer}>
              <View style={styles.titolMisteri}>
                <Text style={styles.textTitolMisteri}>1. L'ENCARNACIÓ DEL FILL DE DÉU</Text>
              </View>
              <View style={styles.descripcioMisteri}>
                <Text style={styles.textDescripcio}>L’àngel li digué: No tinguis por, Maria. Déu t’ha concedit la seva gràcia. Tindràs un fill i li posaràs el nom de Jesús... Maria va dir: Sóc l’esclava del Senyor: que es compleixin en mi les teves paraules. I l’àngel es va retirar. (Cf. Lc 1, 26-38)</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'goig.mp3'}
                          colorThumb={'rgb(204, 68, 0)'}
                          colorTrack={'rgb(255, 119, 51)'}/>
              </View>
            </View>
            <View style={styles.misteriContainer}>
              <View style={styles.titolMisteri}>
                <Text style={styles.textTitolMisteri}>2. MARIA VISITA LA SEVA COSINA ELISABET</Text>
              </View>
              <View style={styles.descripcioMisteri}>
                <Text style={styles.textDescripcio}>Quan Elisabet sentí la salutació de Maria, l’infant va saltar dins les seves entranyes, i Elisabet quedà plena de l’Esperit Sant. I cridà amb totes les forces: Ets beneïda entre totes les dones i és beneït el fruit de les teves  entranyes!... Feliç tu que has cregut: allò que el Senyor t’ha anunciat es complirà! (Cf. Lc 1, 39-45)</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'goig.mp3'}
                          colorThumb={'rgb(204, 68, 0)'}
                          colorTrack={'rgb(255, 119, 51)'}/>
              </View>
            </View>
            <View style={styles.misteriContainer}>
              <View style={styles.titolMisteri}>
                <Text style={styles.textTitolMisteri}>3. EL NAIXEMENT DE JESÚS A BETLEM</Text>
              </View>
              <View style={styles.descripcioMisteri}>
                <Text style={styles.textDescripcio}>L’àngel digué als pastors: No tingueu por. Us anuncio una bona nova que portarà a tot el poble una gran alegria: avui, a la ciutat de David, us ha nascut un salvador, que és el Messies, el Senyor. (Cf. Lc 2, 1-19)</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'dolor.mp3'}
                          colorThumb={'rgb(204, 68, 0)'}
                          colorTrack={'rgb(255, 119, 51)'}/>
              </View>
            </View>
            <View style={styles.misteriContainer}>
              <View style={styles.titolMisteri}>
                <Text style={styles.textTitolMisteri}>4. LA PRESENTACIÓ DE JESÚS AL TEMPLE</Text>
              </View>
              <View style={styles.descripcioMisteri}>
                <Text style={styles.textDescripcio}>Simeó prengué l’Infant en braços i beneí Déu dient: Ara, Senyor, deixa que el teu servent se’n vagi en pau, com li havies promès... Simeó va beneir-los i digué a Maria, la seva mare: Aquest infant serà motiu que a Israel molts caiguin i molts d’altres s’aixequin; serà una senyera combatuda, i a tu mateixa una espasa et traspassarà l’ànima. (Cf. Lc 2, 22-35)</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'dolor.mp3'}
                          colorThumb={'rgb(204, 68, 0)'}
                          colorTrack={'rgb(255, 119, 51)'}/>
              </View>
            </View>
            <View style={styles.misteriContainer}>
              <View style={styles.titolMisteri}>
                <Text style={styles.textTitolMisteri}>5. JESÚS PREDUT I TROBAT AL TEMPLE</Text>
              </View>
              <View style={styles.descripcioMisteri}>
                <Text style={styles.textDescripcio}>Al cap de tres dies el van trobar al temple, assegut entre els mestres de la Llei En veure’l allà, la seva mare li digué: Fill meu, per què t’has portat així amb nosaltres? El teu pare i jo et buscàvem amb ànsia. Ell els respongué: Per què em buscàveu? No sabíeu que jo havia d’estar a casa del meu Pare? (Cf. Lc 2, 41-52)</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'goig.mp3'}
                          colorThumb={'rgb(204, 68, 0)'}
                          colorTrack={'rgb(255, 119, 51)'}/>
              </View>
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
   paddingHorizontal: 10,

  },
  audioContainer:{
    height: 30,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 85, 0, 0.2)',
    backgroundColor: 'rgba(255, 119, 51, 0.2)',
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
    backgroundColor: 'rgba(63,127,191,0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(63,127,191,0.4)',
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
