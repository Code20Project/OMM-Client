module.exports = {
  mentor: {
    get: (url) => fetch(`http://14.50.138.127:3001/mentor${url}`)
      .then((res) => res.json()).catch((err) => console.log(`mentor GET ERR: ${err}`)),
    post: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
          return res.text();
        }
      // 그 이외의 status 들은 클라이언트 쪽에서 undefined
      })
      .catch((err) => console.log(`mentor POST ERR: ${err}`)),
    patch: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
          return res.text();
        }
      }
    })
      .catch((err) => console.log(`mentor GET ERR: ${err}`)),
  },
  mentee: {
    get: (url) => fetch(`http://14.50.138.127:3001/mentee${url}`)
      .then((res) => res.json()),
    post: (url, body) => fetch(`http://14.50.138.127:3001/mentee${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 201) {
        return res.text();
      }
      // 그 이외의 status 들은 클라이언트 쪽에서 undefined
    })
      .catch((err) => {
        console.log('err: ', err);
      }),
    patch: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => {
      if (res.status === 200) {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 201) {
          return res.text();
        }
      }
    })
      .catch((err) => console.log(`mentor GET ERR: ${err}`)),
  },
};
