import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Color from '../constants/color';

const Submit = props => {
    return (
        <TouchableOpacity onPress={props.onPress}  style={[styles.container, {backgroundColor: Color.primary}]}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '60%',
        height: 50,
        borderRadius: 25,
        marginVertical: 10,
        borderWidth: 0,
        alignSelf: "center"
    },
   text: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'center',
        marginVertical: 10
    }
});

export default Submit;