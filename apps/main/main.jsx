import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.globe} source={require('../assets/environmentw.png')} />
      <Text style={styles.logo}>
        안녕하세요, 사용자님
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
    justifyContent: 'center',
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
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  logo: {
    margin: 24,
    fontSize: 25,
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
