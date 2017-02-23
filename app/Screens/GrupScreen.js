import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView from 'react-native-maps';

export default class GrupScreen extends Component {
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

  componentWillMount() {
    var auxMarkers = [];

    auxMarkers.push({
      key: '0',
      coordinate: {
        latitude: 41.49545,
        longitude: 2.12837
      },
      title: "Súper title 1",
      description: "Súper description 1"
    });
    auxMarkers.push({
      key: '1',
      coordinate: {
        latitude: 41.45831,
        longitude: 2.06925
      },
      title: "Súper title 2",
      description: "Súper description 2"
    });

    this.setState({markers: auxMarkers});
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
