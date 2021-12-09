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
        <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.blue}>회원가입</Text>
      </TouchableOpacity>
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
    width: 250,
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
  blueButton: {
    backgroundColor: '#3388FF',
    color: 'white',
    width: '82%',
    borderRadius: 8,
    height: 30,
  },
  blue: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
