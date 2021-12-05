import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {ScreenWrapper} from '../../common/wrapper';
import ProgressCircle from 'react-native-progress-circle'

export default function Home() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          style={styles.globe}
          source={require('../../../assets/environmentw.png')}
        />
        <Text style={styles.logo}>안녕하세요, 사용자님</Text>
      </View>
      <View style={{ justifyContent : 'center',  height : 10,  alignItems : 'center', flexDirection: 'column', flex : 0.8 }} >
            <ProgressCircle
                percent={60}
                radius={150}
                borderWidth={10}
                color="#16CA1C"
                shadowColor="#FFF"
                bgColor="#000">
                <Text style={{ fontSize: 40 , fontWeight : 'bold', color: '#16CA1C', opacity: 0.4, marginBottom: -15}}>{'C02'}</Text>
                <Text style={{ fontSize: 60 , fontWeight : 'bold', color: '#16CA1C'}}>{'120kg'}</Text>
                <Text style={{ fontSize: 18, opacity: 0.5, color: '#fff'}}>{'평균 배출량: 200kg'}</Text>
            </ProgressCircle>
            <Text style={{ fontSize: 24, opacity: 0.8, color: '#fff',marginTop: 30}}>{'월간 C02 배출량'}</Text>
          </View>
      
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 8,
    height: '20%',
  },
  globe: {
    flex: 1,
    width: 64,
    height: 64,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: -100,
    opacity: 0.2,
    transform: [{rotate: '-23deg'}],
  },
  logo: {
    margin: 35,
    fontSize: 30,
    color: 'white',
  },
});
