import * as plugins from './smartnpm.plugins';
import { NpmRegistry } from './smartnpm.classes.npmregistry';

export class NpmPackage {
  public static async createFromFullMetadata(
    npmRegistryArg: NpmRegistry,
    fullMetadata: plugins.packageJson.FullMetadata
  ) {
    const npmPackage = new NpmPackage(npmRegistryArg);
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
  public dist: {
    integrity: string;
    shasum: string;
    tarball: string;
  };
  public score: {
    final: number;
    detail: {
      quality: number;
      popularity: number;
      maintenance: number;
    };
  } = null;
  public searchScore: number = null;

  public npmRegistry: NpmRegistry;
  constructor(npmRegistryArg: NpmRegistry) {
    this.npmRegistry = npmRegistryArg;
  }

  /**
   * saves the package to disk
   */
  public async saveToDisk(targetDir: string) {
    const smartarchiveInstance = new plugins.smartarchive.SmartArchive();
    await smartarchiveInstance.extractArchiveFromUrl(this.dist.tarball, targetDir);
  }
}
