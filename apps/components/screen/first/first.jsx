import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function First() {
  const navigation = useNavigation();
  loginBtnClickListener = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.logoSub}>모르는 사이에 조금씩 조금씩</Text>
      <Text style={styles.logo}>시나브로</Text>
      <Text style={styles.logoSub2}>Cinabro</Text>
      <TouchableOpacity
        onPress={() => {
          loginBtnClickListener();
        }}>
        <Image
          style={styles.first}
          source={require('../../../assets/start.png')}
        />
        <Image
          style={styles.second}
          source={require('../../../assets/environmentw.png')}
        />
      </TouchableOpacity>
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
    margin: -27,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#73bf69',
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
  first: {
    position: 'absolute',
    bottom: 0,
    left: 5,
  },
  second: {
    position: 'absolute',
    bottom: 140,
    width: '15%',
    height: '15%',
    marginLeft: 165,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    opacity: 0.3,
    transform: [{rotate: '-23deg'}],
  },
});
