import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, Image, AppRegistry } from 'react-native';

import GLOBAL from '../Globals/Globals';


export default class BottomBar extends Component {
  render() {
    return (
      <View style={styles.bottomBar}>
        <View style={{flex:1}}>
          <Text style={styles.bottomBarText}>Seminari de Terrassa</Text>
        </View>
        <View style={{width: GLOBAL.heightBottomBar}}>
          <Image  source={require('../img/altres/logo-seminari.png')}
                  style={styles.logoImage}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bottomBar: {
    alignItems: 'flex-end', //text al terra
    height: GLOBAL.heightBottomBar,
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
    resizeMode: 'contain',
  }
})

AppRegistry.registerComponent('BottomBar', () => BottomBar);
