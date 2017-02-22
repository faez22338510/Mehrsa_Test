import React ,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Swiper from 'react-native-swiper';

class LastNews extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                height={240}
                autoplayTimeout={4}
                autoplay={true}
            >
                <View style={styles.slide1}>
                    <Image source={{uri: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2013/10/11/101105860-129311070.1910x1000.jpg"}}
                           style={styles.Image}/>
                </View>
                <View style={styles.slide2}>
                    <Image source={{uri: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/10/22/102110883-143276821.1910x1000.jpg"}}
                           style={styles.Image}/>
                </View>
                <View style={styles.slide3}>
                    <Image source={{uri: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2014/12/12/102264730-charity.1910x1000.jpg"}}
                           style={styles.Image}/>
                </View>
                <View style={styles.slide3}>
                    <Image source={{uri: "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/11/10/103156952-GettyImages-186059084.1910x1000.jpg"}}
                        style={styles.Image}
                    />
                </View>
            </Swiper>
        )
    }

}

const styles = StyleSheet.create({
    wrapper: {
    },
    Image:{
        width:370, height: 240
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

module.exports = LastNews;
