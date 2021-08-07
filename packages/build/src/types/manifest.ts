export type Manifest = {
  name: string
  id?: string
  api: string
  editorType: Array<string>
  main: string
  ui?: string
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  parameters?: Array<ManifestParameter>
  parameterOnly?: boolean
  relaunchButtons?: Array<ManifestRelaunchButton>
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
