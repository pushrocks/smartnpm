
export interface ISearchObject {
  // name
  name?: string

  // metadata
  author?: string
  maintainer?: string
  scope?: string
  keywords?: string[]

  // status
  deprecated?: boolean
  unstable?: boolean
  insecure?: boolean

  // search behaviour
  boostExact?: boolean
  scoreEffect?: number

  // Analytics
  qualityWeight?: number
  popularityWeight?: number
  maintenanceWeight?: number
}
