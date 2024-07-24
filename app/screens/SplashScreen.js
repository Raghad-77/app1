import React from 'react';
import { Image, ImageBackground,StyleSheet ,Text, View,TouchableOpacity} from 'react-native';

function SplashScreen({onNext}) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/background.png")}>
            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={styles.welcomeText}>TO DO LIST</Text>
            </View>
           
    <TouchableOpacity style={styles.StartButton} onPress={onNext}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
    },

    buttonText: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
      },

    StartButton:{
        width: '100%',
        height: 60,
        backgroundColor: 'purple',
        justifyContent: 'center', 
        alignItems: 'center', 
        //borderRadius: 10, 
        position: 'absolute', 
        bottom: 100, 
    },
    logo:{
        width:250,
        height:250,
    },
    logocontainer:{
        alignItems: "center",
        
    },
    welcomeText:{
    fontSize: 20,
    color: 'blue',
    marginTop: 20,
    }
});
export default SplashScreen;
/*
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function SplashScreen({ navigation }) {
    const pressHandler=()=>{
        navigation.navigate('NextScreen');
    }
    return (
        <ImageBackground style={styles.background} source={require("../assets/background.png")}>
            <View style={styles.logocontainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
                <Text style={styles.welcomeText}>TO DO LIST</Text>
            </View>
            <TouchableOpacity style={styles.StartButton} onPress={pressHandler}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background:{
        flex:1,
        alignItems:"center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
      },

    StartButton:{
        width: '100%',
        height: 60,
        backgroundColor: 'purple',
        justifyContent: 'center', 
        alignItems: 'center', 
        //borderRadius: 10, 
        position: 'absolute', 
        bottom: 100, 
    },
    logo:{
        width:250,
        height:250,
    },
    logocontainer:{
        alignItems: "center",
        
    },
    welcomeText:{
    fontSize: 20,
    color: 'blue',
    marginTop: 20,
    }
});

export default SplashScreen;*/
