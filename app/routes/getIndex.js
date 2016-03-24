import fs from 'fs';
import marked from 'marked';
import Page from '../classes/Page';

export default (req, res) => {
  const indexPath = `${process.cwd()}/docs/index.md`;

  fs.readFile(indexPath, (err, data) => {
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
