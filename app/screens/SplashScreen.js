import React from 'react';
import { Image, ImageBackground,StyleSheet ,Text, View,TouchableOpacity} from 'react-native';

function SplashScreen(props) {
    return (
        <ImageBackground
        style={styles.background}
        source={require("../assets/background.png")}>
            <View style={styles.logocontainer}>
            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={styles.welcomeText}>Welcome</Text>
            </View>
           
    <TouchableOpacity style={styles.NextButton} onPress={() => console.log('next')}>
        <Text style={styles.buttonText}>Next</Text>
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

    NextButton:{
        width: 100,
        height: 60,
        backgroundColor: 'blue',
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 10, 
        position: 'absolute', 
        bottom: 30, 
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