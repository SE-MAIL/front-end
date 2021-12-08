import React, {Component} from 'react';
import {View, Text, StyleSheet, AppRegistry, TouchableOpacity, Dimensions } from 'react-native';
import { ScreenWrapper } from '../../common/wrapper';
import { BarChart  } from 'react-native-chart-kit';

export default function Graph() {
        return (
            <ScreenWrapper>
            <View style={styles.container}>
                <Text style={styles.title}> 이번 달 배출량 </Text>
                <View style={styles.barcontainer}>
                <BarChart
        data={{
          labels: ['12/2', '12/3', '12/4', '12/5', '12/6'],
          datasets: [{ data: [4.3, 4.1, 2, 5.1, 6.3 ] }],
        }}
        width={Dimensions.get('window').width - 10}
        height={230}
        yAxisLabel={''}
        fromZero={'true'}
        chartConfig={{
          backgroundColor: '#000',
          barPercentage: 0.8,
          decimalPlaces: 0,
          fillShadowGradient: 'rgba(255,255,255,1)',
          fillShadowGradientOpacity: 1,
          color: (opacity = 1) => '#ECEFF1',
          labelColor: (opacity = 1) => 'rgba(255,255,255,1)',
          style: {
            borderRadius: 12, padding: 10
          },
          propsForBackgroundLines: {
              strokeWidth: 1,
              strokeDasharray: '0',
              stroke: '',
          }
        }}
      /></View>
                <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.content2}>배출량 자세히 보기</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.container}>
                <Text style={styles.title2}> 배출량 비교 </Text>
                <Text style={styles.content}>
                     당      월                             100kg
                </Text>
                <Text style={styles.content}>
                     전      월                             100kg
                </Text>
                <Text style={styles.content}>
                     작년동월                           100kg
                </Text>
            </View>
            </ScreenWrapper>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: 'black',
    },
    barcontainer: {
        flex: 3,
        padding: '0%',
        marginLeft: -30,
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
        height: 80,
        backgroundColor: "#71AACC",
        borderRadius: 20,
        padding: 25,
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    content2: {
        width: '35%',
        height: 18,
        backgroundColor: "#BA974A",
        borderRadius: 20,
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 0,
        marginLeft: 220,
        paddingLeft: 11,
        marginTop: 20,
    },

    value: {
        flexDirection: 'row',
        width: '100%',
        height: '12%',
    },
    title: {
        width: '100%',
        height: '100%',
        flex: 1,
        marginBottom: 0,
        color: 'white',
        fontSize: 26,
    },
    title2: {
        width: '100%',
        height: '100%',
        flex: 1,
        paddingBottom: 0,
        marginTop: -20,
        color: 'white',
        fontSize: 26,
    },
})