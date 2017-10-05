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
      initialRegion: this.getInitialRegion(props.bisbat),
      area: this.getArea(props.bisbat),
      markers: [],
      isConnected: null,
      internet: null,
    }
  }

  getArea(bisbat){
    switch (bisbat) {
      case 'Barcelona':
        return (
          [
            {
            latitude: 41.44885,
            longitude: 2.02626
            },
            {
            latitude: 41.43932,
            longitude: 2.08257
            },
            {
            latitude: 41.4612,
            longitude: 2.13648
            },
            {
            latitude: 41.48024,
            longitude: 2.21236
            },
            {
            latitude: 41.53144,
            longitude: 2.30109
            },
            {
            latitude: 41.58669,
            longitude: 2.37759
            },
            {
            latitude: 41.62519,
            longitude: 2.47261
            },
            {
            latitude: 41.56973,
            longitude: 2.53303
            },
            {
            latitude: 41.49057,
            longitude: 2.38059
            },
            {
            latitude: 41.45404,
            longitude: 2.26455
            },
            {
            latitude: 41.29122,
            longitude: 2.1492
            },
            {
            latitude: 41.3665,
            longitude: 1.99745
            },
          ]
        )
      break;
      case 'Girona':
        return (
          [
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
            latitude: 41.62519,
            longitude: 2.47261
            },
            {
            latitude: 41.56973,
            longitude: 2.53303
            },
            {
            latitude: 41.6452,
            longitude: 2.77885
            },
            {
            latitude: 41.77336,
            longitude: 3.03016
            },
            {
            latitude: 41.90687,
            longitude: 3.20869
            },
            {
            latitude: 41.97276,
            longitude: 3.22654
            },
            {
            latitude: 42.08038,
            longitude: 3.20663
            },
            {
            latitude: 42.17765,
            longitude: 3.11187
            },
            {
            latitude: 42.26714,
            longitude: 3.1668
            },
            {
            latitude: 42.23207,
            longitude: 3.21762
            },
            {
            latitude: 42.26104,
            longitude: 3.28765
            },
            {
            latitude: 42.3225,
            longitude: 3.31787
            },
            {
            latitude: 42.35042,
            longitude: 3.18191
            },
            {
            latitude: 42.43562,
            longitude: 3.17436
            },
            {
            latitude: 42.42649,
            longitude: 3.08372
            },
            {
            latitude: 42.47614,
            longitude: 3.03909
            },
            {
            latitude: 42.39202,
            longitude: 2.65663
            },
            {
            latitude: 42.34027,
            longitude: 2.67585
            },
            {
            latitude: 42.33976,
            longitude: 2.48153
            },
            {
            latitude: 42.36767,
            longitude: 2.45304
            },
            {
            latitude: 42.0921,
            longitude: 2.34146
            },
            {
            latitude: 42.00083,
            longitude: 2.5756
            },
            {
            latitude: 41.92373,
            longitude: 2.6168
            },
          ]
        )
      break;
      /*case 'Lleida':
        return (
          [
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
          ]
        )
      break;*/
      case 'Sant Feliu de Llobregat':
        return (
          [
            {
            latitude: 41.3741,
            longitude: 2.09632
            },
            {
            latitude: 41.35645,
            longitude: 2.06096
            },
            {
            latitude: 41.29122,
            longitude: 2.1492
            },
            {
            latitude: 41.26387,
            longitude: 2.02011
            },
            {
            latitude: 41.23212,
            longitude: 1.85497
            },
            {
            latitude: 41.1926,
            longitude: 1.64897
            },
            {
            latitude: 41.23599,
            longitude: 1.62322
            },
            {
            latitude: 41.25277,
            longitude: 1.57722
            },
            {
            latitude: 41.28761,
            longitude: 1.62117
            },
            {
            latitude: 41.42754,
            longitude: 1.47594
            },
            {
            latitude: 41.5078,
            longitude: 1.50444
            },
            {
            latitude: 41.59541,
            longitude: 1.75746
            },
            {
            latitude: 41.64854,
            longitude: 1.73206
            },
            {
            latitude: 41.65341,
            longitude: 1.79111
            },
            {
            latitude: 41.57946,
            longitude: 1.9157
            },
            {
            latitude: 41.52371,
            longitude: 1.93975
            },
            {
            latitude: 41.51021,
            longitude: 1.9817
            },
            {
            latitude: 41.4877,
            longitude: 2.00325
            },
            {
            latitude: 41.44885,
            longitude: 2.02626
            },
            {
            latitude: 41.43932,
            longitude: 2.08257
            },
          ]
        )
      break;
      /*case 'Barcelona':
        return (
          [
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
          ]
        )
      break;
      case 'Barcelona':
        return (
          [
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
          ]
        )
      break;*/
      case 'Terrassa':
        return (
          [
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
          ]
        )
      break;
      case 'Tortosa':
        return (
          [
            {
            latitude: 40.9353,
            longitude: 0.86105
            },
            {
            latitude: 40.81796,
            longitude: 0.75119
            },
            {
            latitude: 40.71291,
            longitude: 0.91049
            },
            {
            latitude: 40.55554,
            longitude: 0.67428
            },
            {
            latitude: 40.52319,
            longitude: 0.51635
            },
            {
            latitude: 40.54824,
            longitude: 0.43807
            },
            {
            latitude: 40.57432,
            longitude: 0.44219
            },
            {
            latitude: 40.63375,
            longitude: 0.27191
            },
            {
            latitude: 40.68896,
            longitude: 0.28564
            },
            {
            latitude: 40.73685,
            longitude: 0.1799
            },
            {
            latitude: 40.8242,
            longitude: 0.27191
            },
            {
            latitude: 40.90209,
            longitude: 0.24444
            },
            {
            latitude: 40.96849,
            longitude: 0.29251
            },
            {
            latitude: 41.10781,
            longitude: 0.20599
            },
            {
            latitude: 41.16004,
            longitude: 0.30418
            },
            {
            latitude: 41.22411,
            longitude: 0.32341
            },
            {
            latitude: 41.23392,
            longitude: 0.38246
            },
            {
            latitude: 41.27212,
            longitude: 0.3828
            },
            {
            latitude: 41.25225,
            longitude: 0.50399
            },
            {
            latitude: 41.26129,
            longitude: 0.61454
            },
            {
            latitude: 41.15539,
            longitude: 0.61042
            },
            {
            latitude: 41.08659,
            longitude: 0.74089
            },
          ]
        )
      break;
      /*case 'Urgell':
        return (
          [
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude:,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
            {
            latitude: ,
            longitude:
            },
          ]
        )
      break;*/
      case 'Vic':
        return (
          [
            {
            latitude: 41.5006,
            longitude: 1.46186
            },
            {
            latitude: 41.52965,
            longitude: 1.39595
            },
            {
            latitude: 41.54224,
            longitude: 1.43474
            },
            {
            latitude: 41.57076,
            longitude: 1.44075
            },
            {
            latitude: 41.59336,
            longitude: 1.42667
            },
            {
            latitude: 41.62288,
            longitude: 1.39904
            },
            {
            latitude: 41.63469,
            longitude: 1.4071
            },
            {
            latitude: 41.63417,
            longitude: 1.47285
            },
            {
            latitude: 41.71457,
            longitude: 1.40933
            },
            {
            latitude: 41.76683,
            longitude: 1.4689
            },
            {
            latitude: 41.80945,
            longitude: 1.62906
            },
            {
            latitude: 41.81687,
            longitude: 1.75781
            },
            {
            latitude: 41.84552,
            longitude: 1.81137
            },
            {
            latitude: 41.83554,
            longitude: 1.87625
            },
            {
            latitude: 42.01052,
            longitude: 2.01667
            },
            {
            latitude: 42.10739,
            longitude: 2.00775
            },
            {
            latitude: 42.12267,
            longitude: 2.06542
            },
            {
            latitude: 42.15678,
            longitude: 2.07023
            },
            {
            latitude: 42.20003,
            longitude: 2.09392
            },
            {
            latitude: 42.23639,
            longitude: 2.07572
            },
            {
            latitude: 42.27553,
            longitude: 2.06989
            },
            {
            latitude: 42.26689,
            longitude: 2.18112
            },
            {
            latitude: 42.27934,
            longitude: 2.27108
            },
            {
            latitude: 42.41635,
            longitude: 2.20001
            },
            {
            latitude: 42.43891,
            longitude: 2.25563
            },
            {
            latitude: 42.36767,
            longitude: 2.45304
            },
            {
            latitude: 42.0921,
            longitude: 2.34146
            },
            {
            latitude: 42.00083,
            longitude: 2.5756
            },
            {
            latitude: 41.92373,
            longitude: 2.6168
            },
            {
            latitude: 41.78411,
            longitude: 2.49114
            },
            {
            latitude: 41.78973,
            longitude: 2.37236
            },
            {
            latitude: 41.73364,
            longitude: 2.32254
            },
            {
            latitude: 41.69981,
            longitude: 2.27588
            },
            {
            latitude: 41.66571,
            longitude: 2.16155
            },
            {
            latitude: 41.64056,
            longitude: 1.99879
            },
            {
            latitude: 41.57946,
            longitude: 1.9157
            },
            {
            latitude: 41.65341,
            longitude: 1.79111
            },
            {
            latitude: 41.64854,
            longitude: 1.73206
            },
            {
            latitude: 41.59541,
            longitude: 1.75746
            },
            {
            latitude: 41.5078,
            longitude: 1.50444
            },
          ]
        )
      break;
    }
  }

  getInitialRegion(bisbat){
    switch (bisbat) {
      case 'Barcelona':
        return (
          {
            latitude: 41.47874,
            longitude: 2.26,
            latitudeDelta: 0.65,
            longitudeDelta: 0.5,
          }
        )
        break;
      case 'Girona':
        return (
          {
            latitude: 42.09414,
            longitude: 2.83595,
            latitudeDelta: 1.0,
            longitudeDelta: 1.05,
          }
        )
        break;
      /*case 'Lleida':
        return (
          {
            latitude: ,
            longitude: ,
            latitudeDelta: ,
            longitudeDelta: ,
          }
        )
        break;*/
      case 'Sant Feliu de Llobregat':
        return (
          {
            latitude: 41.44066,
            longitude: 1.80999,
            latitudeDelta: 0.7,
            longitudeDelta: 0.7,
          }
        )
        break;
      /*case 'Solsona':
        return (
          {
            latitude: ,
            longitude: ,
            latitudeDelta: ,
            longitudeDelta: ,
          }
        )
        break;
      case 'Tarragona':
        return (
          {
            latitude: ,
            longitude: ,
            latitudeDelta: ,
            longitudeDelta: ,
          }
        )
        break;*/
      case 'Terrassa':
        return (
          {
            latitude: 41.60209,
            longitude: 2.23983,
            latitudeDelta: 0.7,
            longitudeDelta: 0.67,
          }
        )
        break;
      case 'Tortosa':
        return (
          {
            latitude: 40.8751,
            longitude: 0.52871,
            latitudeDelta: 0.85,
            longitudeDelta: 0.85,
          }
        )
        break;
      /*case 'Urgell':
        return (
          {
            latitude: ,
            longitude: ,
            latitudeDelta: ,
            longitudeDelta: ,
          }
        )
        break;*/
      case 'Vic':
        return (
          {
            latitude: 41.98195,
            longitude: 2.00366,
            latitudeDelta: 1.3,
            longitudeDelta: 1.3,
          }
        )
        break;

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
            strokeColor={GLOBAL.mapColor}
            coordinates={this.state.area}
            fillColor={GLOBAL.mapColorTransparent}
          />

          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinate}
              pinColor={GLOBAL.mapColor}>
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
