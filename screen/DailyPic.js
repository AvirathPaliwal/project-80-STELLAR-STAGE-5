import React, { Component } from 'react'
import { View,
     Text,
     FlatList,
     SafeAreaView,
     StyleSheet,
     ImageBackground,
     Image,
     Platform, 
     Dimensions, 
     Linking,
     StatusBar,
     TouchableOpacity} from 'react-native';
import axios from 'axios';


export default class DailyPicScreen extends Component{
        constructor(props) {
            super(props);
            this.state = {
                dailypic: {},
            };
        }
        getAPOD = ()=>{
            axios
            .get('https://api.nasa.gov/planetary/apod?api_key=i6SsjcLPyWX4kjvnHhZ6t6Oy14VKcAw1mh8gcIY3')
            .then(response =>{
                this.setState({ dailypic:response.data
                })
            })
            .catch((error) => {
                Alert.alert(error.message);
            });
        }
        componentDidMount = () =>{
            this.getAPOD();
        }
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground 
                source={require('../assets/star_map.gif')} style={styles.backgroundImage}>
                <Text style={styles.titleText}>Astromony Picture Of The Day</Text> 
                <Text style={styles.titleroute}>{this.state.dailypic.title}</Text>
                <TouchableOpacity style={styles.listcontainer}
                 onPress={()=>Linking.openURL(this.state.dailypic.url).catch(error => console.error('not able to load page',error))}
                 >
                   <View style={styles.iconContainer}>
                       <Image source={require('../assets/play-video.png')} style={{width:50,
                        height:50,
                        marginBottom:-150}}/>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.explanationText}> {this.state.dailypic.explanation}</Text>
                </TouchableOpacity>
               </ImageBackground>
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
        marginBottom:-50,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
    },
    titleroute:{
       alignItems:'center',
       justifyContent:'center',
       color:'pink',
       marginLeft:-20,
       fontSize:15,
       alignSelf:'center',
       marginTop:50
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    listcontainer:{
        flex:1,
        alignSelf:'center',
    },
    iconContainer:{
        flex:0.5,
        alignSelf:'center',
    },
    explanationText:{
         color:'white',
         alignSelf:'center',
    }
  
})