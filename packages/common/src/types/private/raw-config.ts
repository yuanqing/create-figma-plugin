interface BaseRawConfigMixin {
  name: string
  main?: RawConfigFile
  ui?: RawConfigFile
}

export interface RawConfigCommand extends BaseRawConfigMixin {
  menu?: Array<RawConfigCommand>
  parameters?: Array<RawConfigParameter>
  parameterOnly?: boolean
}

export type RawConfigFile =
  | string
  | {
      src: string
      handler?: string
    }

export type RawConfigParameter = {
  key: string
  name?: string
  description?: string
  allowFreeform?: boolean
  optional?: boolean
}

export type RawConfigRelaunchButtons = Record<string, RawConfigRelaunchButton>

export interface RawConfigRelaunchButton extends BaseRawConfigMixin {
  multipleSelection?: boolean
}

export type RawConfigNetworkAccess = {
  allowedDomains: Array<string>
  devAllowedDomains?: Array<string>
  reasoning?: string
}
