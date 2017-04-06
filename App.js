import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigatorController from './app/NavigatorController/NavigatorController'

export default class VocationGo extends Component {
  render() {
    return (
      <NavigatorController />
    );
  }
}

AppRegistry.registerComponent('VocationGo', () => VocationGo);
