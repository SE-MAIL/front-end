import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.globe} source={require('../assets/environmentw.png')} />
      <Text style={styles.logo}>
        안녕하세요, 사용자님
      </Text>
      <Text style={{textAlign:'center', fontSize: 40, opacity: 0.4, color:'#16CA1C', marginBottom: -15,fontWeight:'bold',}}>
        C02
      </Text>
      <Text style={{textAlign:'center', fontSize: 70,fontWeight:'bold', color:'#16CA1C'}}>
        120kg
      </Text>
      <Text style={{textAlign:'center', fontSize: 20,fontWeight:'bold', color:'#dbe1db', opacity: 0.5, marginTop: -10}}>
        평균 배출량: 200kg
      </Text>
      <Text style={styles.textUnder}>
        월간 C02 배출량
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 8,
  },
  logoSub: {
    margin: -30,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#73bf69',
  },
  globe: {
    width: '20%',
    height: '20%',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: -100,
    opacity: 0.2,
    transform: [{rotate: '-23deg'}],
  },
  logo: {
    margin: 30,
    fontSize: 31,
    fontWeight: 'bold',
    color: 'white',
  },
  textUnder: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888181',
  },
  
});
