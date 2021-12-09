import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScreenWrapper} from '../../common/wrapper';
import ProgressCircle from 'react-native-progress-circle';
import {
  heightPercentage,
  widthPercentage,
} from '../../../assets/defualt/responsive';
import {faShower, faCar, faDesktop} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {getHome} from '../../api/axios';
import {useToken} from '../../context/tokenContext';
import {useFocusEffect} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 8,
    height: '20%',
  },
  globe: {
    flex: 1,
    width: 64,
    height: 64,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: -100,
    opacity: 0.2,
    transform: [{rotate: '-23deg'}],
  },
  logo: {
    flex: 1,
    textAlign: 'center',
    height: '50%',
    width: '100%',
    margin: 0,
    paddingTop: 40,
    paddingRight: 15,
    fontSize: 32,
    color: 'white',
  },
  buttonBox: {
    height: heightPercentage(150),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    height: heightPercentage(130),
    width: widthPercentage(110),
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000080',
    borderRadius: 10,
  },
  button2: {
    height: heightPercentage(130),
    width: widthPercentage(110),
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000cd',
    borderRadius: 10,
    alignItems: 'center',
  },
  button3: {
    height: heightPercentage(130),
    width: widthPercentage(110),
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default function Home() {
  const [home, setHome] = useState();
  const [average, setAve] = useState(0);
  const {token, setToken} = useToken();

  const getHomeEmissions = () => {
    getHome(token)
      .then(result => {
        const {familyemissions} = result.data;
        console.log(home);
        setHome(familyemissions);
        setAve(9020);
        console.log(JSON.stringify(result, null, 4));
      })
      .catch(error => {
        console.log(JSON.stringify(error, null, 4));
        console.log(JSON.stringify(error.request, null, 4));
      });
  };
  useFocusEffect(
    React.useCallback(() => {
      getHomeEmissions();
    }, [home]),
  );

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          style={styles.globe}
          source={require('../../../assets/environmentw.png')}
        />
        <Text style={styles.logo}>안녕하세요, 사용자님</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          flex: 2,
        }}>
        <ProgressCircle
          percent={60}
          //percent={home}
          radius={150}
          borderWidth={10}
          color="#16CA1C"
          shadowColor="#FFF"
          bgColor="#000">
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#16CA1C',
              opacity: 0.4,
              marginBottom: -15,
            }}>
            {'C02'}
          </Text>
          <Text style={{fontSize: 60, fontWeight: 'bold', color: '#16CA1C'}}>
            {`${home} g`}
          </Text>
          <Text style={{fontSize: 18, opacity: 0.5, color: '#fff'}}>
            {`평균 배출량: ${average} g`}
          </Text>
        </ProgressCircle>
        <Text
          style={{fontSize: 24, opacity: 0.8, color: '#fff', marginTop: 30}}>
          {'추천 행동'}
        </Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.button}>
          <FontAwesomeIcon icon={faShower} size={80} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <FontAwesomeIcon icon={faCar} size={80} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <FontAwesomeIcon icon={faDesktop} size={80} color={'black'} />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}
