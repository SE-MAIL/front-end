import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  CheckBox,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  heightPercentage,
  widthPercentage,
} from '../../../assets/defualt/responsive';
import {ScreenWrapper} from '../../common/wrapper';
import {postLogin} from '../../api/axios';
import axios from 'axios';

export default function Login() {
  const navigation = useNavigation();

  const [id, setId] = React.useState('');
  const [pw, setPw] = React.useState('');

  loginBtnClickListener = () => {
    console.log(id);
    console.log(pw);
    // postLogin(id, pw)
    axios.post('http://ec2-3-35-173-26.ap-northeast-2.compute.amazonaws.com:8080/api/token', {username:id, password:pw})
      .then(result => {
        console.log(JSON.stringify(result, null, 4));
        navigation.navigate('BottomTabNavigator');
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 4));
        console.log(JSON.stringify(error.request, null, 4));
      });
  };
  signUpBtnClickListener = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScreenWrapper>
      <View style={styles.logoBox}>
        <View style={styles.globe}>
          <Image
            style={styles.globe}
            source={require('../../../assets/logo2.png')}
          />
        </View>
      </View>
      <View style={styles.textInputBox}>
        <TextInput
          style={styles.textInput}
          onChangeText={str => setId(str)}
          placeholder="아이디"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInput}
          onChangeText={str2 => setPw(str2)}
          placeholder="비밀번호"
        />
        <TouchableOpacity
          onPress={() => loginBtnClickListener()}
          style={styles.blueButton}>
          <Text style={styles.blue}>로그인</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBox}>
        <View style={styles.stack}>
          <TouchableOpacity style={styles.subButton}>
            <Text style={styles.subButtonText}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.subButton}>
            <Text style={styles.subButtonText}>아이디 찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              signUpBtnClickListener();
            }}
            style={styles.subButton}>
            <Text style={styles.subButtonText}>회원가입 하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logoBox: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  globe: {
    marginTop: heightPercentage(30),
    width: widthPercentage(150),
    height: heightPercentage(150),
    resizeMode: 'contain',
  },
  textInputBox: {
    flex: 3,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: widthPercentage(300),
    marginBottom: 10,
    paddingHorizontal: 10,
    height: heightPercentage(40),
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
  buttonBox: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    flex: 4,
  },
  stack: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subButton: {
    height: heightPercentage(19),
    marginRight: widthPercentage(5),
  },
  subButtonText: {
    fontSize: 13,
    color: 'gray',
  },
  blueButton: {
    backgroundColor: '#3388FF',
    color: 'white',
    width: '77%',
    borderRadius: 8,
    height: 32,
  },
  blue: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  logincheck: {
    color: 'white',
    textAlign: 'left',
  },
});
