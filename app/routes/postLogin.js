import request from 'request';

function flarum({ identification, password }) {
  return {
    method: 'POST',
    url: process.env.FLARUM_URL,
    headers: {
      'cache-control': 'no-cache',
      'content-type': 'application/x-www-form-urlencoded',
    },
    form: { password, identification },
  };
}

function clientsService(forumId) {
  return {
    method: 'PUT',
    url: `${process.env.CLIENTS_SERVICE_URL}/user`,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ forumId }),
  };
}

export default (req, res) => {
  request(flarum(req.body), (error, response, body) => {
    if (error) throw new Error(error);
    const payload = JSON.parse(body);
    const forumId = payload.userId;

    request(clientsService(forumId), (err, resp, userBody) => {
      res.json(userBody);
    });
  });
};
