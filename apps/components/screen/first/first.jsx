import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  widthPercentage,
  heightPercentage,
} from '../../../assets/defualt/responsive';

export default function First() {
  const navigation = useNavigation();
  loginBtnClickListener = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Text style={styles.logoSub}>모르는 사이에 조금씩 조금씩</Text>
        <Text style={styles.logo}>시나브로</Text>
        <Text style={styles.logoSub2}>Cinabro</Text>
      </View>

      <TouchableOpacity
        style={styles.imageBox}
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
    alignContent: 'center',
    backgroundColor: '#000000',
  },
  logoSub: {
    marginTop: heightPercentage(150),
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#73bf69',
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  logoSub2: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888181',
  },
  logoBox: {
    flex: 7,
    alignContent: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    flex: 3,
  },
  first: {
    width: widthPercentage(200),
    height: heightPercentage(240),
    position: 'absolute',
    bottom: 0,
    left: 5,
  },
  second: {
    position: 'absolute',
    bottom: 140,
    width: widthPercentage(64),
    height: heightPercentage(64),
    marginLeft: 165,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    opacity: 0.3,
    transform: [{rotate: '-23deg'}],
  },
});
