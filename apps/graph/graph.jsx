import React, {Component} from 'react';
import {View, Text, StyleSheet, AppRegistry, TouchableOpacity } from 'react-native';


export default function Graph() {
        return (
            

            <View style={styles.container}>
                <Text style={styles.content}>
                    이번달 배출량                   100kg
                </Text>
                <Text style={styles.content}>
                    전 월                                  100kg
                </Text>
                <Text style={styles.content}>
                    작년동월                           100kg
                </Text>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: 'black',
    },
    wrapContent: {
        width: '100%',
        height: '5%',
        paddingBottom: '33%',
        backgroundColor: 'black',
        
    },
    content: {
        width: '100%',
        height: '12%',
        backgroundColor: "#71AACC",
        borderRadius: 20,
        padding: 32,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },

    value: {
        flexDirection: 'row',
        width: '100%',
        height: '12%',
    }
})