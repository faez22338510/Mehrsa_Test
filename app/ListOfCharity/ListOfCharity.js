import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    BackAndroid,
    TouchableHighlight,
    Image
} from 'react-native';
//var Charity = require('./Charity');
var _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
        return false;
    }
    _navigator.pop();
    return true;
});

class Charity extends Component{
    constructor(props){
        super(props);
        // var detail = _callListApi();
        // console.log(detail);
        this.state={
            id: props.detail.id,
            name: props.detail.name,
            logo: props.detail.assets,
        }
    }
    Click(){

    }
    render(){
        var baseURL = 'http://mehrsaa.ir/api/';
        return(
            <View
                style={{
                    paddingTop:5,
                    paddingRight:5,
                    paddingLeft:5,
                }}
            >
                <TouchableHighlight onPress={() => this.props.onPress(this.state.id)}>
                    <View
                        style={{
                    marginRight: 5,
                    marginLeft:5,
                    backgroundColor:"#ffffff",
                    flexDirection: 'row',
                    flex:1,
                    justifyContent: 'flex-end',
                }}
                    >
                        <Text
                            style={{
                                paddingTop:10,
                                paddingRight:10,
                            }}
                        >{this.props.detail.name}</Text>
                        <View style={{
                            paddingRight:5,
                            paddingTop:5,
                            paddingBottom:5
                        }}>
                            <Image source={{uri: baseURL+this.props.icon}}
                                   style={{
                                       width: 60, height: 60,
                                   }} />
                        </View>
                    </View>
                </TouchableHighlight>
            </View>

        )
    }
}

class ListOfCharity extends Component{
    constructor(props){
        super(props);
        _navigator  = this.props.navigator;
        console.log(props.charitylist);
        this.state={
            charityList: props.charitylist,
        }
        this.WholeListOfCharity = this.WholeListOfCharity.bind(this);
        this.onOrgPress = this.onOrgPress.bind(this);
    }

    onOrgPress(id){
        this.props.navigator.push({
            id: 1,
            orgId:id
        })
    }

    WholeListOfCharity(props,onOrgPress){
        console.log("hi");
        return this.props.charitylist.map(function(charity){
            return(
                <Charity
                    key = {charity.id}
                    detail = {charity}
                    icon = {charity.assets[0].asset_url}
                    onPress={(id) => onOrgPress(id)}
                />
            );
        });
    }
    render(){
        return(
            <View
                style={{backgroundColor:'#b3b3b3'}}
            >
                <ScrollView>
                    {this.WholeListOfCharity(this.props,this.onOrgPress)}
                </ScrollView>
            </View>
        )
    }
}

module.exports = ListOfCharity;
