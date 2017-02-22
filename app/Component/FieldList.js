
import React ,{ Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';

import InvertibleScrollView from 'react-native-invertible-scroll-view';
import Swiper from 'react-native-swiper';

class CharityFiled extends Component {
    constructor(props){
        super(props);
        this.state={
            detail: props.detail
        }

    }
    _onPressButton() {
        // alert(this.props.detail.id);
        alert(this.state.detail.name);
    }
    render(){
        var baseURL = "http://mehrsaa.ir/api/";
        return(
            <View
                style={styles.Filed}
            >
                <TouchableHighlight
                    onPress={this._onPressButton.bind(this)}
                >
                    <Image source={{uri: baseURL + this.state.detail.assets[0].asset_url}}
                           style={{width: 120, height: 120}}/>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={this._onPressButton.bind(this)}
                >
                    <Text>{this.state.detail.name}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class CharityFiledList extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[]
        };
        this.CallFeildApi();
    }
    CallFeildApi(){
        var url = "http://mehrsaa.aliinl.ir/api/list/field";
        var lis = [];
        console.log("Call FieldAPI");
        fetch(url)
            .then((response) => response.json())
            .then((json) =>{
                if(json.meta.code == 200){
                    for(var index in json.data){
                        lis.push(json.data[index])
                    }
                    this.setState({
                        list: lis,
                    })
                }
                else{
                    console.log("ERROR");
                }
            })
    }
    WholeFiled(){
        return this.state.list.map((filed) => {
            return(
                <CharityFiled
                    key = {filed.id}
                    detail = {filed}
                />
            )
        })
    }
    render(){
        return(
            <InvertibleScrollView
                horizontal={true}
                inverted
            >
                {this.WholeFiled()}
            </InvertibleScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Filed:{
        marginRight: 5,
        marginLeft:5,
        backgroundColor:"#ffffff",
        alignItems: 'center'
    },
    FiledImage:{
        width:120,
        height: 120,
    },
    FiledText:{
        fontSize: 5,
        color: 'red'
    }
});

module.exports = CharityFiledList;