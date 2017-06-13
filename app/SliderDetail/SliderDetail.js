/**
 * Created by HRFaez on 11/06/2017.
 * show slider
 * detail with
 * http://api.mehrsaa.ir/v1/slider/
 */


import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Button,
    BackAndroid,
    ScrollView,
    StyleSheet,
    Navigator
} from 'react-native';

var _navigator;

BackAndroid.addEventListener('back', () => {
    if (_navigator.getCurrentRoutes().length === 1) {
        return false;
    }
    _navigator.pop();
    return true;
});


class SliderDetail extends Component {
    constructor(props) {
        super(props);
        _navigator  = this.props.navigator;
        this.state = {
            id: props.id
        }
    }

    callApi(){

    }

    render() {
        return (
            <ScrollView>
                <Text>SliderDetail</Text>
                <Image source={{uri: this.props.image}}
                       style={styles.SliderImage}/>

            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    SliderImage:{
        width:370,
        height:240,
    }
});

module.exports = SliderDetail;