module.exports = {
  mentor: {
    get: (url) => fetch(`http://14.50.138.127:3001/mentor${url}`)
      .then((res) => res.json()),
    post: (url, body) => fetch(`http://14.50.138.127:3001/mentor${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json()),
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
    })
      .then((res) => res.json()),
  },
};
