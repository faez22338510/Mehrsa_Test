/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Navigator,
    BackAndroid
} from 'react-native';
var FirstPage = require('./app/FirstPage/firstPage');
var CharityDetailPage = require('./app/CharityDetailes/CharityDetail');


export default class Testing1 extends Component {

    renderScene ( route, navigator ) {
        var routeId = route.id;
        if (routeId === 0) {
            return (
                <FirstPage
                    navigator={navigator}/>
            );
        }
        if (routeId === 1) {
            return (
                <CharityDetailPage
                    id = {route.orgId}
                    navigator={navigator}/>
            );
        }
    }


  render() {
    return (
        <Navigator
            initialRoute={{id: 0, orgId:0}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e6e6e6',
  },
  rows:{
    paddingTop:10,
  } ,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Testing1', () => Testing1);
