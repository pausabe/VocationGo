//i4S6u4d5
import React, { Component, PropTypes } from 'react';
import { AppRegistry, TouchableOpacity, View, Text, StyleSheet, NetInfo,Platform } from 'react-native';

import MapView from 'react-native-maps';
import Hr from 'react-native-hr';
import GLOBAL from '../Globals/Globals';
import AREAS from '../Map/Areas';
import call from 'react-native-phone-call';

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 0;
}

const internetMessage = "És necessari tenir internet.\nComprova la connexió";

export default class GrupsMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialRegion: this.getInitialRegion(props.bisbat),
      area: this.getArea(props.bisbat),
      markers: [],
      isConnected: null,
      internet: null,
    }
  }

  getArea(bisbat){
    switch (bisbat) {
      case 'Barcelona': return(AREAS.Barcelona.coordinates); break;
      case 'Girona': return(AREAS.Girona.coordinates); break;
      case 'Lleida': return(AREAS.Lleida.coordinates); break;
      case 'Mallorca': return(AREAS.Mallorca.coordinates); break;
      case 'Sant Feliu de Llobregat': return(AREAS.SantFeliu.coordinates); break;
      case 'Solsona': return(AREAS.Solsona.coordinates); break;
      case 'Tarragona': return(AREAS.Tarragona.coordinates); break;
      case 'Terrassa': return(AREAS.Terrassa.coordinates); break;
      case 'Tortosa': return(AREAS.Tortosa.coordinates); break;
      case 'Urgell': return(AREAS.Urgell.coordinates); break;
      case 'Vic': return(AREAS.Vic.coordinates); break;
    }
  }

  getInitialRegion(bisbat){
    switch (bisbat) {
      case 'Barcelona': return(AREAS.Barcelona.center); break;
      case 'Girona': return(AREAS.Girona.center); break;
      case 'Lleida': return(AREAS.Lleida.center); break;
      case 'Mallorca': return(AREAS.Mallorca.center); break;
      case 'Sant Feliu de Llobregat': return(AREAS.SantFeliu.center); break;
      case 'Solsona': return(AREAS.Solsona.center); break;
      case 'Tarragona': return(AREAS.Tarragona.center); break;
      case 'Terrassa': return(AREAS.Terrassa.center); break;
      case 'Tortosa': return(AREAS.Tortosa.center); break;
      case 'Urgell': return(AREAS.Urgell.center); break;
      case 'Vic': return(AREAS.Vic.center); break;
    }
  }

  nameBisbat(bisbat){
    if(bisbat === 'Sant Feliu de Llobregat') return 'SantFeliu';
    return bisbat;
  }

  componentDidMount() {
    console.log("appleConnectLog. componentDidMount");
    NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
          console.log("appleConnectLog. isConnected: " + isConnected);
          this.setState({isConnected});
        }
    );
  }

  componentWillUnmount() {
    console.log("appleConnectLog. componentWillUnmount");
    NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
    );
  }

  _handleConnectivityChange = (isConnected) => {
    console.log("appleConnectLog. _handleConnectivityChange");
    if(this.state.internet === false){
      console.log("appleConnectLog. no this.state.internet -> internet = null & getMarkersFromApiAsync");
      this.setState({internet: null});
      this.getMarkersFromApiAsync(this.nameBisbat(this.props.bisbat));
    }
    this.setState({
      isConnected,
    });
  };

  getMarkersFromApiAsync(bisbat) {
    console.log("appleConnectLog. getMarkersFromApiAsync");
    return fetch(`https://pausabe.com/apps/vocationGo/${bisbat}.json`, {
        headers: {
        'Cache-Control': 'no-cache'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("appleConnectLog. internet = true & displayData");
        this.displayData(responseJson);
        this.setState({internet: true});
        return responseJson;
      })
      .catch((error) => {
        console.log("appleConnectLog. error: "+error);
        this.setState({internet: false});
      });
  }

  displayData(data){
    console.log("appleConnectLog. displayData");
    if(data.markers.length !== 0){
      console.log("appleConnectLog. there are markers: " + data.markers[0].description);
    }
    else{
      console.log("appleConnectLog. there are no markers");
    }
    this.setState({markers: data.markers});
  }

  componentWillMount() {
    console.log("appleConnectLog. componentWillMount -> getMarkersFromApiAsync");
    var v = this.getMarkersFromApiAsync(this.nameBisbat(this.props.bisbat));
  }

  render() {
    console.log("appleConnectLog. render");
    return (
      <View style={styles.container}>
        <MapView
          style={styles.maps}
          initialRegion={this.state.initialRegion}
        >

          <MapView.Polygon
            strokeColor={GLOBAL.mapColor}
            coordinates={this.state.area}
            fillColor={GLOBAL.mapColorTransparent}
          />

          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={GLOBAL.mapColor}
              zIndex={999}
              onCalloutPress={this.makeCall.bind(this, marker.contact.phone)}>
              <MapView.Callout width={200} >
              <View >
                <Text style={GLOBAL.litleTitle}>{marker.title}</Text>
                <Hr lineColor='rgba(166, 183, 191, 0.9)' />
                {marker.description !== "none"?
                    <Text style={GLOBAL.normalText}>{marker.description}</Text>
                  : null
                }
                {marker.contact.name !== "none"?
                  <View>
                    <Hr lineColor='rgba(166, 183, 191, 0.9)' />
                    <TouchableOpacity >
                      <Text style={GLOBAL.normalText}>{"Contacta amb "}{marker.contact.name}{": "}
                          <Text style={GLOBAL.normalTextBlue}>{this.phoneToShow(marker.contact.phone)}</Text></Text>
                    </TouchableOpacity>
                  </View>
                  : null
                }
              </View>
            </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
        {this.state.internet === false?
          <View style={styles.internetState}>
            <Text style={styles.textInState}>{internetMessage}</Text>
          </View>
          : null
        }
        {this.state.internet === null?
          <View style={styles.internetState}>
            <Text style={styles.textInState}>Carregant informació...</Text>
          </View>
          : null
        }
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
        console.log("appleConnectLog. error call");
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: paddingBar()
  },
  internetState: {
    //height: 45,
    backgroundColor: 'rgba(0, 52, 100, 0.8)',
  },
  textInState:{
    flexWrap: 'wrap',
    textAlign: 'center',
    color: 'white',
    fontSize: GLOBAL.normalTextSize,
    //fontWeight: '600',
  },
  maps: {
    ...StyleSheet.absoluteFillObject,
  }
})

AppRegistry.registerComponent('GrupsMap', () => GrupsMap);
