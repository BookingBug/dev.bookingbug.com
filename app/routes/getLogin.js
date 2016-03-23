import Page from '../classes/Page';

export default (req, res) => {
  const templatePath = '/templates/login.twig';
  const page = new Page({ templatePath });
  res.send(page.render());
};