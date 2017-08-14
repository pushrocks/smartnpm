import * as plugins from './smartnpm.plugins'

interface ISearchObject {
  // metadata
  author?: string
  maintainer: string
  scope?: string
  deprecated?: boolean
  unstable?: boolean
  insecure?: boolean
  boostExact: boolean
  scoreEffect: number

  // Analytics
  qualityWeight: number
  popularityWeight: number
  maintenanceWeight: number
}

export class NpmRegistry {
  search (searchObject: ISearchObject) {
    let response = await plugins.Smartrequest
  }
}
