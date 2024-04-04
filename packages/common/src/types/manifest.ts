export type Manifest = {
  api: string
  widgetApi?: string
  editorType: Array<string>
  containsWidget?: boolean
  id: string
  name: string
  main: string
  ui?: string
  parameters?: Array<ManifestParameter>
  parameterOnly?: boolean
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  relaunchButtons?: Array<ManifestRelaunchButton>
  build?: string
}

export type ManifestEditorType = 'dev' | 'figma' | 'figjam'

export type ManifestMenuItem = {
  name: string
  command?: string
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  parameters?: Array<ManifestParameter>
  parameterOnly?: boolean
}

export type ManifestMenuItemSeparator = { separator: true }

export type ManifestParameter = {
  key: string
  name: string
  description?: string
  allowFreeform?: boolean
  optional?: boolean
}

export type ManifestRelaunchButton = {
  command: string
  name: string
  multipleSelection?: boolean
}
