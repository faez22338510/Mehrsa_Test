import React ,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
var Switch = require('Switch');
var nativeImageSource = require('nativeImageSource');
var ToolbarAndroid = require('ToolbarAndroid');
class ToolBar extends Component{
    constructor(props){
        super(props);
        this.state={
            null
        }
    }
    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            showSettings();
        }
    }
    render(){
        return(
            <View>
                <ToolbarAndroid
                    title="AwesomeApp"
                    logo={require('./icon_settings.png')}
                    actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
                    onActionSelected={this.onActionSelected}
                />
            </View>
        )
    }
}

const Styles = StyleSheet.create({

});

module.exports = ToolBar;