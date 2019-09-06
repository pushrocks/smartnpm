import { expect, tap } from '@pushrocks/tapbundle';
import * as smartnpm from '../ts/index';
import { NpmRegistry } from '../ts/index';

let npmRegistry: smartnpm.NpmRegistry;
let verdaccioRegistry: smartnpm.NpmRegistry;
let testPackage: smartnpm.NpmPackage;

// lets test things with the standard npm registry
tap.test('should create valid instances', async () => {
  npmRegistry = new smartnpm.NpmRegistry();
  expect(npmRegistry).to.be.instanceof(smartnpm.NpmRegistry);

  testPackage = new smartnpm.NpmPackage({});
  expect(testPackage).to.be.instanceof(smartnpm.NpmPackage);
});

tap.test('should produce a valid search string and this return npmts', async () => {
  const packages = await npmRegistry.search({
    name: 'npmts'
  });
  expect(packages[0].name).to.equal('npmts');
});

// lets test things with the verdaccio registry
tap.test('should create a verdaccio registry', async () => {
  verdaccioRegistry = new NpmRegistry({
    npmRegistryUrl: 'https://verdaccio.lossless.one'
  });
  expect(verdaccioRegistry).to.be.instanceOf(smartnpm.NpmRegistry);
});

tap.test('should get package from verdaccui', async () => {
  const packageInfo = await verdaccioRegistry.getPackageInfo('@pushrocks/smartupdate');
  expect(packageInfo.license).to.equal('MIT');
});

tap.start();
