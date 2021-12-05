import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
 
export default class App extends Component {
    render() {
      return (
        <View style={{ justifyContent : 'center',  height : 60,  alignItems : 'center', flexDirection: 'column', flex : 1 }} >
            <ProgressCircle
                percent={60}
                radius={150}
                borderWidth={30}
                color="#16CA1C"
                shadowColor="#FFF"
                bgColor="#fff">
                <Text style={{ fontSize: 60 , fontWeight : 'bold', color: '#16CA1C'}}>{'120kg'}</Text>
                <Text style={{ fontSize: 18 , fontWeight : 'bold', opacity: 0.5}}>{'평균 배출량: 200kg'}</Text>
            </ProgressCircle>
          </View>
      )
  }
}