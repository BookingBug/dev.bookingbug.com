import fs from 'fs';
import marked from 'marked';
import Page from '../classes/Page';

export default (req, res) => {
  const { category, doc = 'index' } = req.params;
  const docsPath = `${process.cwd()}/docs/${category}/${doc}.md`;

  fs.readFile(docsPath, (err, data) => {
    if (err) return res.sendStatus(500);

    const templatePath = '/templates/default.twig';
    const content = marked(data.toString());

    const page = new Page({
      templatePath,
      content,
    });

    res.send(page.render());

    return true;
  });
};
