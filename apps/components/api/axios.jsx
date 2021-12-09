import axios from 'axios';
import {useToken} from '../context/tokenContext';

export const baseAxios = axios.create({
  baseURL: 'http://ec2-3-35-173-26.ap-northeast-2.compute.amazonaws.com:8080',
});

baseAxios.defaults.headers.post['Content-Type'] = 'application/json';

//함수 네이밍 방법
export const postLogin = (id, pw) => {
  return baseAxios.post('/api/token', {username: id, password: pw});
};

export const getShower = token => {
  console.log(token);
  console.log('getShower()');
  return baseAxios.get('/emissions/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPersonaldata = token => {
  console.log('getPersonaldata()');
  return baseAxios.get('/personaldata/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const getHome = token => {
  console.log(token);
  console.log('getHome()');
  return baseAxios.get('family/emissions', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// axios
//   .post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
