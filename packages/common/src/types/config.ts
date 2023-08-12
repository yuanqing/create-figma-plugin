interface BaseConfigMixin {
  commandId: null | string
  name: string
  main: null | ConfigFile
  ui: null | ConfigFile
}

export interface ConfigCommand extends BaseConfigMixin {
  menu: null | Array<ConfigCommand | ConfigCommandSeparator>
  parameters: null | Array<ConfigParameter>
  parameterOnly: boolean
}

export interface Config extends ConfigCommand {
  id: string
  api: string
  widgetApi: string
  editorType: Array<ConfigEditorType>
  containsWidget: boolean
  relaunchButtons: null | Array<ConfigRelaunchButton>
  capabilities: null | Array<ConfigCapabilities>
  permissions: null | Array<ConfigPermission>
  networkAccess: null | ConfigNetworkAccess
  enablePrivatePluginApi: boolean
  enableProposedApi: boolean
  build: null | string
  rest: null | Record<string, unknown>
}

export type ConfigCommandSeparator = {
  separator: true
}

export interface ConfigFile {
  src: string
  handler: string
}

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

export type ConfigCapabilities = 'codegen' | 'inspect' | 'textreview'

export type ConfigPermission =
  | 'activeusers'
  | 'currentuser'
  | 'fileusers'
  | 'payments'
  | 'teamlibrary'

export type ConfigEditorType = 'dev' | 'figma' | 'figjam'

export type ConfigNetworkAccess = {
  allowedDomains: Array<string>
  devAllowedDomains: null | Array<string>
  reasoning: null | string
}
