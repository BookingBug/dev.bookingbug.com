import Page from '../classes/Page';
import request from 'request';

function getCompanies() {
  // not yet associated with user
  return {
    method: 'GET',
    url: `${process.env.CLIENTS_SERVICE_URL}/companies`,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(),
  };
}

function getFlarumUser({ forumId, forumToken }) {
  return {
    method: 'GET',
    url: `${process.env.FLARUM_URL}/api/users/${forumId}`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Token ${forumToken}`,
    },
    body: JSON.stringify({ forumId }),
  };
}

function getFlarumDiscussions(forumToken) {
  return {
    method: 'GET',
    url: `${process.env.FLARUM_URL}/api/discussions`,
    headers: {
      'content-type': 'application/json',
      Authorization: `Token ${forumToken}`,
    },
  };
}

export default (req, res) => {
  request(getCompanies(), (error, response, body) => {
    const companies = JSON.parse(body);
    const user = req.session;
    const { forumId, forumToken } = req.session;

    request(
      getFlarumUser({ forumId, forumToken }),
      (userError, userResponse, userBody) => {
        const flarumUser = JSON.parse(userBody);
        request(
          getFlarumDiscussions(forumToken),
          (discussionError, discussionResponce, discussionBody) => {
            const flarumDiscussions = JSON.parse(discussionBody);

            const templatePath = '/templates/account.twig';
            const page = new Page({
              templatePath,
              templateVariables: {
                companies,
                user,
                flarumUser,
                flarumDiscussions,
                flarumURL: process.env.FLARUM_URL,
              },
            });
            res.send(page.render());
          });
      });
  });
};
