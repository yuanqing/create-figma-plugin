interface BaseRawConfigMixin {
  readonly name: string
  readonly main?: RawConfigFile
  readonly ui?: RawConfigFile
}

export interface RawConfigCommand extends BaseRawConfigMixin {
  readonly menu?: Array<RawConfigCommand>
  readonly parameters?: Array<RawConfigParameter>
  readonly parameterOnly?: boolean
}

export interface RawConfig extends RawConfigCommand {
  readonly api?: string
  readonly widgetApi?: string
  readonly editorType?: Array<string>
  readonly containsWidget?: boolean
  readonly id?: string
  readonly relaunchButtons?: RawConfigRelaunchButtons
  readonly permissions?: Array<string>
  readonly capabilities?: Array<string>
  readonly codegenLanguages?: Array<RawConfigCodeLanguage>
  readonly codegenPreferences?: Array<RawConfigCodegenPreference>
  readonly enableProposedApi?: boolean
  readonly enablePrivatePluginApi?: boolean
  readonly build?: string
}

export type RawConfigCommandSeparator = '-'

export type RawConfigFile =
  | string
  | {
      readonly src: string
      readonly handler?: string
    }

export interface RawConfigParameter {
  readonly key: string
  readonly name?: string
  readonly description?: string
  readonly allowFreeform?: boolean
  readonly optional?: boolean
}

export interface RawConfigRelaunchButton extends BaseRawConfigMixin {
  readonly multipleSelection?: boolean
}

export type RawConfigRelaunchButtons = {
  readonly [relaunchButtonId: string]: RawConfigRelaunchButton
}

export type RawConfigCodeLanguage = {
  readonly label: string
  readonly value: string
}

export type RawConfigCodegenPreferenceOption = {
  readonly label: string
  readonly value: string
  readonly isDefault?: boolean
}

export type RawConfigCodegenPreference = {
  readonly itemType: string
  readonly defaultScaleFactor?: number
  readonly scaledUnit?: string
  readonly default?: boolean
  readonly propertyName?: string
  readonly label?: string
  readonly options?: Array<RawConfigCodegenPreferenceOption>
  readonly includedLanguages?: Array<string>
}
