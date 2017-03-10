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
                <Text style={styles.textDescripcio}>De la mateixa manera que Déu irromp en la vida de Maria a través de la mediació de l'àngel Gabriel per manifestar-li la vocació a la qual ha estat cridada, a nosaltres ens continua cridant per encomanar-nos una missió en el si de l'Església i en el món a través de diverses mediacions. Hem de restar atents per a descobrir la crida que Déu ens fa a servir-lo de diverses maneres en el nostre dia a dia.
Demanem a Maria per tots aquells que estan discernint la seva vocació, aquells que es pregunten per la voluntat del Pare per a les seves vides, perquè estiguin atents a les mediacions que Déu posa en el seu camí per a descobrir la seva vocació.</Text>
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
                <Text style={styles.textDescripcio}>En el silenci del camí cap a la casa de la seva cosina Elisabet, Maria medita sobre el do rebut. En l'ajuda donada a la seva cosina, en el servei desinteressat a qui ho necessita, es troba el sentit de tota vocació. La crida es tradueix sempre en actituds i gestos d'amor i en servei cap als altres, especialment els qui més ho necessiten.
Demanem a Maria pels que viuen la seva vocació donant la seva vida en benefici dels altres. Demanem especialment pels laics que, a través de les seves ocupacions ordinàries, de les diferents professions que exerceixen i de les formes de vida que adopten, fan present l'obra de la creació i de la salvació enmig del món.</Text>
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
                <Text style={styles.textDescripcio}>En el misteri de Betlem, a la nuesa i la humilitat d’un pessebre, es fan presents la gràcia i la misericòrdia de Déu com a do per a tota la humanitat. Davant d'aquest gest d'amor, només cal el silenci de Maria i Josep i el reconeixement de la grandesa de Déu per part dels pastors que vénen a adorar el Nen.
Demanem a Maria per l'Església, per tal que sigui fidel a la seva vocació de transmetre l’evangeli de la salvació a tots els homes.</Text>
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
                <Text style={styles.textDescripcio}>Josep i Maria, fidels a la tradició jueva de presentar el fill primogènit a Déu, van al temple a realitzar la seva ofrena. D'aquesta manera, ens ensenyen una actitud cristiana fonamental: la de presentar i oferir contínuament la pròpia vida, amb les seves aspiracions i il·lusions, els seus goigs i preocupacions, a Déu, el nostre Pare, font i origen de la pròpia existència.
Demanem a Maria pels consagrats i consagrades que s'esforcen constantment per presentar la seva pròpia vida a Déu, per oferir-se en constant oblació al Pare i als germans; per tal que siguin testimoni d'aquesta actitud cristiana de l'oferiment existencial davant de tots els homes.</Text>
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
                <Text style={styles.textDescripcio}>El gest de Jesús està carregat d'una forta connotació simbòlica: enmig dels mestres i doctors de la Llei, comença a explicar-los les Escriptures, en el temple, el lloc de la presència de Déu. Els sacerdots també han de meditar la Paraula de Déu per oferir- nos una paraula actual i rellevant que orienti la nostra vida cristiana a través de la predicació i la guia de la comunitat eclesial.
Demanem a Maria pels sacerdots perquè, atents a la Paraula, sàpiguen transmetre a tots els fidels la bona notícia de la salvació. Demanem-li a la nostra Mare, Maria, que els protegeixi i els faci perseverar amb fidelitat al do de la vocació rebuda.</Text>
              </View>
              <View style={styles.audioContainer}>
                <AudioBar soundName={'goig.mp3'}
                          colorThumb={'rgb(192, 164, 153)'}
                          colorTrack={'rgb(200, 119, 51)'}/>
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
