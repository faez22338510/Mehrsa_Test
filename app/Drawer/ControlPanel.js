import React, { Component } from 'react';
import {
    SwitchIOS,
    View,
    Text,
    Button,
    TouchableHighlight,
    StyleSheet,
    Image,
} from 'react-native';

//import Button from './Button';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={styles.controlPanel}>
          <View style={styles.UserDetail}>
              <View style={{
                  paddingTop:20,
                  flexDirection:'row',
                  justifyContent:'flex-end',
                  paddingRight: 40
              }}>
              <Image source={require('../../images/heart.jpg')}
                     style={styles.PersonalyImage}
              />
              </View>
              <View
                style={{
                    paddingRight: 20,
                    paddingTop:20
                }}
              >
                  <Text
                    style={{
                        fontSize:15,
                        color:'#fff'
                    }}
                  >مهمان</Text>
              </View>
          </View>
          <View style={styles.List}>
              <TouchableHighlight onPress={() => alert("AM")}
                underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                        style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>صفحه اصلی</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/home.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>خیریه من</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/person.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>کمک</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/like.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>لیست</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/menu.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>جست و جو</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/search.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>درباره ما</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/smile.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => alert("BM")}
                                  underlayColor={'#af2'}
              >
                  <View
                      style={{flexDirection: 'row',justifyContent: 'flex-end',paddingRight:20,paddingTop:20}}
                  >
                      <View
                          style={{paddingRight:20}}
                      >
                          <Text style={styles.ListText}>تماس با ما</Text>
                      </View>
                      <View>
                          <Image source={require('../../images/phone-receiver.png')}
                                 style={styles.iconImage}
                          />
                      </View>
                  </View>
              </TouchableHighlight>
          </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
    controlPanelWelcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 25,
        color:'white',
        fontWeight:'bold',
    },
    controlPanel: {
        flex: 1,
        backgroundColor:'#326945',
    },
    UserDetail:{
        flex : 3,
        backgroundColor:'red',
    },
    List:{
        flex : 9,
        backgroundColor:'#fff'
    },
    PersonalyImage:{
        borderRadius: 64,
        width: 65,
        height: 65
    },
    iconImage:{
        width: 20,
        height: 20
    },
    ListText:{
        fontSize:18
    }
});
