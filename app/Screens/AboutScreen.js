import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image, TouchableOpacity, BackAndroid, NetInfo, Linking } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import BottomBar from '../BottomBar/BottomBar';
import GrupScreen from '../Screens/GrupsScreen';
import call from 'react-native-phone-call';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class AboutScreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      contacte: {
        nom: "none",
        telefon: "none",
        webSeminaristes: "none"
      },
      isConnected: null,
      internet: null,
    }
  }

  nameBisbat(bisbat){
    if(bisbat === 'Sant Feliu de Llobregat') return 'SantFeliu';
    return bisbat;
  }

  componentWillMount() {
    this.getMarkersFromApiAsync(this.nameBisbat(this.props.bisbat));
  }

  componentDidMount() {
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => { this.setState({isConnected}); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    if(this.state.internet === false){
      this.setState({internet: null});
      this.getMarkersFromApiAsync(this.nameBisbat(this.props.bisbat));
    }
    this.setState({
      isConnected,
    });
  };

  getMarkersFromApiAsync(bisbat) {
    return fetch(`https://pausabe.com/apps/vocationGo/${bisbat}.json`, {
          headers: {
          'Cache-Control': 'no-cache'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.displayData(responseJson);
        this.setState({internet: true});
        return responseJson;
      })
      .catch((error) => {
        this.setState({internet: false});
      });
  }

  displayData(data){
    console.log("data: " + data.contacte.webSeminaristes);
    this.setState({contacte: data.contacte});
  }

  static navigationOptions = {
    title: 'Informació',
  };

  render() {
    console.log("this.state.contacte.webSeminaristes: " + this.state.contacte.webSeminaristes);
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>

          <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
              <View style={GLOBAL.square}>
              <Text style={GLOBAL.bigTitle}>{"GRUP DE PREGÀRIA"}</Text>
              <Text style={GLOBAL.boldBigTitle}>{"PER LES VOCACIONS"}</Text>
              <Text style={GLOBAL.italicNormalText}>{"Pregueu a l'amo dels sembrats que enviï més segadors"}</Text>
              <Text />
              <Text />
              <Text style={GLOBAL.normalText}>{"Ens falten capellans i hem de demanar aquest do. Ajuda'ns a aconseguir-ho formant un grup de pregària."}</Text>
              <Text />
              <Text />
              <Text style={GLOBAL.boldNormalText}>{"A què em comprometo?"}</Text>
              <Text />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 40}}>
                  <Image  source={require('../img/altres/user1.png')}
                          style={styles.logoImage}/>
                </View>
                <View style={{flex:1}}>
                  <Text style={GLOBAL.autoNormalText}>{"A nivell individual: Pregar diàriament per les vocacions. VocationGo t'ofereix el rosari, un misteri i pregàries i textos vocacionals."}</Text>
                </View>
              </View>
              <Text />
              <View style={{flexDirection: 'row'}}>
                <View style={{width: 40}}>
                  <Image  source={require('../img/altres/user2.png')}
                          style={styles.logoImage}/>
                </View>
                <View style={{flex:1}}>
                  <Text style={GLOBAL.autoNormalText}>{"A nivell comunitari: Trobar-se, almenys, un cop al mes amb tots els membres del grup per pregar per les vocacions."}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex:1}}>
                      <Text style={GLOBAL.italicRightNormalText}>{"Troba el teu grup aquí:"}</Text>
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
                  <Text style={GLOBAL.autoNormalText}>{"Pregar per un seminarista: Pregar per un seminarista assignat en el grup."}</Text>
                  {this.state.contacte.webSeminaristes !== 'none'?
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View style={{flex:1}}>
                        <Text style={GLOBAL.italicRightNormalText}>{"Consulta els seminaristes aquí:"}</Text>
                      </View>
                      <View style={{height: 40, paddingLeft:5}}>
                        <TouchableOpacity style={{flex:1}} onPress={() => {Linking.openURL(this.state.contacte.webSeminaristes)}}>
                          <Image  source={require('../img/homeButtons/text.png')}
                                  style={styles.logoImage2}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                    :null
                  }
                </View>
              </View>
              <Text />
              <Text />
              { this.state.contacte.nom !== 'none' ?
                <TouchableOpacity onPress={this.makeCall.bind(this, this.state.contacte.telefon)}>
                  <Text style={GLOBAL.italicNormalText}>{"Per començar un grup nou"}</Text>
                  <Text style={GLOBAL.italicNormalText}>{"contacta amb "}{this.state.contacte.nom}{" "}
                    <Text style={GLOBAL.italicNormalTextBlue}>{this.phoneToShow(this.state.contacte.telefon)}</Text></Text>
                </TouchableOpacity>
                : null
              }
              <Text />
              <Text />
            </View>
          </ScrollView>
        </Image>
        <BottomBar bisbat={this.props.bisbat}/>
      </View>
    )
  }

  phoneToShow(phone){
    if(phone.length !== 9) return phone;
    return phone.charAt(0) + phone.charAt(1) + phone.charAt(2) + " " +
        phone.charAt(3) + phone.charAt(4) + phone.charAt(5) + " " +
        phone.charAt(6) + phone.charAt(7) + phone.charAt(8);
  }

  makeCall(phone){
    if(phone && phone !== "none"){
      const CallArgs = {
        number: phone, // String value with the number to call
        prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call
      }

      try {
        call(CallArgs);
      } catch (e) {
        console.log("error!");
      }
    }
  }

  onButtonPress(idPressed, title, component){
    if(Platform.OS === 'ios'){
      this.props.navigator.push({
        title: title,
        passProps: {title: title, bisbat: this.props.bisbat},
        component: component
      });
    }
    else{
      //const { navigate } = this.props.navigation;
      //navigate(idPressed, {type: title});
      this.props.navigator.push({id: idPressed, index: 1, bisbat: this.props.bisbat})
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

//Un objectiu del pla pastoral dels bisbats de Catalunya és la creació de grups de pregària per les vocacions.
