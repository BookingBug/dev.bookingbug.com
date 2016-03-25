import Page from '../classes/Page';

export default (req, res) => {
  let errors = req.session.errors;
  const templatePath = '/templates/login.twig';
  const page = new Page({
    templatePath,
    templateVariables: {
      errors,
    },
  });
  errors = null;
  res.send(page.render());
};
