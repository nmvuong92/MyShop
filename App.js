/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DSSP from './src/components/DSSP';

const instructions = Platform.select({
  ios: 'HAHAHA Press Cmd+R to reload,\n' +
    'zzz Cmd+D or shake for dev messsnu',
  android: 'HIHIHI Double tap R on your keyboard to reload,\n' +
    'vvvvcShakeccc or press menu button for dev mssssenu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      
        <View style={styles.container}>
            <DSSP/>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop:30
  }
});
