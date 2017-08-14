import { expect, tap } from 'tapbundle'
import * as smartnpm from '../ts/index'

tap.test('first test', async () => {
  console.log(smartnpm.standardExport)
})

tap.start()
