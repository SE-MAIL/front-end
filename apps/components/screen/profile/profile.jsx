/* eslint-disable react/no-unescaped-entities */
import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  AppRegistry,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-simple-modal';
import {ScreenWrapper} from '../../common/wrapper';

export default class Profile extends React.Component {
  state = {open: false};
  render() {
    return (
      <ScreenWrapper>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>프로필 설정</Text>
          <Text style={styles.title}>등록된 가구원 수 4명</Text>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>구성원1</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>구성원2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>구성원3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content}></View>
              <Text style={styles.txt}>구성원4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrapContent}>
            <TouchableOpacity onPress={() => this.setState({open: true})}>
              <View style={styles.content2}></View>
              <Text style={styles.add}>추가하기</Text>
            </TouchableOpacity>
          </View>

          <Modal
            offset={this.state.offset}
            open={this.state.open}
            modalDidClose={() => this.setState({open: false})}
            style={{alignItems: 'center'}}>
            <View>
              <TouchableOpacity
                style={{margin: 5}}
                onPress={() => this.setState({open: false})}>
                <Text>확인</Text>
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
    marginBottom: 5,
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
  add: {
    width: '100%',
    fontSize: 12,
    marginLeft: 22,
    marginTop: -22,
    color: 'white',
  },
  content: {
    width: '100%',
    height: 100,
    backgroundColor: '#63BAF8',
    borderRadius: 10,
  },
  content2: {
    width: '25%',
    height: 25,
    backgroundColor: '#0A6EF0',
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
