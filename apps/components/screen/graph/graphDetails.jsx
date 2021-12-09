import React, {Component} from 'react';
import {View, Text, StyleSheet, AppRegistry, TouchableOpacity, Dimensions } from 'react-native';
import { ScreenWrapper } from '../../common/wrapper';
import { BarChart  } from 'react-native-chart-kit';

export default function Graph() {
        return (
            <ScreenWrapper>
            <View style={styles.container}>
            <Text style={styles.title}> 배출량 </Text>
                <View style={styles.stack}>
                <TouchableOpacity>
                <View style={styles.dateBtn2}>
                    <Text style={styles.dateBtnText}>일 </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View style={styles.dateBtn}>
                    <Text style={styles.dateBtnText}>월 </Text>
                </View>
                </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.barcontainer}>
                <BarChart
        data={{
          labels: ['12/2', '12/3', '12/4', '12/5', '12/6'],
          datasets: [{ data: [4.3, 4.1, 2, 5.1, 6.3 ] }],
        }}
        width={Dimensions.get('window').width - 10}
        height={400}
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
    containerflex: {
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
    title: {
        marginTop: 15,
        marginBottom: 10,
        color: 'white',
        fontSize: 26,
    },
    dateBtn: {
        width: 150,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        borderColor: '#3d3838',
    },
    dateBtn2: {
        width: 150,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#525252',
        borderStyle: 'solid',
        borderWidth: 2,
        margin: 10,
        borderColor: '#3d3838',
    },
    dateBtnText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 30,
        marginTop: 8,
    },
    stack: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})