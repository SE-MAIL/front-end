import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'http://ec2-3-35-173-26.ap-northeast-2.compute.amazonaws.com:8080',
});
baseAxios.defaults.headers.post['Content-Type'] = 'application/json';

export const postSignIn = ({id = '', pw = ''}) => {
  return baseAxios.post('manager/signIn', {
    id,
    password: pw,
  });
};

//함수 네이밍 방법
export const postLogin = (id, pw) => {
  return baseAxios.post('/api/token/', {username: id, password: pw});
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
