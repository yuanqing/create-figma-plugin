interface BaseRawConfigMixin {
  name: string
  main?: RawConfigFile
  ui?: RawConfigFile
}

export interface RawConfig extends BaseRawConfigMixin {
  apiVersion?: string
  id?: string
  menu?: Array<RawConfigCommand>
  relaunchButtons?: RawConfigRelaunchButtons
}

export interface RawConfigCommand extends BaseRawConfigMixin {
  menu?: Array<RawConfigCommand>
}

export type RawConfigCommandSeparator = '-'

export type RawConfigFile =
  | string
  | {
      src: string
      handler?: string
    }

export interface RawConfigRelaunchButton extends BaseRawConfigMixin {
  multipleSelection?: boolean
}

export type RawConfigRelaunchButtons = {
  [relaunchButtonId: string]: RawConfigRelaunchButton
}
