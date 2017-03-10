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

class TVocScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons1.jpg')} style={styles.backgroundImage}>
          <View style={styles.misteriContainer}>
            <Text>«L'esperit de comunió es fonamenta en el fet que l'Església, com a poble convocat per Crist, està cridada a viure, com ho ha fet des dels seus orígens, una forta experiència de vida comunitària. Convé considerar que, rebut l'orde del presbiterat, els sacerdots estan units entre ells per l'íntima fraternitat sacramental i formen un presbiteri especial a la diòcesi al servei del qual es consagren sota el propi bisbe».

Carta Pastoral Sr. Bisbe
            </Text>
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
export default TVocScreen;
