//i4S6u4d5
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, StyleSheet, NetInfo,Platform } from 'react-native';

import MapView from 'react-native-maps';
import Hr from 'react-native-hr';
import GLOBAL from '../Globals/Globals';
import AREAS from '../Map/Areas'

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
    return fetch(`https://pausabe.com/apps/vocationGo/${bisbat}.json`)
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
    this.setState({markers: data.markers});
  }

  componentWillMount() {
    this.getMarkersFromApiAsync(this.nameBisbat(this.props.bisbat));
  }

  render() {
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
              zIndex={999}>
              <MapView.Callout style={{width: 200}}>
              <View >
                <Text style={GLOBAL.litleTitle}>{marker.title}</Text>
                <Hr lineColor='rgba(166, 183, 191, 0.9)' />
                <Text style={GLOBAL.normalText}>{marker.description}</Text>
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
