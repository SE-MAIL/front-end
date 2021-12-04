import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function Login() {
  const navigation = useNavigation();
  loginBtnClickListener = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.globe}
        source={require('../../../assets/logo2.png')}
      />
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="아이디" />
        <TextInput style={styles.textInput} placeholder="비밀번호" />
        <Button
          onPress={() => {
            navigation.navigate('HomeNavigator');
          }}
          title="로그인"
        />
      </View>
      <View style={styles.stack}>
        <Button title="비밀번호 찾기" />
        <Button title="아이디 찾기" />
        <Button title="회원가입 하기" />
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
