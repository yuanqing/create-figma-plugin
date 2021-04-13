interface BaseRawConfigMixin {
  readonly name: string
  readonly main?: RawConfigFile
  readonly ui?: RawConfigFile
}

export interface RawConfig extends BaseRawConfigMixin {
  readonly apiVersion?: string
  readonly id?: string
  readonly menu?: Array<RawConfigCommand>
  readonly relaunchButtons?: RawConfigRelaunchButtons
  readonly enableProposedApi?: boolean
  readonly enablePrivatePluginApi?: boolean
  readonly build?: string
}

export interface RawConfigCommand extends BaseRawConfigMixin {
  readonly menu?: Array<RawConfigCommand>
}

export type RawConfigCommandSeparator = '-'

export type RawConfigFile =
  | string
  | {
      readonly src: string
      readonly handler?: string
    }

export interface RawConfigRelaunchButton extends BaseRawConfigMixin {
  readonly multipleSelection?: boolean
}

export type RawConfigRelaunchButtons = {
  readonly [relaunchButtonId: string]: RawConfigRelaunchButton
}
