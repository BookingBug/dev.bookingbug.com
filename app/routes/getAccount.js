import Page from '../classes/Page';

export default (req, res) => {
  const templatePath = '/templates/account.twig';
  const page = new Page({
    templatePath,
    templateVariables: {
      user: req.session,
    },
  });
  res.send(page.render());
};
