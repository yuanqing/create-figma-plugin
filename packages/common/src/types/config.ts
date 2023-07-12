interface BaseConfigMixin {
  readonly name: string
  readonly commandId: null | string
  readonly main: null | ConfigFile
  readonly ui: null | ConfigFile
}

export interface ConfigCommand extends BaseConfigMixin {
  readonly menu: null | Array<ConfigCommand | ConfigCommandSeparator>
  readonly parameters: null | Array<ConfigParameter>
  readonly parameterOnly: null | boolean
}

export interface Config extends ConfigCommand {
  readonly api: string
  readonly widgetApi: string
  readonly editorType: Array<string>
  readonly containsWidget: boolean
  readonly id: string
  readonly relaunchButtons: null | Array<ConfigRelaunchButton>
  readonly permissions: null | Array<string>
  readonly capabilities: null | Array<string>
  readonly codegenLanguages: null | Array<ConfigCodeLanguage>
  readonly codegenPreferences: null | Array<ConfigCodegenPreference>
  readonly enableProposedApi: boolean
  readonly enablePrivatePluginApi: boolean
  readonly build: null | string
}

export type ConfigCommandSeparator = { readonly separator: true }

export interface ConfigFile {
  readonly src: string
  readonly handler: string
}

export interface ConfigParameter {
  readonly key: string
  readonly name: string
  readonly description: null | string
  readonly allowFreeform: boolean
  readonly optional: boolean
}

export interface ConfigRelaunchButton extends BaseConfigMixin {
  readonly commandId: string
  readonly main: ConfigFile
  readonly multipleSelection: boolean
}

export type ConfigCodeLanguage = {
  readonly label: string
  readonly value: string
}

export type ConfigCodegenPreferenceOption = {
  readonly label: string
  readonly value: string
  readonly isDefault: null | boolean
}

export type ConfigCodegenPreference = {
  readonly itemType: string
  readonly defaultScaleFactor: null | number
  readonly scaledUnit: null | string
  readonly default: null | boolean
  readonly propertyName: null | string
  readonly label: null | string
  readonly options: null | Array<ConfigCodegenPreferenceOption>
  readonly includedLanguages: null | Array<string>
}
