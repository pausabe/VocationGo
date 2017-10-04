import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image, TouchableOpacity, BackAndroid } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import BottomBar from '../BottomBar/BottomBar'
import GrupScreen from '../Screens/GrupsScreen'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class AboutScreen extends Component {
  static navigationOptions = {
    title: 'Informació',
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>

          <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
              <View style={GLOBAL.square}>
              <Text style={GLOBAL.bigTitle}>GRUP DE PREGÀRIA</Text>
              <Text style={GLOBAL.boldBigTitle}>PER LES VOCACIONS</Text>
              <Text style={GLOBAL.italicNormalText}>Pregueu a l'amo dels sembrats que enviï més segadors</Text>
              <Text />
              <Text />
              <Text style={GLOBAL.normalText}>Un objectiu del pla pastoral del bisbat de Terrassa és la creació de grups de pregària per les vocacions. Ens falten capellans i hem de demanar aquest do. Ajuda'ns a aconseguir-ho formant un grup de pregària.</Text>
              <Text />
              <Text />
              <Text style={GLOBAL.boldNormalText}>A què em comprometo?</Text>
              <Text />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 40}}>
                  <Image  source={require('../img/altres/user1.png')}
                          style={styles.logoImage}/>
                </View>
                <View style={{flex:1}}>
                  <Text style={GLOBAL.autoNormalText}>A nivell individual: Pregar diàriament per les vocacions. VocationGo t'ofereix el rosari, un misteri i pregàries i textos vocacionals.</Text>
                </View>
              </View>
              <Text />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 40}}>
                  <Image  source={require('../img/altres/user2.png')}
                          style={styles.logoImage}/>
                </View>
                <View style={{flex:1}}>
                  <Text style={GLOBAL.autoNormalText}>A nivell comunitari: Trobar-se, almenys, un cop al mes amb tots els membres del grup per pregar per les vocacions.</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex:1}}>
                      <Text style={GLOBAL.italicRightNormalText}>Troba el teu grup aquí:</Text>
                    </View>
                    <View style={{height: 40, paddingLeft:5}}>
                      <TouchableOpacity style={{flex:1}} onPress={this.onButtonPress.bind(this, "grup", "Grup Pregària", GrupScreen)}>
                        <Image  source={require('../img/homeButtons/mapa.png')}
                                style={styles.logoImage2}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <Text />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 40}}>
                  <Image  source={require('../img/altres/user4.png')}
                          style={styles.logoImage}/>
                </View>
                <View style={{flex:1}}>
                  <Text style={GLOBAL.autoNormalText}>Pregar per un seminarista: Pregar per un seminarista assignat en el grup.</Text>
                </View>
              </View>
              <Text />
              <Text />
              <Text style={GLOBAL.italicNormalText}>Per començar un grup nou</Text>
              <Text style={GLOBAL.italicNormalText}>contacta amb Mn Guillem 660 847 213</Text>
              <Text />
              <Text />
            </View>
          </ScrollView>
        </Image>
        <BottomBar bisbat={this.props.bisbat}/>
      </View>
    )
  }

  onButtonPress(idPressed, title, component){
    if(Platform.OS === 'ios'){
      this.props.navigator.push({
        title: title,
        passProps: {title: title},
        component: component
      });
    }
    else{
      //const { navigate } = this.props.navigation;
      //navigate(idPressed, {type: title});
      this.props.navigator.push({id: idPressed, index: 1})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingBar()
  },
  logoImage:{
    flex: 1,
    marginRight: 5,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  logoImage2:{
    flex: 1,
    width: 40,
    height: 40,
    tintColor: GLOBAL.barColor,
    resizeMode: 'contain',
  },
});
export default AboutScreen;
