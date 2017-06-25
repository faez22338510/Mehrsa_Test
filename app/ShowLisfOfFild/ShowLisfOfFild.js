/**
 * Created by HRFaez on 25/06/2017.
 */
import React ,{ Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Navigator,
    TouchableHighlight,
} from 'react-native';

class ShowLisfOfFild extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    WholeField(prop , ClickOnField){
        var property = prop;
        return this.state.lis.map(function (field) {
            return(
                <Fild
                    key={field.id}
                    detail = {field}
                    icon = {field.assets[0].asset_url}
                />
            )
        })
    }

    render(){
        return(
            <View>
                <Text>list of Field</Text>
            </View>
        )
    }

}
class Fild extends Component{
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
        return(
            <View>
                <Text>list of Field</Text>
            </View>
        )
    }

}

const stryle = StyleSheet.create({

});

module.exports = ShowLisfOfFild;