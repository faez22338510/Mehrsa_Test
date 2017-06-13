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
        };
        this._CallDetailApi();
    }
    _CallDetailApi(){
        var url = "http://api.mehrsaa.ir/v1/charity/"+this.props.id;
        //alert(url);
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
    edit(str){
        var res = str.replace(/&#13/g, "\r\n");
        return (res);
    }
    render(){
        var Baseurl = 'http://api.mehrsaa.ir/v1/';
        return(
            <ScrollView >
                <View style={styles.wholepage}>
                    <View style={styles.TitleOfCharity}>
                        <View style={styles.textofTitle}>
                            <Text
                                style={{
                                fontWeight:'500',
                                fontSize:20,
                                }}
                            >{this.state.detail.sname} </Text>
                            <Text>{this.state.detail.name}</Text>
                        </View>
                        <View style={styles.ImageofCharity}>
                            <Image source={{uri: Baseurl+this.state.detail.assets[0].asset_url}}
                                   style={styles.imageOfCharity}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.ViewOfButton}>
                    <View style={styles.LeftButtonStyle}>
                        <Button
                            title="کمک به خیریه"
                            onPress={() => null}
                            color={'black'}
                            style={styles.ButtonStyle}
                        />
                    </View>
                    <View style={styles.RightButtonStyle}>
                        <Button
                            title={"گزارش مهربانی"}
                            onPress={() => null}
                        />
                    </View>
                </View>
                <View style={styles.HeaderOfAboutCharity}>
                    <View style={{flex:1,alignItems: 'center'}}>
                        <Text
                            style={styles.textOfHeaderAbout}
                        >درباره {this.state.detail.sname}</Text>
                    </View>
                </View>
                <View style={styles.BodyOfAbout}>
                    <Text
                        style={styles.TextBodyAbout}
                    >{this.edit(this.state.detail.about)}</Text>
                </View>
                <View style={styles.HeaderOfAboutCharity}>
                    <View style={{flex:1,alignItems: 'center'}}>
                        <Text
                            style={styles.textOfHeaderAbout}
                        >خدمات {this.state.detail.sname}</Text>
                    </View>
                </View>
                <View style={styles.BodyOfAbout}>
                    <Text
                        style={styles.TextBodyAbout}
                    >


                        {this.edit(this.state.detail.description)}



                        </Text>
                </View>
                <View style={styles.HeaderOfAboutCharity}>
                    <View style={{flex:1,alignItems: 'center'}}>
                        <Text
                            style={styles.textOfHeaderAbout}
                        >کمک به {this.state.detail.sname}</Text>
                    </View>
                </View>
                <View style={styles.ViewOfButton}>
                    <View style={styles.ShowReaport}>
                        <Button
                            onPress={()=> null}
                            title={"مشاهده گزارشات مالی"}
                            color={'#404040'}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    wholepage:{
        alignItems: 'flex-end',
    },
    txt:{
        backgroundColor: 'blue',
    },
    imageOfCharity:{
        borderRadius: 64,
        width: 50,
        height: 50
    },
    TitleOfCharity:{
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingTop: 10,
        paddingRight: 10,
    },
    textofTitle:{
        paddingRight:20,
        justifyContent: 'flex-start',
    },
    ImageofCharity:{

    },
    ViewOfButton:{
        flexDirection: 'row',
        paddingTop:20
    },
    RightButtonStyle:{
        flex: 1,
        backgroundColor:'#ffff',
        paddingRight:10,
        paddingLeft:5,
    },
    LeftButtonStyle:{
        flex: 1,
        backgroundColor:'#ffff',
        paddingRight:5,
        paddingLeft:10,
    },
    AboutCharity:{
        flexDirection: 'column',
        alignItems: 'center',
    },
    HeaderOfAboutCharity:{
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',

    },
    textOfHeaderAbout:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    BodyOfAbout:{
        paddingTop:20,
        paddingRight:15,
        paddingLeft:15,

    },
    TextBodyAbout:{
        fontSize:15,
        justifyContent: 'space-around',
        fontWeight:'400'
    },
    ShowReaport: {
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10
    },
    ButtonOfReaport:{
        paddingTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

});

module.exports = CharityDetail;
