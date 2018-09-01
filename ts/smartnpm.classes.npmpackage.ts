import * as plugins from './smartnpm.plugins';

export class NpmPackage {
  name: string = null;
  scope: string = null;
  version: string = null;
  description: string = null;
  keywords: string[] = null;
  date: '2017-08-02T11:22:49.144Z';
  links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  } = null;
  author: {
    name: 'Lossless GmbH';
  } = null;
  publisher: {
    username: 'gitzone';
    email: 'npm@git.zone';
  } = null;
  maintainers: any = null;
  score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  } = null;
  searchScore: number = null;

  constructor(descriptionArg) {
    for (let key in descriptionArg) {
      if (this[key] === null) {
        this[key] = descriptionArg[key];
      }
    }
  }
}
