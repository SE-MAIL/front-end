import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.globe}
        source={require('../../../assets/logo2.png')}
      />
      <View style={styles.input}>
        <TextInput style={styles.textInput} placeholder="이름" />
        <TextInput style={styles.textInput} placeholder="나이" />
        <TextInput style={styles.textInput} placeholder="성별" />
        <Button title="회원가입" />
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
