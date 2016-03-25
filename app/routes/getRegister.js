import Page from '../classes/Page';

export default (req, res) => {
  const { session } = req;
  const templatePath = '/templates/register.twig';
  const page = new Page({
    templatePath,
    templateVariables: {
      errors: session.errors,
    },
  });
  delete session.errors;
  res.send(page.render());
};
