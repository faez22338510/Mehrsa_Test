
import React ,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AppRegistry
} from 'react-native';

var ToolbarAndroid = require('ToolbarAndroid');

var ToolbarAndroidExample = React.createClass({
    statics: {
        title: '<ToolbarAndroid>',
        description: 'Examples of using the Android toolbar.'
    },
    getInitialState: function() {
        return {
            actionText: 'Example app with toolbar component',
            toolbarSwitch: false,
            colorProps: {
                titleColor: '#3b5998',
                subtitleColor: '#6a7180',
            },
        };
    },
    _openDrawer: function() {
        this.refs.drawer.open();
    },
    _closeDrawer: function() {
        this.refs.drawer.close();
    },
    render: function() {
        return (
            <View title="<ToolbarAndroid>">
                <ToolbarAndroid
                    actions={toolbarMenu}
                    logo={null}
                    onActionSelected={this._openDrawer}
                    onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                    style={styles.toolbar}
                    titleColor={'#ffffff'}
                    title="مهرسا" />
            </View>
        );
    },
    _onActionSelected: function(position) {
        this.setState({
            actionText: 'Selected ' + toolbarActions[position].title,
        });
    },
});

var toolbarMenu = [
    {title: 'Menu', icon: require('../../images/fa-bars.png'), show: 'always'}
];
// var toolbarActions = [
//     {title: 'hamid'},
//     {title: 'faez'},
//     {title: 'Creat'},
//     {title: 'Unkhnow'},
//     {title: 'Finish'},
//     ];

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#cc0000',
        height: 56,
    },
});

module.exports = ToolbarAndroidExample;