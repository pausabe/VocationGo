import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

let SQLite = require('react-native-sqlite-storage')

export default class SqlTest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      record: "empty"
    }

     let nameDB = "db.db";
     let createFrom;
     if (Platform.OS == "ios") { createFrom = "1"; } //ios platform
     else { createFrom = `~${nameDB}`} //android platform

     //console.log(`name DB:  ${nameDB}`);
     //console.log(`DB from:  ${createFrom}`);

     let db = SQLite.openDatabase(
       {name : nameDB, readOnly: true, createFromLocation : createFrom},
      this.openCB,
      this.errorCB);


    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM test', [], (tx, results) => {
        console.log("Query completed");

        //console.log(`SIIIIIIIIII: ${results.rows.item(0).name}`);

        this.setState({record: results.rows.item(0).name});

          /*var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            console.log(`Record: ${row.name}`);
            this.setState({record: row});
          }*/

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

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.platformText}> {Platform.OS} </Text>
        <Text style={styles.normalText}>
          {this.state.record !== null ? this.state.record : 'Waiting...'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#2980b9',
  },
  normalText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '300'
  },
  platformText: {
    textAlign: 'center',
    color: '#000000',
    fontWeight: '700'
  }
});

AppRegistry.registerComponent('SqlTest', () => SqlTest);
