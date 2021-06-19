import React, { Component } from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity, FlatList, Platform, StatusBar ,SafeAreaView,ImageBackground,Image} from 'react-native'
import axios from 'axios'

export default class SpaceCraftsScreen extends Component {
    constructor() {
        super()
        this.state = {
           airCrafts:[]

        }
    }
    getData = () =>{
        axios
        .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
        .then(response =>{
             this.setState({airCrafts:response.data.results})
             console.log(response.data.results)
        })
        .catch(error =>{
            console.log(error.message)
        })

    }
    KeyExtractor = (item, index) =>  index.toString(); 
    renderItem =({item}) =>{
        return(
        <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10,backgroundColor:'black'}}>
            <Image source={{uri:item.image_url}} style={{width:'100%',
        height:200,
        marginTop:15,
        marginBottom:15,
        marginRight:16}}/>
            <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
            <Text style={{color:'white'}}>{item.agency.name}</Text>
            <Text>DESCRIPTION</Text>
            <Text>{item.agency.description}</Text>
        </View>
        )

    }
    componentDidMount =()=>{
        this.getData();
    }
    
    render(){
        let update = this.state.airCrafts
        if(update.length === 0){
            return(<View style={{ alignSelf: 'center', flex: 1 }}>
            <Text> Loading...</Text>
        </View>)
        }
        else { return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={{flex:0.25}}>
                    <Text>Space Crafts</Text>
                </View>
                <View style={{flex:0.75}}>
                    <FlatList
                      keyExtractor={this.KeyExtractor}
                      renderItem={this.renderItem}
                      data={this.state.airCrafts}/>
                </View>
            </View>
        )}
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'center'
    },
    droidSafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleBar: {
        flex: 0.15,
        alignSelf: 'center'
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    listContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        padding: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    image:{
        width:'100%',
        height:200,
        marginTop:15,
        marginBottom:15,
        marginRight:16
    }
})