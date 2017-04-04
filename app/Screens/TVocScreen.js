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
    const text = "La cercanía entre dos personas siempre significa entrega, generosi- dad y donación de vida. En las reflexiones filosóficas de los clási- cos griegos nunca se habla de la realidad de la entrega; esto no nos debe extrañar, porque en el camino de autenticidad no se plantea un diálogo de tú a tú, sino que un ir a uno mismo, en una especie de exaltación personal.\n\nJesús nos ha enseñado a entregarnos como él se entrega a no- sotros, «me amó y se entregó a la muerte por mí»1, «este es mi cuer- po entregado por vosotros»2 : Jesús nunca les dijo a los apóstoles «conócete a ti mismo», sino «conoce mi amor».\n\nLa vida cristiana no es ordenar la vida al modo de Dios des- de lo que a mi me parece, es una relación con una persona viva, es una existencia iluminada con la riqueza de Dios. La vida humana se hace mucho más humana aunque escape a nuestra inteligencia, porque se hace de Dios; «muy divino, pero muy humano»: “¿Hay algo más cercano al hombre que la ternura del amor de Dios? [...] muchas veces «muy divino» significa «muy abstracto». Pero ¿no es lo divino lo que se nos revela en Cristo? ¿Qué cosa más humana que el amor de Cristo?”3.";

      return (
      <View style={styles.container}>
        <Image source={require('../img/bg/fons7.jpg')} style={styles.backgroundImage}>

          <ScrollView automaticallyAdjustContentInsets={false} >
            <View style={styles.square}>
            <Text style={styles.title}>CERCA DE DIOS Y DE LOS HERMANOS</Text>
            <Text />
              <Text style={styles.normalText}>{text}</Text>
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
    textAlign: 'justify'
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
export default TVocScreen;
