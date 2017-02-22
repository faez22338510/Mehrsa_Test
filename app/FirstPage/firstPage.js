import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';
var ListOfCharity = require('../Component/CharityList');
var ListOfFieldCharity = require('../Component/FieldList');
var LastNews = require('../Component/Swipper');
var ToolBar = require('../Component/ToolBar');
var TestToolBar = require('../Component/TestToolbar');

export default class firstPage extends Component {
    // onOrgPress(page, charityID){
    //     navigator.replace({
    //         id: 1,
    //         orgId:charityID
    //     });
    // }
    onOrgPress(id){
        console.log("FirstPage");
        this.props.navigator.push({
            id: 1,
            orgId:id
        })
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <TestToolBar/>
                </View>
                <View>
                    <LastNews/>
                </View>
                <View
                    style={styles.rows}
                >
                    <ListOfCharity
                        navigat = {this.props.navigator}
                        onButtonPress= {charityid => this.onOrgPress(charityid)}
                    />
                </View>
                <View
                    style={styles.rows}
                >
                    <ListOfFieldCharity/>
                </View>
                <Button
                    onPress={()=>{
                         this.props.navigator.push({
                             id: 1,
                         })
                    }}
                    title="Next Page"
                />
            </ScrollView>
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

module.exports = firstPage;
