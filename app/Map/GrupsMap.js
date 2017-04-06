//i4S6u4d5
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, StyleSheet, NetInfo,Platform } from 'react-native';

import MapView from 'react-native-maps';
import Hr from 'react-native-hr';
import GLOBAL from '../Globals/Globals';

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
      initialRegion: {
        latitude: 41.60209,
        longitude: 2.23983,
        latitudeDelta: 0.7,
        longitudeDelta: 0.67,
      },
      area: [
        {
        latitude: 41.57946,
        longitude: 1.9157
        },
        {
        latitude: 41.64056,
        longitude: 1.99879
        },
        {
        latitude: 41.66571,
        longitude: 2.16155
        },
        {
        latitude: 41.69981,
        longitude: 2.27588
        },
        {
        latitude: 41.73364,
        longitude: 2.32254
        },
        {
        latitude: 41.78973,
        longitude: 2.37236
        },
        {
        latitude: 41.77615,
        longitude: 2.48808
        },
        {
        latitude: 41.72761,
        longitude: 2.53908
        },
        {
        latitude: 41.72005,
        longitude: 2.55915
        },
        {
        latitude: 41.6831,
        longitude: 2.54715
        },
        {
        latitude: 41.64854,
        longitude: 2.53216
        },
        {
        latitude: 41.58669,
        longitude: 2.37759
        },
        {
        latitude: 41.53144,
        longitude: 2.30109
        },
        {
        latitude: 41.48024,
        longitude: 2.21236
        },
        {
        latitude: 41.4612,
        longitude: 2.13648
        },
        {
        latitude: 41.43932,
        longitude: 2.08257
        },
        {
        latitude: 41.44885,
        longitude: 2.02626
        },
        {
        latitude: 41.4877,
        longitude: 2.00325
        },
        {
        latitude: 41.51021,
        longitude: 1.9817
        },
        {
        latitude: 41.52371,
        longitude: 1.93975
        },
      ],
      markers: [],
      isConnected: null,
      internet: null,
    }
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
      this.getMarkersFromApiAsync();
    }
    this.setState({
      isConnected,
    });
  };

  getMarkersFromApiAsync() {
    return fetch('https://apps.lifeteen.es/apps/markers.json')
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
    this.getMarkersFromApiAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.maps}
          initialRegion={this.state.initialRegion}
        >

          <MapView.Polygon
            strokeColor="rgba(0, 97, 186, 1.0)"
            coordinates={this.state.area}
            fillColor="rgba(0, 97, 186, 0.3)"
          />

          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={GLOBAL.thumbColor}>
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
