//i4S6u4d5
import React, { Component, PropTypes } from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class GrupsMap extends Component {
  constructor(props) {
    super(props)

    this.state = {
      initialRegion: {
        latitude: 41.60312,
        longitude: 2.25631,
        latitudeDelta: 0.8,
        longitudeDelta: 0.8
      },

      area: [
        {
        latitude: 41.57795,
        longitude: 1.91436
        },
        {
        latitude: 41.78844,
        longitude: 2.37545
        },
        {
        latitude: 41.68237,
        longitude: 2.55056
        },
        {
        latitude: 41.40895,
        longitude: 2.03004
        },
      ],

      markers: []
    }
  }

  getMarkersFromApiAsync() {
    console.log("ha fet fetch");
    return fetch('https://apps.lifeteen.es/apps/markers.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("fetch correcte");
        this.displayData(responseJson);

        return responseJson;
      })
      .catch((error) => {
        console.error("Error de ferch: " + error);
      });
  }

  displayData(data){
    //console.log("de debo funciona el fetch? " + data.markers[2].description);
    this.setState({markers: data.markers});
  }

  componentWillMount() {
    this.getMarkersFromApiAsync();
  }

  render() {
    return (
      <MapView
        style={styles.maps}
        initialRegion={this.state.initialRegion}
      >

        <MapView.Polygon
          strokeColor="rgba(100, 255, 255, 1.0)"
          coordinates={this.state.area}
          fillColor="rgba(100, 255, 255, 0.4)"
        />

        {this.state.markers.map(marker => (
          <MapView.Marker
            key={marker.key}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  maps: {
    ...StyleSheet.absoluteFillObject,
  }
})

AppRegistry.registerComponent('GrupsMap', () => GrupsMap);
