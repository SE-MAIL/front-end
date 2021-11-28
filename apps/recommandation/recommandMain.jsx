import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet } from 'react-native';


export default function recommandMain() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>
                Title
                </Text>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                    <Text style={styles.txt}>
                        샤워
                    </Text>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content}></View>
                    <Text style={styles.txt}>
                        전기밥솥
                    </Text>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content2}></View>
                    <Text style={styles.txt}>
                    냉장고
                    </Text>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content3}></View>
                    <Text style={styles.txt}>
                        재활용
                    </Text>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content3}></View>
                    <Text style={styles.txt}>
                        에너지 아끼기
                    </Text>
                </View>
                <View style={styles.wrapContent}>
                    <View style={styles.content3}></View>
                    <Text style={styles.txt}>
                        저탄소 제품 사용
                    </Text>
                </View>
            </ScrollView>
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
    title: {
        width: '100%',
    },
    txt: {
        width: '100%',
        fontSize: 26,
        marginLeft: 35,
        marginTop: -70,
        color: 'white',
    },
    content: {
        width: '100%',
        height: 100,
        backgroundColor: "#0044FF",
        borderRadius: 10,
    },
    content2: {
        width: '100%',
        height: 100,
        backgroundColor: "#3388FF",
        borderRadius: 10,
    },
    content3: {
        width: '100%',
        height: 100,
        backgroundColor: "#33aaff",
        borderRadius: 10,
    }
})