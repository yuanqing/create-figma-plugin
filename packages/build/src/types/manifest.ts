export type Manifest = {
  api: string
  widgetApi?: string
  editorType: Array<string>
  containsWidget?: boolean
  id?: string
  name: string
  main: string
  ui?: string
  parameters?: Array<ManifestParameter>
  parameterOnly?: boolean
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  relaunchButtons?: Array<ManifestRelaunchButton>
  permissions?: Array<string>
  enableProposedApi?: boolean
  enablePrivatePluginApi?: boolean
  build?: string
}

export type ManifestMenuItem = {
  name: string
  command?: string
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  parameters?: Array<ManifestParameter>
  parameterOnly?: boolean
}

export type ManifestMenuItemSeparator = { separator: true }

export type ManifestParameter = {
  name: string
  key: string
  description?: string
  allowFreeform?: boolean
  optional?: boolean
}

export type ManifestRelaunchButton = {
  command: string
  name: string
  multipleSelection?: true
}
