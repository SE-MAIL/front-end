import React, {Component} from 'react';
import {View, Text, StyleSheet, AppRegistry, TouchableOpacity } from 'react-native';


export default function Graph() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> 이번 달 배출량 </Text>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.content2}>배출량 자세히 보기</Text>
                </TouchableOpacity>
                <Text style={styles.title}> 배출량 비교 </Text>
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
    content2: {
        width: '35%',
        height: '20%',
        backgroundColor: "#BA974A",
        borderRadius: 20,
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: -50,
        marginLeft: 220,
        marginTop: 10,
    },

    value: {
        flexDirection: 'row',
        width: '100%',
        height: '12%',
    },
    title: {
        width: '100%',
        height: 50,
        flex: 0.2,
        marginBottom: 0,
        color: 'white',
        fontSize: 26,
    },
})