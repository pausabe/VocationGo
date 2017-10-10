import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, Image,
  Platform, TouchableOpacity, BackAndroid, InteractionManager } from 'react-native';

import GLOBAL from '../Globals/Globals';

import CustomTransitions from '../CustomTransitions/CustomTransitions';
import RosariScreen from '../Screens/RosariScreen'
import GrupScreen from '../Screens/GrupsScreen'
import PVocScreen from '../Screens/PVocScreen'
import TVocScreen from '../Screens/TVocScreen'
import AboutScreen from '../Screens/AboutScreen'
import SettingsManager from '../Settings/SettingsManager';
import BottomBar from '../BottomBar/BottomBar'
import EventEmitter from 'EventEmitter';
import SplashScreen from 'react-native-splash-screen';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bisbat: 'none'
    }

    SettingsManager.getSettingDiocesis((r) => {
        console.log("Diòcesi HOME: " + r);
        this.setState({bisbat: r});
    });
  }

  /*static navigationOptions = {
    title: 'VocationGo',
    header: {
      style: { backgroundColor: 'red' }
    },
  };*/

  componentDidMount() {
    if(Platform.OS==='android'){
      setTimeout(() => { SplashScreen.hide(); }, 100);
    }
    else{
      SplashScreen.hide();
    }
    this.props.events.addListener('myEvent', this.onOkEvent.bind(this));
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backHandler.bind(this));
  }
  backHandler(){
    if(this.props.navigator.getCurrentRoutes().length>1){
      this.props.navigator.pop();
      return true;
    }
    return false;
  }
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backHandler.bind(this));
  }

  render() {
    console.log("home render");
    return (
      <View style={styles.container}>
        <Image width={null} height={null} source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>
          <View style={{flex: 1, flexDirection: 'row', paddingHorizontal: 20}}>
            <View style={{flex: 1, flexDirection: 'column'}}>
              <View style={styles.button} >
                <TouchableOpacity
                onPress={this.onButtonPress.bind(this, "rosari", "Rosari", RosariScreen)}
                style={styles.imageContainer}>
                  <Image  width={null} height={null}
                          source={require('../img/homeButtons/rosari.png')}
                          style={styles.homeImage}/>
                  <Text style={styles.buttonText}>Rosari</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                onPress={this.onButtonPress.bind(this, "pvoc", "Pregària", PVocScreen)}
                style={styles.imageContainer}>
                  <Image source={require('../img/homeButtons/pregar.png')}
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
              onPress={this.onButtonPress.bind(this, "misteri", "Misteri", RosariScreen)}
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
                <Text style={styles.buttonText}>Text</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
              onPress={this.onButtonPress.bind(this, "grup", "Grup de pregària", GrupScreen)}
              style={styles.imageContainer}>
                <Image  source={require('../img/homeButtons/mapa.png')}
                        style={styles.homeImage}/>
                <Text style={styles.buttonText}>Grups</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
        </Image>
        <BottomBar bisbat={this.state.bisbat}/>
      </View>
    )
  }

  onButtonPress(idPressed, title, component){
    if(Platform.OS === 'ios'){
      this.props.navigator.push({
        title: title,
        passProps: {title: title, bisbat: this.state.bisbat},
        component: component
      });
    }
    else{
      //const { navigate } = this.props.navigation;
      //navigate(idPressed, {type: title});
      this.props.navigator.push({id: idPressed, index: 1, bisbat: this.state.bisbat})
    }
  }

  onOkEvent(){
    SettingsManager.getSettingDiocesis((r) => {
        console.log("Diòcesi HOME EVENT: " + r);
        this.setState({bisbat: r});
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: paddingBar()
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    padding: 15
  },
  homeImage: {
    flex: 1,
    width: null,
    height: null,
    tintColor: GLOBAL.buttonColor,
    resizeMode: 'contain',
  },
  imageContainer: {
    flex:1,
  },
  buttonText: {
    textAlign: 'center',
    color: GLOBAL.buttonColor,
    fontSize: 16,
    fontWeight: '400'
  },

})
