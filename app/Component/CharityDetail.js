import React ,{ Component } from 'react';
import {
    Text,
    View,
    Image,
    Button,
    Navigator,
    StyleSheet
} from 'react-native';

class CharityDetail extends Component{
    constructor(props){
        super(props);
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
                        detail: Detailjson.data,
                    });
                }
            })
    }
    render(){
        return(
            <View>
                <Text style={styles.txt}>{this.state.detail.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    txt:{
        backgroundColor: 'green'
    },
});

module.exports = CharityDetail;