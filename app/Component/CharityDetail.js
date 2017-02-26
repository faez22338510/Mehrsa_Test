import React ,{ Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    Navigator,
    StyleSheet,
    BackAndroid,
    ScrollView
} from 'react-native';
var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
        return false;
    }
    _navigator.pop();
    return true;
});
class CharityDetail extends Component{
    constructor(props){
        super(props);
        _navigator  = this.props.navigator;
        console.log(_navigator);
        this.state={
            id: props.charityid,
            detail:
                [
                    {
                        "id": 0,
                        "name": "",
                        "about": "",
                        "description": "",
                        "finance_link": "",
                        "payment_info": "",
                        "non_cash_info": "",
                        "lets_adopt": 0,
                        "updated_at": "",
                        "order": 0,
                        "pivot": {
                            "field_id": 0,
                            "charity_id": 0
                        },
                        "assets": [
                            {
                                "id": 0,
                                "type": "logo",
                                "asset_url": "",
                                "order": null
                            }
                        ]
                    }
                ]
        };
        this._CallDetailApi();
    }
    _CallDetailApi(){
        var url = "http://mehrsaa.aliinl.ir/api/list/field/"+this.props.id+"/charity";
        fetch(url)
            .then((response) => response.json())
            .then((Detailjson) => {
                if(Detailjson.meta.code == 200){
                    this.setState({
                        detail: Detailjson.data[0],
                    });
                }
            })
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.inRowElement}>
                    <View>
                        <Image/>
                    </View>
                    <View>
                        <Text>fda</Text>
                        <Text>fa</Text>
                    </View>
                </View>
                <Text style={styles.txt}>{this.props.id}</Text>
                <Text>{this.state.detail.name}</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    txt:{
        backgroundColor: 'green',
    },
    inRowElement:{
        flexDirection: 'row',
    }
});

module.exports = CharityDetail;
