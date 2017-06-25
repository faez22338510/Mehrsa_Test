import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView
} from 'react-native';

const drawerStyles = {
    drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0,
    }
}

import Drawer from 'react-native-drawer';
import MyControlPanel from '../Drawer/ControlPanel';
//import IndexPage from '';

var ListOfCharity = require('../Component/CharityList');

var ListOfFieldCharity = require('../Component/FieldList');
var LastNews = require('../Component/Swipper');
var ToolBar = require('../Component/ToolBar');
var TestToolBar = require('../Component/TestToolbar');

export default class firstPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drawerType: 'overlay',
            openDrawerOffset: 100,
            closedDrawerOffset: 0,
            panOpenMask: 0.3,
            panCloseMask: .3,
            relativeDrag: false,
            panThreshold: .25,
            tweenHandlerOn: false,
            tweenDuration: 100,
            tweenEasing: 'linear',
            disabled: false,
            tweenHandlerPreset: null,
            acceptDoubleTap: true,
            acceptTap: false,
            acceptPan: true,
            tapToClose: false,
            negotiatePan: true,
            rightSide: true,
        }
    }

    onOrgPress(id) {
        this.props.navigator.push({
            id: 2,
            orgId: id
        })
    }
    ClickSlider(id,image){
        this.props.navigator.push({
            id:3,
            orgId: id,
            image: image,
        })
    }

    onShowCharityListShowPress(listofCharity) {
        this.props.navigator.push({
            id:6,
            listofCharity:listofCharity
        })
    }

    openDrawer() {
        this.drawer.open()
    }

    closeDraw() {
        this.drawer.close();
    }

    render() {
        var controlPanel = <MyControlPanel closeDrawer={() => {
         this.drawer.close();
        }}/>
        return (
            <Drawer
                ref={c => this.drawer = c}
                type={this.state.drawerType}
                animation={this.state.animation}
                openDrawerOffset={this.state.openDrawerOffset}
                closedDrawerOffset={this.state.closedDrawerOffset}
                panOpenMask={this.state.panOpenMask}
                panCloseMask={this.state.panCloseMask}
                relativeDrag={this.state.relativeDrag}
                panThreshold={this.state.panThreshold}
                content={controlPanel}
                styles={drawerStyles}
                disabled={this.state.disabled}
                tweenDuration={this.state.tweenDuration}
                tweenEasing={this.state.tweenEasing}
                acceptDoubleTap={this.state.acceptDoubleTap}
                acceptTap={this.state.acceptTap}
                acceptPan={this.state.acceptPan}
                tapToClose={this.state.tapToClose}
                negotiatePan={this.state.negotiatePan}
                side={"right"}
            >
                <ScrollView>
                    <View>
                        <TestToolBar
                            opnenButton={()=>{
                                this.openDrawer();
                        }}
                        />
                    </View>
                    <View>
                        <LastNews
                            navigate = {this.props.navigator}
                            SliderPress = {(SliderId,Image) => this.ClickSlider(SliderId,Image)}
                        />
                    </View>
                    <View
                        style={styles.rows}
                    >
                        <ListOfCharity
                            navigat = {this.props.navigator}
                            onShowListPress = {(listofCharity) => this.onShowCharityListShowPress(listofCharity)}
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
                            {/*this.openDrawer();*/}
                         this.props.navigator.push({
                             id: 5,
                         })
                    }}
                        title="Next Page"
                    />
                </ScrollView>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e6e6e6',
    },
    rows: {
        paddingTop: 10,
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
    drawer: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 0,
    }
});

module.exports = firstPage;
