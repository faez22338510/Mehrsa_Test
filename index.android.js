/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';


var SplashPage = require('./app/Splash/Splash');
var FirstPage = require('./app/FirstPage/firstPage');
var CharityDetail = require('./app/CharityDetailes/DetailOfCharity');
var PayPage = require('./app/PayPage/PayPage');
var SliderDetail = require('./app/SliderDetail/SliderDetail');


export default class MainProject extends Component {
    renderScene(route, navigator) {
        var routeId = route.id;
        if (routeId === 0) {
            return (
                <SplashPage
                    charitylist={route.listofCharity}
                    navigator={navigator}
                />
            )
        }
        if (routeId === 1) {
            return (
                <FirstPage
                    navigator={navigator}/>
            );
        }
        if (routeId === 2) {
            return (
                <CharityDetail
                    id = {route.orgId}
                    navigator={navigator}/>
            );
        }
        if (routeId === 3) {
            return (
                <SliderDetail
                    id = {route.orgId}
                    image = {route.image}
                    navigator={navigator}
                />
            );
        }
        if (routeId === 4) {
            return (
                <PayPage
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
        return Navigator.SceneConfigs.FloatFromBottom;
      }}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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

AppRegistry.registerComponent('MainProject', () => MainProject);
