import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'http://ec2-3-35-173-26.ap-northeast-2.compute.amazonaws.com:8080',
});

baseAxios.defaults.headers.post['Content-Type'] = 'application/json';


//함수 네이밍 방법
export const postLogin = (id, pw) => {
  return baseAxios.post('/api/token', {username: id, password: pw});
};

export const getShower = (idshower,starttime,endtime,takentime,emissions,sum,auth_user) => {
  return baseAxios.get('/emissions/me', {idshower: idshower, starttime: starttime, endtime: endtime,takentime: takentime, emissions: emissions, sum: sum, auth_user: auth_user});
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
