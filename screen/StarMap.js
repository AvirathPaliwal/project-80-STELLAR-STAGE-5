import React,{Component} from 'react'
import {
    Text,
    Alert,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    Image,
    ImageBackground,
    TextInput,
    ViewBase
} from 'react-native';

import {WebView} from 'react-native-webview'
export default class StarMapScreen extends Component{
    constructor() {
        super();
        this.state = {
            longitude:'',
            latitude:''
        }
    }
    render(){
        const {longitude,latitude}=this.state;
        const path= `https://virtualsky.lco.global/embed/index.html?longitude=
        ${longitude}&latitude=${latitude}&constellations=true&constellationlabels=
        true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate
        =false&showposition=false`;
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>StarMap</Text>
                  <TextInput
                  style={{height:40,
                    borderWidth:1,
                    backgroundColor:'#df6589ff',
                    borderRadius:50,
                    fontSize:20,
                    marginTop:-50,
                    alignItems:'center'}}
                  placeholder='Place Enter Your Latitude'
                  placeholderTextColor='#3c1053ff'
                  onChange={(text)=>{
                      this.setState({
                          latitude:text
                      })
                  }}
                 />
                 <TextInput
                  style={{height:40,
                    borderWidth:1,
                    backgroundColor:'#df6589ff',
                    borderRadius:50,
                    fontSize:20,
                    marginTop:50,
                    alignItems:'center'}}
                  placeholder='Place Enter Your Longitude'
                  placeholderTextColor='#3c1053ff'
                  onChange={(text)=>{
                      this.setState({
                          longitude:text
                      })
                  }}
                 />
                 </View>
                 <WebView 
                  scalesPageToFit={true}
                  source={{uri:path}}
                  style={styles.map}
                 />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color:'red'

    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 27,
        color: 'cyan',
        fontWeight: "bold",
        marginTop:10,
        marginBottom:50
    },
  
})