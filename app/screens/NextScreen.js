import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';

function NextScreen(props) {
    const [data, setData] = useState(null);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button, styles.connectButton]} onPress={() => console.log('bluetooth is connected')}>
                <Text style={styles.buttonText}>Connect</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.measureButton]} onPress={() => console.log('data taken from bluetooth')}>
                <Text style={styles.buttonText}>Measure</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={() => console.log('resetting')}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={() => {
                if (data) {
                    console.log('Data saved');
                    Alert.alert('Save', 'Data has been saved to a text file');
                } else {
                    Alert.alert('Save', 'No data to save');
                }
            }}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
            {data && (
                <View style={styles.dataContainer}>
                    <Text style={styles.dataText}>{data}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D8BFD8', 
        position: 'relative', 
    },
    button: {
        position: 'absolute',
        width: '40%', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    connectButton: {
        backgroundColor: 'yellow', 
        top: 35, 
        left: 20,
    },
    measureButton: {
        backgroundColor: 'yellow',  
        top: 35,
        right: 20,
    },
    resetButton: {
        backgroundColor: '#FF0000',  
        bottom: 20,
        left: 20,
    },
    saveButton: {
        backgroundColor: '#7ED321', 
        bottom: 20,
        right: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    dataContainer: {
        position: 'absolute',
        bottom: 80,  
        left: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: 'white', 
    },
    dataText: {
        fontSize: 18,
    },
});

export default NextScreen;
