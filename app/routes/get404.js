import Page from '../classes/Page';

export default (req, res) => {
  const { session = {} } = req;
  const templatePath = '/templates/404.twig';
  const pageDetails = {
    templatePath,
    templateVariables: {
      errors: session.errors,
    },
  };
  if (session.errors) {
    delete session.errors;
  }
  const page = new Page(pageDetails);
  res.send(page.render());
};
