import {
  ManifestCapabilities,
  ManifestDocumentAccess,
  ManifestEditorType,
  ManifestMenuItemSeparator,
  ManifestPermission
} from './manifest.js'

interface BaseConfigMixin {
  commandId: null | string
  name: string
  main: null | ConfigFile
  ui: null | ConfigFile
}

export interface ConfigCommand extends BaseConfigMixin {
  menu: null | Array<ConfigCommand | ManifestMenuItemSeparator>
  parameters: null | Array<ConfigParameter>
  parameterOnly: boolean
}

export interface Config extends ConfigCommand {
  api: string
  widgetApi: string
  editorType: Array<ManifestEditorType>
  containsWidget: boolean
  id: string
  relaunchButtons: null | Array<ConfigRelaunchButton>
  capabilities: null | Array<ManifestCapabilities>
  permissions: null | Array<ManifestPermission>
  documentAccess: null | ManifestDocumentAccess
  networkAccess: null | ConfigNetworkAccess
  enablePrivatePluginApi: boolean
  enableProposedApi: boolean
  build: null | string
  rest: null | Record<string, unknown>
}

export type ConfigEditorType = ManifestEditorType

export interface ConfigFile {
  src: string
  handler: string
}

export type ConfigMenuItemSeparator = ManifestMenuItemSeparator

export interface ConfigParameter {
  key: string
  name: string
  description: null | string
  allowFreeform: boolean
  optional: boolean
}

export interface ConfigRelaunchButton extends BaseConfigMixin {
  commandId: string
  main: ConfigFile
  multipleSelection: boolean
}

export type ConfigCapabilities = ManifestCapabilities

export type ConfigPermission = ManifestPermission

export type ConfigNetworkAccess = {
  allowedDomains: Array<string>
  devAllowedDomains: null | Array<string>
  reasoning: null | string
}
