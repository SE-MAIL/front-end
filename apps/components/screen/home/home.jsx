import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Platform} from 'react-native';
import {ScreenWrapper} from '../../common/wrapper';
import ProgressCircle from 'react-native-progress-circle';


export default function Home() {

  // const [home,Sethome] = useState();

  // const getHome = () => {
  //   getHome(token)
  //     .then(result => {
  //       const {} = 
  //       console.log('getHome()');
  //       console.log(home);
  //       Sethome(home);
  //       console.log(JSON.stringify(result, null, 4));
  //     })
  //     .catch(error => {
  //       console.log(JSON.stringify(error, null, 4));
  //       console.log(JSON.stringify(error.request, null, 4));
  //     });
  // };

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
            {'120kg'}
          </Text>
          <Text style={{fontSize: 18, opacity: 0.5, color: '#fff'}}>
            {'평균 배출량: 200kg'}
          </Text>
        </ProgressCircle>
        <Text
          style={{fontSize: 24, opacity: 0.8, color: '#fff', marginTop: 30}}>
          {'월간 C02 배출량'}
        </Text>
      </View>
      <Image
        style={styles.homeRecomend}
        source={require('../../../assets/homeRecommend.png')}
      />
    </ScreenWrapper>
  );
}

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
  homeRecomend: {
    flex: 1,
    marginLeft: 20,
    height: '80%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    marginBottom: 0,
  },
});
