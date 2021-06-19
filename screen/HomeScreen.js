import React, { Component } from 'react'
import {
    Text,
    View,
    Platform,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ImageBackground,
    Image,
    StyleSheet
} from 'react-native'

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.SafeArea} />
                <ImageBackground source={require('../assets/space.gif')} style={styles.backgroundimage}>
                    <Image source={require('../assets/main-icon.png')} style={styles.imageIcon} />
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>STELLAR APP</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCards} onPress={() => {
                        this.props.navigation.navigate('SpaceCrafts')
                    }}>
                        <Text style={styles.routeText}>SpaceCrafts</Text>
                        <Image source={require('../assets/space_crafts.png')} style={styles.routeImage}/>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCards} onPress={() => {
                        this.props.navigation.navigate('DailyPic')
                    }}>
                        <Text style={styles.routeText}>DailyPic</Text>
                        <Image source={require('../assets/daily_pictures.png')} style={styles.routeImage}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCards} onPress={() => {
                        this.props.navigation.navigate('StarMap')
                    }}>
                        <Text style={styles.routeText}>StarMap</Text>
                        <Image source={require('../assets/star_map.png')} style={styles.routeImage}/>
                    </TouchableOpacity>

                </ImageBackground>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    SafeArea: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    backgroundimage: {
        flex: 1,
        resizeMode: 'cover'
    },
    imageIcon: {
        position: 'absolute',
        width: 120,
        height: 120,
        resizeMode: 'contain',
        right: 130,
        top: -5
    },
    routeCards: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 50,
        backgroundColor: 'black'
    },
    titleText: {
        fontSize: 27,
        color: 'cyan',
        fontWeight: "bold",
        marginTop:27
    },
    titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeText: {
        color: 'white',
        fontSize: 25,
        fontWeight: "bold",
        paddingRight: 60
    },
    routeImage:{
        position:'absolute',
        width:150,
        height:150,
        resizeMode:'contain',
        right:-50,
        top:-90
    },

})