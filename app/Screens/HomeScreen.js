import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image,
  Platform, TouchableOpacity, StatusBar, BackAndroid } from 'react-native';

import GLOBAL from '../Globals/Globals';

import CustomTransitions from '../CustomTransitions/CustomTransitions';
import RosariScreen from '../Screens/RosariScreen'
import MisteriScreen from '../Screens/MisteriScreen'
import GrupScreen from '../Screens/GrupsScreen'
import PVocScreen from '../Screens/PVocScreen'
import TVocScreen from '../Screens/TVocScreen'
import AboutScreen from '../Screens/AboutScreen'

var heightBottomBar = 45;

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

export default class HomeScreen extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#2c3e50"
        />
        <Image source={require('../img/bg/fons1.jpg')} style={styles.backgroundImage}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.button} >
                <TouchableOpacity
                onPress={this.onButtonPress.bind(this, "rosari", "Rosari", RosariScreen)}
                style={styles.imageContainer}>
                  <Image  source={require('../img/homeButtons/rosari.png')}
                          style={styles.homeImage}/>
                  <Text style={styles.buttonText}>Rosari</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                onPress={this.onButtonPress.bind(this, "pvoc", "Pregària", PVocScreen)}
                style={styles.imageContainer}>
                  <Image  source={require('../img/homeButtons/pregar.png')}
                          style={styles.homeImage}/>
                  <Text style={styles.buttonText}>Pregària</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                onPress={this.onButtonPress.bind(this, "about", "Informació", AboutScreen)}
                style={styles.imageContainer}>
                  <Image  source={require('../img/homeButtons/info.png')}
                          style={styles.homeImage}/>
                  <Text style={styles.buttonText}>Informació</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex: 1, flexDirection: 'column'}} >
            <View style={styles.button}>
              <TouchableOpacity
              onPress={this.onButtonPress.bind(this, "misteri", "Misteri", MisteriScreen)}
              style={styles.imageContainer}>
                <Image  source={require('../img/homeButtons/misteri.png')}
                        style={styles.homeImage}/>
                <Text style={styles.buttonText}>Misteri</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
              onPress={this.onButtonPress.bind(this, "tvoc", "Text Vocacional", TVocScreen)}
              style={styles.imageContainer}>
                <Image  source={require('../img/homeButtons/text.png')}
                        style={styles.homeImage}/>
                <Text style={styles.buttonText}>Text Vocacional</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
              onPress={this.onButtonPress.bind(this, "grup", "Grup Pregària", GrupScreen)}
              style={styles.imageContainer}>
                <Image  source={require('../img/homeButtons/mapa.png')}
                        style={styles.homeImage}/>
                <Text style={styles.buttonText}>Grup Pregària</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </Image>
        <View style={styles.bottomBar}>
          <View style={{flex:1}}>
            <Text style={styles.bottomBarText}>Seminari de Terrassa</Text>
          </View>
          <View style={{width: heightBottomBar}}>
            <Image  source={require('../img/altres/logo-seminari.png')}
                    style={styles.logoImage}/>
          </View>
        </View>
      </View>
    )
  }

  onButtonPress(idPressed, title, component){
    if(Platform.OS === 'ios'){
      this.props.navigator.push({
        title: title,
        component: component
      });
    }
    else{
      this.props.navigator.push({id: idPressed, index: 1})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingBar()
  },
  backgroundImage: {
   flex: 1,
   backgroundColor: 'transparent',
   width: null,
   height: null,
   resizeMode: 'cover',
   padding: 20
 },
  button: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'rgba(63,127,191,0.2)',
    padding: 10
  },
  homeImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex:1,
  },
  buttonText: {
    textAlign: 'center',
    color: GLOBAL.barColor,
    fontSize: 16,
    fontWeight: '400'
  },
  bottomBar: {
    alignItems: 'flex-end', //text al terra
    height: heightBottomBar,
    backgroundColor: GLOBAL.barColor,
    flexDirection: 'row',
    padding: 5
  },
  bottomBarText: {
    textAlign: 'right', //text a la dreta
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },
  logoImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 30,
    resizeMode: 'contain',
  }
})
