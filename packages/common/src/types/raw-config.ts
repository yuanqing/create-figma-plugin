interface BaseConfig {
  name: string
  main?: RawFile
  ui?: RawFile
}

export interface RawCommand extends BaseConfig {
  menu?: Array<RawCommand | RawSeparator>
}

export interface RawConfig extends BaseConfig {
  apiVersion?: string
  id?: string
  menu?: Array<RawCommand | RawSeparator>
  relaunchButtons?: RawRelaunchButtons
}

export type RawFile =
  | string
  | {
      src: string
      handler?: string
    }

export type RawRelaunchButtons = {
  [key: string]: RawRelaunchButton
}

export interface RawRelaunchButton extends BaseConfig {
  multipleSelection?: boolean
}

export type RawSeparator = '-'
