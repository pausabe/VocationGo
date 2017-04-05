import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  NavigatorIOS,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Alert,
  Image,
  Platform,
  BackAndroid
} from 'react-native';

import CustomTransitions from '../CustomTransitions/CustomTransitions';

import HomeScreen from '../Screens/HomeScreen'
import RosariScreen from '../Screens/RosariScreen'
import GrupScreen from '../Screens/GrupsScreen'
import PVocScreen from '../Screens/PVocScreen'
import TVocScreen from '../Screens/TVocScreen'
import AboutScreen from '../Screens/AboutScreen'

import GLOBAL from '../Globals/Globals'
import Icon from 'react-native-vector-icons/Ionicons'

export default class NavigatorController extends Component {
  componentWillMount() {
    Icon.getImageSource('ios-settings', 30).then((source) => this.setState({ gearIcon: source }));
  }

  constructor(props) {
    super(props)

    this.state = {
      gearIcon: null
    }
  }

  render() {
    if (!this.state.gearIcon) {
      return false;
    }

    if(Platform.OS === 'ios'){
      return (
        <View style={{flex: 1}}>
          <NavigatorIOS
            ref='navi'
            initialRoute={{
              component: HomeScreen,
              title: GLOBAL.titleApp,
            }}

            style={{flex: 1}}
            barTintColor={GLOBAL.barColor}
            tintColor={GLOBAL.itemsBarColor}
            titleTextColor={GLOBAL.itemsBarColor}
          />
          <StatusBar
            barStyle="light-content"
            backgroundColor={GLOBAL.statusBarColor}
          />
        </View>
      );
    }
    else{
      return (
        <View style={{flex: 1}}>
          <Navigator
            initialRoute={{id: 'home', index: 0}}
            renderScene={this.renderScene}

            configureScene={(route, routeStack) =>
              CustomTransitions.NONE
              //Navigator.SceneConfigs.PushFromRight //tipo iphone
              //Navigator.SceneConfigs.FloatFromBottomAndroid //tipo android
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
                        <TouchableOpacity style={styles.barButton}
                                          hitSlop={{top:35,bottom:35,right:45,left:35}}
                                          onPress={this.backPress.bind(this, navigator)}>
                          <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                            <View >
                              <Icon
                                name="ios-arrow-back-outline"
                                size={30}
                                color="#FFFFFF"
                              />
                            </View>
                            <View >
                                <Text style={styles.barTextBack}>{'          '}</Text>
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  },
                  Title: (route, navigator, index, navState) =>
                    { return (
                      <View style={styles.container}>
                        <Text style={styles.barText}>{GLOBAL.titleApp}</Text>
                      </View>
                    );},
                  RightButton: () => { return null}
                }}
                style={styles.bar}
              />
            }
          />
          <StatusBar
            backgroundColor={GLOBAL.statusBarColor}
            barStyle="light-content"
          />
        </View>
      );
    }
  }

  backPress(nav){
    nav.pop();
  }

  renderScene(route,nav){
    switch (route.id) {
      case 'home':
        return (<HomeScreen navigator={nav} route={route} title="Home"/>);
      case 'rosari':
        return (<RosariScreen navigator={nav} route={route} title="Rosari"/>);
      case 'misteri':
        return (<RosariScreen navigator={nav} route={route} title="Misteri"/>);
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
    paddingHorizontal: 10,
  },
  barButton: {
    flex: 1,
    paddingLeft: 5,
    justifyContent: 'center'
  },
  barText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: GLOBAL.itemsBarColor,
    fontSize: 20,
    fontWeight: '600'
  },
  barTextBack: {
    color: GLOBAL.itemsBarColor,
    fontSize: 16,
    fontWeight: '300'
  },
  bar: {
    backgroundColor: GLOBAL.barColor
  }
})

AppRegistry.registerComponent('NavigatorController', () => NavigatorController);
