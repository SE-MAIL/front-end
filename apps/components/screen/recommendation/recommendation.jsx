/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import Modal from 'react-native-simple-modal';
import {ScreenWrapper} from '../../common/wrapper';
import axios from 'axios';
import {baseAxios} from '../../api/axios';
import {getPersonaldata} from '../../api/axios';
import {getShower} from '../../api/axios';
import {useToken} from '../../context/tokenContext';

export default function Recommendation() {
  LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);
  const [open, setOpen] = useState(false);
  const {token, setToken} = useToken();
  const [sum, setSum] = useState();
  const [reduction, setReduction] = useState();
  const [ave, setAve] = useState();

  const getShowerListener = () => {
    setOpen(true);
    getShower(token)
      .then(result => {
        const {sum} = result.data;
        console.log('getShowerResult');
        console.log(sum);
        let now = new Date();
        let todayDate = now.getDate();
        console.log(todayDate);
        setSum(sum / todayDate);
        setAve(2130);
        console.log(JSON.stringify(result, null, 4));
      })
      .catch(error => {
        console.log('error');
        console.log(JSON.stringify(error, null, 4));
        console.log(JSON.stringify(error.request, null, 4));
      });
    getPersonaldataListener();
  };

  const getPersonaldataListener = () => {
    getPersonaldata(token)
      .then(result => {
        //초당 1.8g 배출
        const {reduction} = result.data;
        console.log('getPersonaldata');
        console.log(reduction);
        setReduction(parseInt(reduction / 1.8));
        console.log(JSON.stringify(result, null, 4));
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 4));
        console.log(JSON.stringify(error.request, null, 4));
      });
  };

  const showerClickListener = () => {
    getShower(token);
  };
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{`탄소배출 줄이기 : 추천행동`}</Text>

        <View style={styles.wrapContent}>
          <TouchableOpacity onPress={() => getShowerListener()}>
            <View style={styles.content}></View>
            <Text style={styles.txt}>샤워</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapContent}>
          <TouchableOpacity>
            <View style={styles.content}></View>
            <Text style={styles.txt}>전기밥솥</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapContent}>
          <TouchableOpacity>
            <View style={styles.content2}></View>
            <Text style={styles.txt}>냉장고</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapContent}>
          <TouchableOpacity>
            <View style={styles.content2}></View>
            <Text style={styles.txt}>재활용</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapContent}>
          <TouchableOpacity>
            <View style={styles.content3}></View>
            <Text style={styles.txt}>에너지 아끼기</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapContent}>
          <TouchableOpacity>
            <View style={styles.content3}></View>
            <Text style={styles.txt}>저탄소 제품 사용</Text>
          </TouchableOpacity>
        </View>

        <Modal
          open={open}
          modalDidClose={() => setOpen(false)}
          modalStyle={{
            backgroundColor: '#7BA9CC',
            borderRadius: 10,
            marginBottom: '130%',
          }}
          style={{alignItems: 'center', backgroundColor: '#000'}}>
          <View>
            <Text
              style={{
                fontSize: 23,
                marginBottom: 20,
                padding: 5,
                color: '#fff',
                fontWeight: 'bold',
              }}>
              샤워 - {reduction}g 배출감소 가능
            </Text>

            <Text style={styles.popTextTop}>평균 배출량: {ave}g</Text>
            <Text style={styles.popTextTop}>나의 배출량: {sum}g</Text>
            <Text style={styles.popTextBottom}>
              ① 시나에게 "나 사워할게"라고 말해보세요{' '}
            </Text>
            <Text style={styles.popTextBottom}>
              ② 스마트미러에 샤워 타이머가 나타납니다!{' '}
            </Text>
            <Text style={styles.popTextBottom}>
              ③ 샤워 끝나고 시나에게 알려주세요!{' '}
            </Text>
            <TouchableOpacity
              style={{
                margin: 15,
                backgroundColor: '#0044FF',
                height: 35,
                borderRadius: 5,
              }}
              onPress={() => setOpen(false)}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 14,
                  paddingTop: 7,
                  fontWeight: 'bold',
                }}>
                확인했습니다!
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    backgroundColor: 'black',
  },
  wrapContent: {
    width: '100%',
    height: '5%',
    paddingBottom: '32%',
    backgroundColor: 'black',
  },
  title: {
    width: '100%',
    height: 50,
    flex: 0.1,
    marginBottom: 0,
    color: 'white',
    fontSize: 26,
    marginBottom: -30,
  },
  txt: {
    width: '100%',
    fontSize: 26,
    marginLeft: 35,
    marginTop: -70,
    color: 'white',
  },
  content: {
    width: '100%',
    height: 100,
    backgroundColor: '#0044FF',
    borderRadius: 10,
  },
  content2: {
    width: '100%',
    height: 100,
    backgroundColor: '#3388FF',
    borderRadius: 10,
  },
  content3: {
    width: '100%',
    height: 100,
    backgroundColor: '#33aaff',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 26,
  },
  popTextTop: {
    marginBottom: 20,
    fontSize: 26,
    margin: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
  popTextBottom: {
    marginBottom: 10,
    paddingTop: 10,
    fontSize: 14,
    margin: 5,
    color: '#fff',
    fontWeight: 'bold',
  },
});
