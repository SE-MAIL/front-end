/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
  Script,
} from 'react-native';
import Modal from 'react-native-simple-modal';
import {ScreenWrapper} from '../../common/wrapper';
import axios from 'axios';
import {getEmissions} from '../../api/axios';
import { getPersonaldata } from '../../api/axios';

export default class Recommendation extends React.Component {
  state = {open: false};

getEmissionsListener = () => {
  getEmissions(idshower,starttime,endtime,takentime,emissions,sum,auth_user)
  .then(result => {
    console.log(JSON.stringify(result, null, 4));
  })
  .catch(error => {
    console.log(JSON.stringify(error, null, 4));
    console.log(JSON.stringify(error.request, null, 4));
  });
};

getPersonaldataListener = () => {
  getPersonaldata(id, targettime, reduction, auth_user)
  .then(result => {
    console.log(JSON.stringify(result, null, 4));
  })
  .catch(error => {
    console.log(JSON.stringify(error, null, 4));
    console.log(JSON.stringify(error.request, null, 4));
  });
};

  render() {
    return (
      <ScreenWrapper>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>
            {`현재 줄일 수 있는 탄소량 
CO2 <> kg`}
          </Text>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>샤워</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>전기밥솥</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content2}></View>
              <Text style={styles.txt}>냉장고</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content2}></View>
              <Text style={styles.txt}>재활용</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content3}></View>
              <Text style={styles.txt}>에너지 아끼기</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content3}></View>
              <Text style={styles.txt}>저탄소 제품 사용</Text>
            </TouchableOpacity>
          </View>

          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidClose={() => this.setState({open: false})}
            style={{alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 20, marginBottom: 30}}>
                샤워: kg 감소 가능
              </Text>

              <Text style={styles.popTextTop}>평균 배출량: %</Text>
              <Text style={styles.popTextTop}>나의 배출량: %</Text>
              <Text style={styles.popTextBottom}>
                1. 시나에게 "나 사워할게"라고 말해보세요{' '}
              </Text>
              <Text style={styles.popTextBottom}>
                2. 스마트미러에 샤워 타이머가 나타납니다!{' '}
              </Text>
              <Text style={styles.popTextBottom}>
                3. 샤워 끝나고 시나에게 알려주세요!{' '}
              </Text>
              <TouchableOpacity
                style={{margin: 5}}
                onPress={() => this.setState({open: false})}>
                <Text>확인했습니다!</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </ScreenWrapper>
    );
  }
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
    paddingBottom: '33%',
    backgroundColor: 'black',
  },
  title: {
    width: '100%',
    height: 50,
    flex: 0.1,
    marginBottom: 10,
    color: 'white',
    fontSize: 26,
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
  },
  popTextBottom: {
    marginBottom: 10,
  },
});
