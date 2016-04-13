import fs from 'fs';
import marked from 'marked';
import Page from '../classes/Page';

export default (req, res) => {
  const { category, page = 'index' } = req.params;
  const docsPath = `${process.cwd()}/docs/${category}/${page}.md`;
  
  fs.readFile(docsPath, (err, data) => {
    if (err) return res.sendStatus(500);

    const templatePath = '/templates/default.twig';
    const content = marked(data.toString());

    const page = new Page({
      templatePath,
      templateVariables: {
        content,
      },
    });

    res.send(page.render());

    return true;
  });
};
