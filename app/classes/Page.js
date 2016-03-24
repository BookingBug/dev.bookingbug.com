import fs from 'fs';
import { twig } from 'twig';

export default class Page {
  constructor({ templatePath, templateVariables }) {
    this.templatePath = templatePath;
    this.templateVariables = templateVariables;
  }

  render() {
    const { templatePath, templateVariables } = this;
    return this.getTemplate(templatePath).render(templateVariables);
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
