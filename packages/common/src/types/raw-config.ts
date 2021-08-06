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
  readonly apiVersion?: string
  readonly editorType?: Array<string>
  readonly id?: string
  readonly relaunchButtons?: RawConfigRelaunchButtons
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
  readonly name: string
  readonly key: string
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
