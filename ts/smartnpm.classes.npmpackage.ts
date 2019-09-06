import * as plugins from './smartnpm.plugins';

export class NpmPackage { 
  public static async createFromFullMetadata(fullMetadata: plugins.packageJson.FullMetadata) {
    const npmPackage = new NpmPackage();
    Object.assign(npmPackage, fullMetadata);
    return npmPackage;
  }

  // INSTANCE
  public name: string = null;
  public scope: string = null;
  public version: string = null;
  public description: string = null;
  public keywords: string[] = null;
  public date: string;
  public license: string;
  public links: {
    npm: string;
    homepage: string;
    repository: string;
    bugs: string;
  };
  public author: {
    name: 'Lossless GmbH';
  };
  public publisher: {
    username: 'gitzone';
    email: 'npm@git.zone';
  };
  public maintainers: any = null;
  public score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  } = null;
  public searchScore: number = null;
}
