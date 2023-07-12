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
  capabilities?: Array<string>
  enableProposedApi?: boolean
  enablePrivatePluginApi?: boolean
  build?: string
  codegenLanguages?: Array<ManifestCodeLanguage>
  codegenPreferences?: Array<ManifestCodegenPreference>
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

export type ManifestCodeLanguage = {
  label: string
  value: string
}

export type ManifestCodegenPreferenceOption = {
  label: string
  value: string
  isDefault?: boolean
}

export type ManifestCodegenPreference = {
  itemType: string
  defaultScaleFactor?: number
  scaledUnit?: string
  default?: boolean
  propertyName?: string
  label?: string
  options?: Array<ManifestCodegenPreferenceOption>
  includedLanguages?: Array<string>
}
