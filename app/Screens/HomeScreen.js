import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar, BackAndroid } from 'react-native';

import SqlTest from '../SQL/SqlTest'

var buttonPress

export default class HomeScreen extends Component {
  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      this.props.navigator.pop();
      return true;
    });
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar
          barStyle="light-content"
          backgroundColor="#2c3e50"
      />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.button}>
              <TouchableOpacity onPress={this.onButtonPress.bind(this, "rosari")} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Rosari</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={this.onButtonPress.bind(this, "pvoc")} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Pregària Vocacional</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={this.onButtonPress.bind(this, "about")} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>About</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'column'}} >
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, "misteri")} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Misteri</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, "tvoc")} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Text Vocaional</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onButtonPress.bind(this, "grup")} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Grup</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
      </View>
    )
  }

  onButtonPress(idPressed){
    this.props.navigator.push({id: idPressed, index: 1})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    paddingTop: 54
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 20
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '400'
  }
})
