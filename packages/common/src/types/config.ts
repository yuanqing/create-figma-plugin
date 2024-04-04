import { ManifestEditorType, ManifestMenuItemSeparator } from './manifest.js'

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
  editorType: Array<ConfigEditorType>
  containsWidget: boolean
  id: string
  relaunchButtons: null | Array<ConfigRelaunchButton>
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
