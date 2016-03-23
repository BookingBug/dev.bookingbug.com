import fs from 'fs';
import { twig } from 'twig';

export default class Page {
  constructor({ templatePath, content }) {
    this.templatePath = templatePath;
    this.content = content;
  }

  render() {
    const { templatePath, content } = this;
    return this
      .getTemplate(templatePath)
      .render(templatePath, { content });
  }

  getTemplate() {
    const absolutePath = process.cwd() + this.templatePath;
    const templateData = fs.readFileSync(absolutePath).toString();

    return twig({
      data: templateData,
      namespaces: { bbug: 'templates/' },
    });
  }
}
