import React, {useState} from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AddItem = ({title, addItem}) => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);
    
    return (
        <View style={styles.header}>
            <TextInput 
                placeholder="Add item" 
                style={styles.input} 
                onChangeText={onChange}
            />
            <TouchableOpacity style = {styles.btn} onPress={() => 
            addItem(text)}>
            <Text style={styles.btnText}><AntDesign name="pluscircleo" size={20}/> Add item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 300,
        padding: 8,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
    }, 
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    }
});

export default AddItem;