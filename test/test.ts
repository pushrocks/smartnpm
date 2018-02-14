import { expect, tap } from 'tapbundle'
import * as smartnpm from '../ts/index'

let testRegistry: smartnpm.NpmRegistry
let testPackage: smartnpm.NpmPackage

tap.test('should create valid instances', async () => {
  testRegistry = new smartnpm.NpmRegistry()
  expect(testRegistry).to.be.instanceof(smartnpm.NpmRegistry)

  testPackage = new smartnpm.NpmPackage({})
  expect(testPackage).to.be.instanceof(smartnpm.NpmPackage)
})

tap.test('should produce a valid search string and this return npmts', async () => {
  let packages = await testRegistry.search({
    name: 'npmts'
  })
  expect(packages[0].name).to.equal('npmts')
})

tap.start()
