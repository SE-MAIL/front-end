import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoSub}>
        안녕하세요, 
      </Text>
      <Text style={styles.logo}>
        시나브로
      </Text>
      <Text style={styles.logoSub2}>
        Cinabro
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
  logo: {
    margin: 24,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logoSub2: {
    margin: -50,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888181',
  },
  
});
