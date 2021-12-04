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
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {
  heightPercentage,
  widthPercentage,
} from '../../../assets/defualt/responsive';
import {ScreenWrapper} from '../../common/wrapper';

export default function Login() {
  const navigation = useNavigation();
  loginBtnClickListener = () => {
    navigation.navigate('Login');
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
        <TextInput style={styles.textInput} placeholder="아이디" />
        <TextInput style={styles.textInput} placeholder="비밀번호" />
        <Button
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}
          title="로그인"
        />
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
});
