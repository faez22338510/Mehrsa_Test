import React ,{ Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight
} from 'react-native';

import Swiper from 'react-native-swiper';

class LastNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listofSlider:[],
        }
        this.CallApi();
    }

    CallApi(){
        var url = "http://api.mehrsaa.ir/v1/slider";
        var lis = [];
        fetch(url)
            .then(response => response.json())
            .then(res => {
                if(res.meta.code == 200){
                    for(var index in res.data){
                        lis.push(res.data[index]);
                        console.log(res.data[index]);
                    }
                    this.setState({
                        listofSlider: lis,
                    })
                }
            })
    }

    WholeSliderNews(){
        var baseURL = "http://api.mehrsaa.ir/v1/";
        return this.state.listofSlider.map((news) => {
            //console.log(baseURL+news.assets[0].asset_url);
            return(
                <SliderNews
                    key={news.id}
                    detail={news}
                />
            )
        })
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
                {this.WholeSliderNews()}
            </Swiper>
        )
    }

}

class SliderNews extends Component{
    constructor(props){
        super(props);
        this.state={
            detail: props.detail,
        }
    }

    _onPressButton(){
        alert("go to Slider page" + this.state.detail.id);
    }

    render(){
        var baseURL = "http://api.mehrsaa.ir/v1/";
        var image = baseURL+this.state.detail.assets[0].asset_url;
        //console.log(image);
        return(
            <View
                style={styles.slide1}
            >
                <TouchableHighlight
                    onPress={this._onPressButton.bind(this)}
                >
                        <Image source={{uri: image}}
                               style={styles.Image}/>
                </TouchableHighlight>
            </View>
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
