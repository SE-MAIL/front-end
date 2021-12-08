import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function SignUp() {

  return (
    <View style={styles.container}>
      <Image style={styles.globe} source={require('../../../assets/logo2.png')} />
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="아이디" />
        <TextInput style={styles.textInput} placeholder="비밀번호" />
        <TextInput style={styles.textInput} placeholder="비밀번호 재입력" />
        <Button title="다음" />
        <Button title="등록된 가구에 참여하기" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 9,
  },
  logo: {
    margin: 0,
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  globe: {
    width: '50%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  textInput: {
    width: 200,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  input: {
    width: 300,
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stack: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
