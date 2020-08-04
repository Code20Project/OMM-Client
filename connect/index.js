module.exports = {
  mentor: {
    get: (url) => fetch(`http://14.50.138.127:3001${url}`)
      .then((res) => res.json()),
    post: (url, body) => fetch(`http://14.50.138.127:3001${url}`, {
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
    get: () => {},
    post: () => {},
  },
};
