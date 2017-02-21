import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  NavigatorIOS,
  Text,
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';

import CustomTransitions from '../CustomTransitions/CustomTransitions';

import HomeScreen from '../Screens/HomeScreen'
import RosariScreen from '../Screens/RosariScreen'
import MisteriScreen from '../Screens/MisteriScreen'
import GrupScreen from '../Screens/GrupScreen'
import PVocScreen from '../Screens/PVocScreen'
import TVocScreen from '../Screens/TVocScreen'
import AboutScreen from '../Screens/AboutScreen'

var NoTransition = {
  opacity: {
    from: 1,
    to: 1,
    min: 1,
    max: 1,
    type: 'linear',
    extrapolate: false,
    round: 100,
  },
};

export default class NavigatorController extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'home', index: 0}}
        renderScene={this.renderScene}

        configureScene={(route, routeStack) =>
          //Navigator.SceneConfigs.PushFromRight
          CustomTransitions.NONE
        }

        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              {
                if (route.index === 0) {
                  return null;
                }
                else {
                  return (
                    <TouchableHighlight style={styles.container}
                                        onPress={() => navigator.pop()} >
                      <Text style={styles.barText}>Back</Text>
                    </TouchableHighlight>
                  );
                }
              },
              RightButton: (route, navigator, index, navState) =>
                {
                  if(route.index === 1){
                    return null;
                  }
                  else{
                    return (
                      <TouchableHighlight style={styles.container}
                                          onPress={this.setPress} >
                        <Text style={styles.barText}>Sett</Text>
                      </TouchableHighlight>
                    );
                  }
                },
              Title: (route, navigator, index, navState) =>
                { return (
                  <View style={styles.container}>
                    <Text style={styles.barText}>VocationGo</Text>
                  </View>
                );},
            }}
            style={styles.bar}
          />
        }
      />
    );
  }

  setPress(){
    console.log("settings");
  }

  renderScene(route,nav){
    switch (route.id) {
      case 'home':
        return (<HomeScreen navigator={nav} route={route} title="Home"/>);
      case 'rosari':
        return (<RosariScreen navigator={nav} route={route} title="Rosi"/>);
      case 'misteri':
        return (<MisteriScreen navigator={nav} route={route} title="Misteri"/>);
      case 'grup':
        return (<GrupScreen navigator={nav} route={route} title="Grup"/>);
      case 'pvoc':
        return (<PVocScreen navigator={nav} route={route} title="PVoc"/>);
      case 'tvoc':
        return (<TVocScreen navigator={nav} route={route} title="TVoc"/>);
      case 'about':
        return (<AboutScreen navigator={nav} route={route} title="About"/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  barText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  bar: {
    backgroundColor: '#34495e'
  }
})

AppRegistry.registerComponent('NavigatorController', () => NavigatorController);
