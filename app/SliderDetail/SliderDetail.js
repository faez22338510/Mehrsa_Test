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
        _navigator = this.props.navigator;
        this.state = {
            id: props.id,
            detail: {
                "id": 0,
                "title": "",
                "stitle": "",
                "description": "",
                "btn_text": "",
                "btn_action": 0,
                "push": 0,
                "slider": 1,
                "slider_timer": 1,
                "updated_at": "",
                "assets": [
                    {
                        "id": 0,
                        "type": "picture",
                        "asset_url": "",
                        "order": null
                    }
                ]
            }
        }
        this._callApi();
    }

    _callApi() {
        var url = "http://api.mehrsaa.ir/v1/slider/" + this.props.id;
        fetch(url)
            .then((response) => response.json())
            .then((res) => {
                if (res.meta.code == 200) {
                    this.setState({
                        detail: res.data,
                    })
                }
            })
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Image source={{uri: this.props.image}}
                           style={styles.SliderImage}/>
                </View>
                <View>
                    <View>
                        <View>
                            <Text>{this.state.detail.title}</Text>
                        </View>
                        <View>
                            <Text>{this.state.detail.stitle}</Text>
                        </View>
                    </View>
                    <View
                    style={{width:200}}>
                        <Button
                            style={styles.btm_style}
                            onPress={()=> null}
                            title={this.state.detail.btn_text}
                            />
                    </View>
                </View>
                <View>
                    <Text>{this.state.detail.description}</Text>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    SliderImage: {
        width: 370,
        height: 240,
    },
    btm_style:{
        width:20,
        height:"auto",
        paddingLeft:10,
    }
});

module.exports = SliderDetail;
