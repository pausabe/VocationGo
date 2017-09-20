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
  BackAndroid,
  ScrollView
} from 'react-native';

import CustomTransitions from '../CustomTransitions/CustomTransitions';

import HomeScreen from '../Screens/HomeScreen'
import RosariScreen from '../Screens/RosariScreen'
import GrupScreen from '../Screens/GrupsScreen'
import PVocScreen from '../Screens/PVocScreen'
import TVocScreen from '../Screens/TVocScreen'
import AboutScreen from '../Screens/AboutScreen'
import PopupDialog, {
  DialogTitle,
} from 'react-native-popup-dialog';
import GLOBAL from '../Globals/Globals'
import Icon from 'react-native-vector-icons/Ionicons'
import SettingsComponentAdapter from "../Settings/SettingsComponentAdapter";
import SettingsManager from '../Settings/SettingsManager';

export default class NavigatorController extends Component {
  componentWillMount() {
    Icon.getImageSource('ios-settings-outline', 30).then((source) => this.setState({ settingsIcon: source }));
    SettingsComponentAdapter.getSettingsOptions().then(result =>{
        this.setState({options: result});
    }).catch(error => console.log(error));
  }

  constructor(props) {
    super(props)

    this.state = {
      settingsIcon: null,
      firstShow: false,
    }

    SettingsManager.getSettingDiocesis((r) => {
        console.log("Diòcesi NAVIGATOR: " + r);
        if(r === 'none'){
          this.setState({firstShow: true})
        }
    });
  }

  render() {
    if (!this.state.settingsIcon) {
      return false;
    }

    if(Platform.OS === 'ios'){
      return (
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={GLOBAL.statusBarColor}
          />

          <NavigatorIOS
            ref='navi'
            initialRoute={{
              component: HomeScreen,
              title: GLOBAL.titleApp,
              rightButtonIcon: this.state.settingsIcon,
              onRightButtonPress: () => this.rightPress(),
            }}

            style={{flex: 1}}
            barTintColor={GLOBAL.barColor}
            tintColor={GLOBAL.itemsBarColor}
            titleTextColor={GLOBAL.itemsBarColor}
          />

          <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog}}
            dismissOnTouchOutside={!this.state.firstShow}
            show={this.state.firstShow}
            dialogStyle={{backgroundColor: 'white'}}
            dialogTitle={<DialogTitle title="Sel·lecciona el seminari" />} >
            <View style={{flex:1}}>
              <View style={styles.itemList}>
                  {this.state.options}
              </View>
            </View>
            <View style={{justifyContent: 'flex-end', paddingBottom: 5, flexDirection: 'row', backgroundColor: 'white'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                {this.state.firstShow? null
                  :
                  <TouchableOpacity onPress={this.cancelDialog.bind(this)}>
                    <Text style={styles.popupText}>Cancel·la</Text>
                  </TouchableOpacity>
                }
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={this.okDialog.bind(this)}>
                  <Text style={styles.popupText}>D'acord</Text>
                </TouchableOpacity>
              </View>
            </View>
          </PopupDialog>
        </View>
      );
    }
    else{
      return (
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor={GLOBAL.statusBarColor}
            barStyle="light-content"
          />

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
                    );
                  },
                  RightButton: (route, navigator, index, navState) =>
                  {
                    if(route.index === 1){
                      return null;
                    }
                    else{
                      return (
                        <TouchableOpacity
                            style={{flex: 1, alignItems: 'center', justifyContent: 'center',}}
                            onPress={this.rightPress.bind(this, navigator)}>
                          <View style={{flex:1, paddingRight: 5, paddingLeft: 5, flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                            <Icon
                              name="ios-settings-outline"
                              size={30}
                              color="#FFFFFF"
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    }
                  }
                }}
                style={styles.bar}
              />
            }
          />

          <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog}}
            dialogStyle={{backgroundColor: 'white'}}
            show={this.state.firstShow}
            dismissOnTouchOutside={!this.state.firstShow}
            dismissOnHardwareBackPress={!this.state.firstShow}
            dialogTitle={<DialogTitle title="Sel·lecciona el seminari" />} >
            <View style={{flex:1}}>
              <View style={styles.itemList}>
                  {this.state.options}
              </View>
            </View>
            <View style={{justifyContent: 'flex-end', paddingBottom: 5, flexDirection: 'row', backgroundColor: 'white'}}>
              <View style={{flex: 1, alignItems: 'center'}}>
                {this.state.firstShow? null
                  :
                  <TouchableOpacity onPress={this.cancelDialog.bind(this)}>
                    <Text style={styles.popupText}>Cancel·la</Text>
                  </TouchableOpacity>
                }
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableOpacity onPress={this.okDialog.bind(this)}>
                  <Text style={styles.popupText}>D'acord</Text>
                </TouchableOpacity>
              </View>
            </View>
          </PopupDialog>
        </View>
      );
    }
  }

  rightPress(nav){
    this.popupDialog.show();
  }

  backPress(nav){
    nav.pop();
  }

  okDialog(androidDate){
      this.popupDialog.dismiss();
  }

  cancelDialog(){
    this.popupDialog.dismiss();
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
  },
  popupText: {
    color: 'rgb(0, 122, 204)',
    fontSize: 17,
    fontWeight: '400'
  }
})

AppRegistry.registerComponent('NavigatorController', () => NavigatorController);
