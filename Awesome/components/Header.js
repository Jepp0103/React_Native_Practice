import React from 'react';
import { StyleSheet, Image, TextInput, Text, View } from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style = {styles.text}>{'Shopping market'}</Text>
        </View>
    );
};

// Header.defaultProps = {
//     title: 'Shopping market',
// }

const styles = StyleSheet.create({
    header: {
        height: 70,
        width: 300,
        padding: 15,
        marginTop: 30,
        backgroundColor: 'purple'
    },
    text: {
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',
    },
});

export default Header;