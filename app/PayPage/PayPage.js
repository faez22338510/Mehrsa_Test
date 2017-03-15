import React ,{ Component } from 'react';
// Arabic (ar) selected
import { FormattedNumber } from 'react-native-globalize';
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
const Messages = {
    en: {
        hello: 'Hello',
    },
    es: {
        hello: 'Hola',
    },
    fa:{
        hello: 'سلام',
    }
};
class PayPage extends Component{
    constructor(props){
        super(props);
        this.state={
            selected1: 'key1',
            CharityId: 0,
            color: 'red',
            mode: Picker.MODE_DIALOG,
        };
    }

    render(){
        return(
            <View style={{
                flex:1,
                backgroundColor:'#F0F5F8'
            }}>
                <View
                    style={{
                    flex: 0.3,
                    alignItems: 'stretch'}}>
                    <Image source={require('../../images/child.jpg')} style={styles.backgroundImage} />
                </View>
                <View style={styles.defultMonySection}>
                    <View style={styles.inlineButtonSection}>
                        <View
                            style={styles.buttonleftMoney}
                        >
                        <Button
                            title="50,000 ریال"
                            onPress={()=>null} // TODO
                        />
                        </View>
                        <View style={styles.buttoncenterMoney}>
                        <Button
                            title="20,000 ریال"
                            onPress={()=>null} // TODO
                        />
                        </View>
                        <View style={styles.buttonrightMoney}>
                        <Button
                            title="10,000 ریال"
                            onPress={()=>null} // TODO
                        />
                        </View>
                    </View>
                    <View style={styles.inlineButtonSection}>
                        <View style={styles.buttonleftMoney}>
                        <Button
                            title="1,000,000 ریال"
                            onPress={()=>null} // TODO
                        />
                        </View>
                        <View style={styles.buttoncenterMoney}>
                        <Button
                            title="500,000 ریال"
                            onPress={()=>null} // TODO
                        />
                        </View>
                        <View style={styles.buttonrightMoney}>
                        <Button
                            title="200,000 ریال"
                            onPress={()=>null} // TODO
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
                            }}
                        underlineColorAndroid="#ffffff"
                        placeholder="مبلغ دلخواه خود را وارد کنید"
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
            </View>
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
        height: 100,
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
        flex:0.1,
        paddingLeft:12,
        paddingRight:12,

        flexDirection: 'row',
    },
    charitySelectSection:{
        flex:0.1,
        flexDirection: 'row',
        paddingRight: 10,
        paddingLeft:10
    },
    payBtm:{
        flexDirection: 'column',
        justifyContent: 'center',
        flex:0.3
    },
});


module.exports = PayPage;