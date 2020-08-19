// const store = require('../redux/store');
// // import가 아닌 require를 쓸 때 store.default로 접근해야 한다.
// const { token } = store.default.getState().userReducer;
// const { setToken } = require('../redux/actions');
// module.exports = {
//   mentor: {
//     test: () => console.log('token: ', token),
//     get: (url) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
//       headers: {
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     })
//       .then((res) => res.json()).catch((err) => console.log(`mentor GET ERR: ${err}`)),
//     post: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     })
//       .then((res) => {
//         if (res.status === 200) {
//           return res.json();
//         }
//         if (res.status === 201) {
//           return res.text();
//         }
//       // 그 이외의 status 들은 클라이언트 쪽에서 undefined
//       })
//       .catch((err) => console.log(`mentor POST ERR: ${err}`)),
//     patch: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
//       method: 'PATCH',
//       body: JSON.stringify(body),
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     }).then((res) => {
//       if (res.status === 200) {
//         if (res.status === 200) {
//           return res.json();
//         }
//         if (res.status === 201) {
//           return res.text();
//         }
//       }
//     })
//       .catch((err) => console.log(`mentor GET ERR: ${err}`)),
//   },
//   mentee: {
//     get: (url) => fetch(`http://14.50.138.127:3001/mentee${url}`, {
//       headers: {
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     }).then((res) => res.json()),
//     post: (url, body) => fetch(`http://14.50.138.127:3001/mentee${url}`, {
//       method: 'POST',
//       body: JSON.stringify(body),
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     }).then(async (res) => {
//       const token = res.headers.get('x-access-token');
//       console.log(`token: ${token}`);
//       if(token) // x-access-token이 있다면
//       {
//         // store에 token을 저장한다.
//         await store.default.dispatch(setToken(token));
//         console.log('check: ', store.default.getState().token);
//       }

//       if (res.status === 200) {
//         return res.json();
//       }
//       if (res.status === 201) {
//         return res.text();
//       }

//       if (res.status === 409) {
//         return res.text();
//       }

//       // 그 이외의 status 들은 클라이언트 쪽에서 undefined
//     })
//       .catch((err) => {
//         console.log('err: ', err);
//       }),
//     patch: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
//       method: 'PATCH',
//       body: JSON.stringify(body),
//       credentials: 'include',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': token, // store에 저장되어 있는 token을 추가한다.
//       },
//     }).then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       }

//       if (res.status === 201) {
//         return res.text();
//       }

//       if (res.status === 409) {
//         return res.text();
//       }
//     })
//       .catch((err) => console.log(`mentor GET ERR: ${err}`)),
//   },
// };
