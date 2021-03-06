import * as React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Button} from 'react-native';
import {ScreenWrapper} from '../../common/wrapper';

export default function Join() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          style={styles.globe}
          source={require('../../../assets/logo2.png')}
        />
        <View style={styles.input}>
          <TextInput style={styles.textInput} placeholder="이름" />
          <TextInput style={styles.textInput} placeholder="나이" />
          <TextInput style={styles.textInput} placeholder="성별" />
          <TextInput style={styles.textInput} placeholder="가구 ID" />
          <TouchableOpacity style={styles.blueButton}>
        <Text style={styles.blue}>등록된 가구에 참여하기</Text>
      </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
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
  blueButton: {
    backgroundColor: '#3388FF',
    color: 'white',
    width: '65%',
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
