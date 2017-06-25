import React , { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    Navigator,
    Button
} from 'react-native';

class StartPage extends Component{
    constructor(props){
        super(props);
    }
    componentWillMount() {
        var navigator = this.props.navigator;
        setTimeout(() => {
            navigator.replace({
                id: 1,
            });
        }, 4000);
    }
    render() {
        return (
            <View
                style={{flex:1}}
            >
                <View style={{
                    flex: 0.1,
                    alignItems: 'stretch'}}>
                    <Image source={require('../../images/Splash.jpg')} style={styles.backgroundImage} />
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'stretch', // or 'stretch' or cover
    }
});

module.exports = StartPage;