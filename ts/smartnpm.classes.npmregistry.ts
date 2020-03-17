import * as plugins from './smartnpm.plugins';
import * as paths from './smartnpm.paths';

// interfaces
import { ISearchObject } from './smartnpm.interfaces';

// classes
import { NpmPackage } from './smartnpm.classes.npmpackage';

export interface INpmRegistryConstructorOptions {
  npmRegistryUrl?: string;
}

export class NpmRegistry {
  public options: INpmRegistryConstructorOptions;
  public registry: string;
  private searchDomain = 'https://api.npms.io/v2/search?q=';

  constructor(optionsArg: INpmRegistryConstructorOptions = {}) {
    const defaultOptions: INpmRegistryConstructorOptions = {
      npmRegistryUrl: 'https://registry.npmjs.org'
    };
    this.options = {
      ...defaultOptions,
      ...optionsArg
    };
  }

  /**
   * gets info about a package
   * @param packageName
   */
  public async getPackageInfo(packageName: string): Promise<NpmPackage> {
    const fullMetadata = await plugins.packageJson(packageName, {
      registryUrl: this.options.npmRegistryUrl,
      fullMetadata: true
    });
    const npmPackage = await NpmPackage.createFromFullMetadata(this, fullMetadata);
    return npmPackage;
  }

  /**
   * saves a package to disk
   * @param packageName
   * @param targetDir
   */
  public async savePackageToDisk(packageName: string, targetDir: string): Promise<void> {
    const npmPackage = await this.getPackageInfo(packageName);
    await npmPackage.saveToDisk(targetDir);
  }

  /**
   * gets a file from a package as Smartfile
   */
  public async getFileFromPackage(packageName: string, filePath: string) {
    const baseDir = plugins.path.join(paths.nogitDir, packageName.replace('/', '__'));
    await plugins.smartfile.fs.ensureDir(baseDir);
    await this.savePackageToDisk(packageName, baseDir);
    const smartfile = await plugins.smartfile.Smartfile.fromFilePath(
      plugins.path.join(baseDir, 'package', filePath)
    );
    await plugins.smartfile.fs.remove(baseDir);
    return smartfile;
  }

  /**
   * searches for a package on npm
   * @param searchObjectArg
   */
  public async searchOnNpm(searchObjectArg: ISearchObject) {
    if (this.options.npmRegistryUrl !== 'https://registry.npmjs.org') {
      throw Error(`cannot search registries other than registry.gitlab.com`);
    }
    let searchString = '';
    const addToSearchString = (addStringArg: string) => {
      searchString = `${searchString}+${addStringArg}`;
    };

    // name
    if (searchObjectArg.name) {
      searchString = `${searchObjectArg.name}`;
    }

    // metadata
    if (searchObjectArg.author) {
      addToSearchString(`author:${searchObjectArg.author}`);
    }
    if (searchObjectArg.maintainer) {
      addToSearchString(`maintainer:${searchObjectArg.maintainer}`);
    }
    if (searchObjectArg.scope) {
      addToSearchString(`scope:${searchObjectArg.scope}`);
    }

    // status
    if (searchObjectArg.deprecated) {
      if (searchObjectArg.deprecated === true) {
        addToSearchString(`is:deprecated`);
      } else {
        addToSearchString(`not:deprecated`);
      }
    }
    if (searchObjectArg.unstable) {
      if (searchObjectArg.unstable === true) {
        addToSearchString(`is:unstable`);
      } else {
        addToSearchString(`not:unstable`);
      }
    }
    if (searchObjectArg.insecure) {
      if (searchObjectArg.insecure === true) {
        addToSearchString(`is:insecure`);
      } else {
        addToSearchString(`not:insecure`);
      }
    }

    // search behaviour
    if (searchObjectArg.boostExact) {
      addToSearchString(`boost-exact:${searchObjectArg.boostExact}`);
    }
    if (searchObjectArg.scoreEffect) {
      addToSearchString(`score-effect:${searchObjectArg.scoreEffect}`);
    }

    // analytics
    if (searchObjectArg.qualityWeight) {
      addToSearchString(`author:${searchObjectArg.qualityWeight}`);
    }
    if (searchObjectArg.popularityWeight) {
      addToSearchString(`author:${searchObjectArg.popularityWeight}`);
    }
    if (searchObjectArg.maintenanceWeight) {
      addToSearchString(`author:${searchObjectArg.maintenanceWeight}`);
    }

    plugins.smartlog.defaultLogger.log(
      'info',
      `Search on npm for ${plugins.consolecolor.coloredString(searchString, 'pink')}`
    );

    let body: any;
    try {
      const response = await plugins.smartrequest.getJson(this.searchDomain + searchString, {});
      body = response.body;
    } catch {
      // we do nothing
    }

    // lets create the packageArray
    const packageArray: NpmPackage[] = [];

    // if request failed just return it empty
    if (!body || typeof body === 'string') {
      return packageArray;
    }

    for (const packageSearchInfoArg of body.results) {
      const npmPackage = await this.getPackageInfo(packageSearchInfoArg.package.name);
      packageArray.push(npmPackage);
    }

    return packageArray;
  }
}
