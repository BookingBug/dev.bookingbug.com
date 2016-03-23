import request from 'request';

export default (req, res) => {
  const options = {
    method: 'POST',
    url: 'https://discuss.flarum.org/api/token',
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: {
      identification: req.body.username,
      password: req.body.password,
    },
  };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    res.send(body);
  });
};
