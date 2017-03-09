import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

import NavigatorController from './app/NavigatorController/NavigatorController'

export default class VocationGo extends Component {
  render() {
    return (
      <NavigatorController />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('VocationGo', () => VocationGo);
