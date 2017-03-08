/**
 * author: Hamidreza faez
 * finish At :
 * First Page
 * list of Charities
 * Secend Element in first page
 * horizantal Scroll View
 * Click Able
 * Base URL: http://mehrsaa.ir/api
 * EndPoint: /list/charity
 * @flow
 */
import React ,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableHighlight,
    Navigator,
    Button,
} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';

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
        console.log("Charity");
        // this.props.OnClickCharit();
        // console.log(this.props);
        this.props.onPress(this.state.id);
    }
    render(){
        var baseURL = 'http://api.mehrsaa.ir/v1/';
        return(
            <View
                style={{
                    marginRight: 5,
                    marginLeft:5,
                    backgroundColor:"#ffffff",
                    alignItems: 'center'
                }}
            >
                <TouchableHighlight onPress={() => this.Click()}>
                    <Image source={{uri: baseURL+this.props.icon}}
                           style={{width: 120, height: 120}} />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.props.OnClick(1, this.state.id)}>
                    <Text
                        style={{alignItems: 'center'}}
                    >{this.props.detail.name}</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

class CharityList extends Component{
    constructor(props){
        super(props);
        this.state={
            lis: [{
                "id": 0,
                "name": "",
                "assets": [
                    {
                        "id": 0,
                        "type": "logo",
                        "asset_url": "",
                        "order": null
                    }
                ]
            }],
        }
        var lis = [];
        console.log("Call CharityAPI");
        fetch('http://api.mehrsaa.ir/v1/list/charity')
            .then((response) => response.json())
            .then((json) => {
                if(json.meta.code == 200){
                    for(var index in json.data){
                        lis.push(json.data[index])
                    }
                    console.log(lis)
                    this.setState({
                        lis
                    })
                    // {detail: json.data[0]};
                }
                else{
                    console.log("ERROR");
                }
            })
        this.WholeCharites = this.WholeCharites.bind(this);
        this.ClickOnCharity = this.ClickOnCharity.bind(this);
    }
    ClickOnCharity(prop,CharityId){
        console.log("Charity List");
        prop.onButtonPress(CharityId);
    }
    //creat charityes by maping each object on Charity Class
    //all object(charites) => lis
    WholeCharites(prop , ClickOnCharity) {
        var property = prop;
        return this.state.lis.map(function(charity){
            return(
                <Charity
                    key = {charity.id}
                    detail = {charity}
                    icon = {charity.assets[0].asset_url}
                    onPress = {(id) => ClickOnCharity(property,id)}
                />
            );
        });
    }

    clickPress(){
        this.props.onButtonPress(1);
    }

    render(){
        return(
            <View>
                <View style={styles.HeaderCharityList}>
                    <View style={styles.ViewListOfCharity}>
                        <TouchableHighlight
                            onPress={()=>this.props.onShowListPress(this.state.lis)}
                        >
                            <Text style={styles.TxtShowAll}>دیده همه</Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.ViewCharity}>
                        <Text style={styles.TxtCharities}>خیریه ها</Text>
                    </View>
                </View>
                <InvertibleScrollView
                    horizontal={true}
                    inverted
                >
                    {this.WholeCharites(this.props , this.ClickOnCharity)}
                </InvertibleScrollView>
                {/*<Button*/}
                {/*onPress={() => this.clickPress()}*/}
                {/*title={"Click"}*/}
                {/*/>*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HeaderCharityList:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ViewCharity:{
        paddingTop:10,
        paddingBottom:10,
        paddingRight:10,
    },
    ViewListOfCharity:{
        paddingLeft:10,
        paddingBottom:8,
        paddingTop:10,
    },
    TxtShowAll:{
        fontSize:15,
        color:'#6274f0'
    },
    TxtCharities:{
        fontSize:15,
        color:'#000000'
    }
});

module.exports = CharityList;
