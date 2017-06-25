import React ,{ Component } from 'react';
// Arabic (ar) selected

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
    Picker,
    TextInput
} from 'react-native';
const Item = Picker.Item;
class PayPage extends Component{
    constructor(props){
        super(props);
        this.state={
            selected1: 'key1',
            CharityId: 0,
            color: 'red',
            mode: Picker.MODE_DIALOG,
            money_show: "",
            money_pay:0,
        };
    }

    converPersioan(str){
        let persian = {
            0: '۰',
            1: '۱',
            2: '۲',
            3: '۳',
            4: '۴',
            5: '۵',
            6: '۶',
            7: '۷',
            8: '۸',
            9: '۹'
        };
        alert(str);
        var num = str.replace(/(\d)(?=(\d{3})+$)/g, ",");
        var convertToPersianNumber = num.replace(/[0-9]/g, (from) => persian[parseInt(from)]);
        return convertToPersianNumber;
    }


    render(){
        return(
            <ScrollView style={{
                backgroundColor:'#F0F5F8'
            }}>
                <View
                    style={{
                    height:200,
                    alignItems: 'stretch'}}>
                    <Image source={require('../../images/child.png')} style={styles.backgroundImage} />
                </View>
                <View style={styles.defultMonySection}>
                    <View style={styles.inlineButtonSection}>
                        <View
                            style={styles.buttonleftMoney}
                        >
                        <Button
                            title="۵۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۵۰,۰۰۰",
                                    money_pay:50000
                                })
                            }} // TODO
                        />
                        </View>
                        <View style={styles.buttoncenterMoney}>
                        <Button
                            title="۲۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۲۰,۰۰۰",
                                    money_pay:20000
                                })
                            }} // TODO
                        />
                        </View>
                        <View style={styles.buttonrightMoney}>
                        <Button
                            title="۱۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۱۰,۰۰۰",
                                    money_pay:10000
                                })
                            }} // TODO
                        />
                        </View>
                    </View>
                    <View style={styles.inlineButtonSection}>
                        <View style={styles.buttonleftMoney}>
                        <Button
                            title="۱,۰۰۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۱,۰۰۰,۰۰۰",
                                    money_pay:1000000
                                })
                            }} // TODO
                        />
                        </View>
                        <View style={styles.buttoncenterMoney}>
                        <Button
                            title="۵۰۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۵۰۰,۰۰۰",
                                    money_pay:500000
                                })
                            }} // TODO
                        />
                        </View>
                        <View style={styles.buttonrightMoney}>
                        <Button
                            title="۲۰۰,۰۰۰ ریال"
                            onPress={()=>{
                                this.setState({
                                    money_show:"۲۰۰,۰۰۰",
                                    money_pay:200000
                                })
                            }} // TODO
                        />
                        </View>
                    </View>
                </View>
                <View style={styles.desiredMonySection}>
                        <Text style={{
                            height: 40,
                            flex:1,
                            fontSize: 16,
                            backgroundColor:"#fff",
                            paddingTop:8
                        }}>ریال</Text>
                    <TextInput
                    style={{
                            height: 40,
                            paddingLeft:10,
                            paddingRight:10,
                            fontSize: 16,
                            flex:9,
                            backgroundColor:"#fff",
                            textAlign: 'right'
                            }}
                    onChangeText={(money) => {
                            var str = this.converPersioan(money);
                            this.setState({
                                money_show:str,
                            })
                        }}

                    underlineColorAndroid="#ffffff"
                    placeholder="مبلغ دلخواه خود را وارد کنید"
                    value={this.state.money_show}
                />
                </View>
                <View style={styles.charitySelectSection}>
                    <View
                        style={{
                            flex:1,
                            paddingRight: 5,
                            paddingLeft: 3,
                        }}>
                        <Picker
                            mode="dialog"
                            style={{

                                backgroundColor:'#ffffff'
                            }}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this, 'selected1')}>
                            <Item label="درمان" value="0" />
                            <Item label="مدرسه سازی" value="1" />
                            <Item label="کودکان سرطانی" value="2" />
                            <Item label="تهیه جهیزیه" value="3" />
                        </Picker>
                    </View>

                    <View
                        style={{
                            flex:1,
                            paddingRight: 3,
                            paddingLeft: 5,

                        }}>
                        <Picker
                            mode="dialog"
                            style={{
                                backgroundColor:'#ffffff'
                            }}
                            selectedValue={this.state.selected1}
                            onValueChange={this.onValueChange.bind(this, 'selected1')}>
                            <Item label="محک" value="key0" />
                            <Item label="همت" value="key1" />
                        </Picker>
                    </View>

                </View>
                <View
                    style={styles.payBtm}
                >
                    <View
                        style={{paddingRight:10,paddingLeft:10}}
                    >
                        <Button
                            onPress={()=> null}
                            title={"پرداخت"}
                            style={{fontSize:10}}
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
    onValueChange = (key: string, value: string) => {
        const newState = {};
        newState[key] = value;
        alert(value);
        this.setState(newState);
    };
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: 50,
        margin:30,
        resizeMode: 'stretch', // or 'stretch' or cover
    },

    defultMonySection:{
        flex:0.2,
    },
    inlineButtonSection:{
        flexDirection: 'row',
    },
    buttonrightMoney:{
        flex:1,
        paddingRight:8,
        paddingLeft:4,
        paddingTop:9
    },
    buttonleftMoney:{
        flex:1,
        paddingRight:4,
        paddingLeft:8,
        paddingTop:9
    },
    buttoncenterMoney:{
        flex:1,
        paddingRight:4,
        paddingLeft:4,
        paddingTop:9
    },
    desiredMonySection:{
        height:60,
        paddingTop:15,
        paddingLeft:12,
        paddingRight:12,

        flexDirection: 'row',
    },
    charitySelectSection:{
        height:60,
        paddingTop:5,
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft:10
    },
    payBtm:{

        flexDirection: 'column',
        justifyContent: 'center',
        height:60,
        paddingTop:10,
    },
});


module.exports = PayPage;
