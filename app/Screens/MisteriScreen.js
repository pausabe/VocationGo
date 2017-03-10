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

class MisteriScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons1.jpg')} style={styles.backgroundImage}>
          <View style={styles.misteriContainer}>
            <View style={styles.titolMisteri}>
              <Text style={styles.textTitolMisteri}>L'ENCARNACIÓ DEL FILL DE DÉU</Text>
            </View>
            <View style={styles.descripcioMisteri}>
              <Text style={styles.textDescripcio}>De la mateixa manera que Déu irromp en la vida de Maria a través de la mediació de l'àngel Gabriel per manifestar-li la vocació a la qual ha estat cridada, a nosaltres ens continua cridant per encomanar-nos una missió en el si de l'Església i en el món a través de diverses mediacions. Hem de restar atents per a descobrir la crida que Déu ens fa a servir-lo de diverses maneres en el nostre dia a dia.
Demanem a Maria per tots aquells que estan discernint la seva vocació, aquells que es pregunten per la voluntat del Pare per a les seves vides, perquè estiguin atents a les mediacions que Déu posa en el seu camí per a descobrir la seva vocació.</Text>
            </View>
            <View style={styles.audioContainer}>
              <AudioBar soundName={'goig.mp3'}
                        colorThumb={'rgb(192, 164, 153)'}
                        colorTrack={'rgb(200, 119, 51)'}/>
            </View>
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

    backgroundColor: 'rgba(66,73,109,0.2)',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(66,73,109,0.4)',
    //opacity: 0.4,
    //paddingVertical: 5,
  },
  descripcioMisteri: {
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
export default MisteriScreen;
