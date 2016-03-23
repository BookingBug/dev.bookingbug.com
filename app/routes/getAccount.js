import Page from '../classes/Page';

export default (req, res) => {
  if (req.session) {
    const templatePath = '/templates/account.twig';
    const page = new Page({
      templatePath,
      templateVariables: {
        user: req.session,
      },
    });
    res.send(page.render());
  } else {
    return res.sendStatus(403);
  }
  return true;
};
