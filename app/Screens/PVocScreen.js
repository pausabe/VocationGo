import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image, BackAndroid } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import P_VOC from '../Globals/P_VOC';
import BottomBar from '../BottomBar/BottomBar'

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class PVocScreen extends Component {
  componentWillMount(){
    let today = new Date();
    let day = today.getDate();
    var id = (day-1)%14;

    //console.log("day: "+day+", id: "+id);

    switch (id) {
      case 0:
        this.setState({titol: P_VOC.titol1, text: P_VOC.text1,})
        break;
      case 1:
        this.setState({titol: P_VOC.titol2, text: P_VOC.text2,})
        break;
      case 2:
        this.setState({titol: P_VOC.titol3, text: P_VOC.text3,})
        break;
      case 3:
        this.setState({titol: P_VOC.titol4, text: P_VOC.text4,})
        break;
      case 4:
        this.setState({titol: P_VOC.titol5, text: P_VOC.text5,})
        break;
      case 5:
        this.setState({titol: P_VOC.titol6, text: P_VOC.text6,})
        break;
      case 6:
        this.setState({titol: P_VOC.titol7, text: P_VOC.text7,})
        break;
      case 7:
        this.setState({titol: P_VOC.titol8, text: P_VOC.text8,})
        break;
      case 8:
        this.setState({titol: P_VOC.titol9, text: P_VOC.text9,})
        break;
      case 9:
        this.setState({titol: P_VOC.titol10, text: P_VOC.text10,})
        break;
      case 10:
        this.setState({titol: P_VOC.titol11, text: P_VOC.text11,})
        break;
      case 11:
        this.setState({titol: P_VOC.titol12, text: P_VOC.text12,})
        break;
      case 12:
        this.setState({titol: P_VOC.titol13, text: P_VOC.text13,})
        break;
      case 13:
        this.setState({titol: P_VOC.titol14, text: P_VOC.text14,})
        break;
    }
  }
  constructor(props){
    super(props);

    this.state = {
      titol: "",
      text: "",
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/currentBG.jpg')} style={GLOBAL.backgroundImage}>
          <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
            <View style={GLOBAL.square}>
              <Text style={GLOBAL.bigTitle}>{this.state.titol}</Text>
              <Text />
              <Text style={GLOBAL.normalText} selectable={true}>{this.state.text}</Text>
            </View>
          </ScrollView>
        </Image>
        <BottomBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: paddingBar()
  },
});
export default PVocScreen;
