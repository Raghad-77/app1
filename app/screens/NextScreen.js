
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert, SafeAreaView, View, Modal, TextInput } from 'react-native';

function NextScreen({ onBack }) {
    const [data, setData] = useState(null);
    const [addModalVisible, setAddModalVisible] = useState(false);
    const [viewModalVisible, setViewModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = () => {
        if (name && duration && description) {
            const newData = {
                name,
                duration,
                description
            };
            setData(newData);
            setAddModalVisible(false);
            setName('');
            setDuration('');
            setDescription('');
            Alert.alert('Success', 'Data has been saved');
        } else {
            Alert.alert('Error', 'Please fill in all fields');
        }
    };

    const handleView = () => {
        setViewModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.firstTitle}>My TodoList</Text>
            <TouchableOpacity style={[styles.button, styles.addButton]} onPress={() => setAddModalVisible(true)}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            {data && (
                <TouchableOpacity style={styles.dataContainer} onPress={handleView}>
                    <Text style={styles.dataText}>Name: {data.name}</Text>
                    <Text style={styles.dataText}>Duration: {data.duration}</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={addModalVisible}
                onRequestClose={() => { setAddModalVisible(!addModalVisible); }} >
                <View style={styles.modalView}>
                    <TextInput
                        placeholder="Task Name"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        placeholder="Duration"
                        style={styles.input}
                        value={duration}
                        onChangeText={setDuration}
                    />
                    <TextInput
                        placeholder="Description"
                        style={styles.input}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <TouchableOpacity style={styles.modalButton} onPress={handleSave}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.modalButton} onPress={() => setAddModalVisible(!addModalVisible)}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={viewModalVisible}
                onRequestClose={() => {
                    setViewModalVisible(!viewModalVisible);
                }}
            >
                <View style={styles.modalView}>
                    {data && (
                        <>
                            <Text style={styles.dataText}>Name: {data.name}</Text>
                            <Text style={styles.dataText}>Duration: {data.duration}</Text>
                            <Text style={styles.dataText}>Description: {data.description}</Text>
                        </>
                    )}
                    <TouchableOpacity style={styles.modalButton} onPress={() => setViewModalVisible(!viewModalVisible)}>
                        <Text style={styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        position: 'relative',
    },
    button: {
        position: 'absolute',
        width: '40%',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: 'green',
        bottom: 20,
        right: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    dataContainer: {
        position: 'absolute',
        bottom: 150,
        left: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 7,
        backgroundColor: 'white',
    },
    dataText: {
        fontSize: 18,
    },
    backButton: {
        width: 60,
        height: 30,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        left: 20,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    },
    firstTitle: {
        color: 'black',
        fontSize: 32,
        textAlign: 'center',
        top: 70,
        fontWeight: 'bold',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    input: {
        width: 250,
        height: 40,
        borderColor: 'black',
        borderWidth: 1.5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    modalButton: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
    },
});

export default NextScreen;

