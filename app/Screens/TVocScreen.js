import React, {Component} from 'react';

import { View, ScrollView, Text, StyleSheet, Platform, Image, BackAndroid, InteractionManager } from 'react-native';

import AudioBar from '../AudioBar/AudioBar';
import GLOBAL from '../Globals/Globals';
import T_VOC from '../Globals/T_VOC';
import BottomBar from '../BottomBar/BottomBar'
let SQLite = require('react-native-sqlite-storage')

function paddingBar(){
  if(Platform.OS === 'ios'){
    return 64;
  }
  return 54;
}

class TVocScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      titol: "",
      subtitol: "",
      text: "",
    }

    let nameDB = "vgDB_v0.2.db";
    let createFrom;
    if (Platform.OS == "ios") { createFrom = "1"; } //ios platform
    else { createFrom = `~${nameDB}`} //android platform

    let db = SQLite.openDatabase(
       {name : nameDB, readOnly: true, createFromLocation : createFrom},
       this.openCB,
       this.errorCB);

   var today = new Date();
   var id = today.getDate();

    db.transaction((tx) => {
      tx.executeSql(`SELECT * FROM textosVocacionals WHERE id = ${id}`, [], (tx, results) => {
        this.setState({titol: results.rows.item(0).titol});
        this.setState({subtitol: results.rows.item(0).subtitol});
        this.setState({text: results.rows.item(0).text});
        });
    });
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  successCB() {
    console.log("SQL executed fine");
  }

  openCB() {
    console.log("Database OPENED");
  }

  /*componentWillMount(){
    let today = new Date();
    let day = today.getDate();
    var id = (day-1)%6;

    switch (id) {
      case 0:
        this.setState({titol: T_VOC.titol1, subtitol: T_VOC.subtitol1, text: T_VOC.text1,})
        break;
      case 1:
        this.setState({titol: T_VOC.titol2, subtitol: T_VOC.subtitol2, text: T_VOC.text2,})
        break;
      case 2:
        this.setState({titol: T_VOC.titol3, subtitol: T_VOC.subtitol3, text: T_VOC.text3,})
        break;
      case 3:
        this.setState({titol: T_VOC.titol4, subtitol: T_VOC.subtitol4, text: T_VOC.text4,})
        break;
      case 4:
        this.setState({titol: T_VOC.titol5, subtitol: T_VOC.subtitol5, text: T_VOC.text5,})
        break;
      case 5:
        this.setState({titol: T_VOC.titol6, subtitol: T_VOC.subtitol6, text: T_VOC.text6,})
        break;
      }
  }*/

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/bg/currentbg.png')} style={GLOBAL.backgroundImage}>
          <ScrollView automaticallyAdjustContentInsets={false} showsVerticalScrollIndicator={false}>
            <View style={GLOBAL.square}>
              <Text style={GLOBAL.bigTitle}>{this.state.titol}</Text>
              {this.state.subtitol === "-" ? null :
                <Text style={GLOBAL.litleTitle}>{this.state.subtitol}</Text>
              }
              <Text />
              <Text style={GLOBAL.justifyNormalText} selectable={true}>{this.state.text}</Text>
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
export default TVocScreen;
