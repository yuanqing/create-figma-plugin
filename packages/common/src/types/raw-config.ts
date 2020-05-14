export type RawConfig = {
  apiVersion?: string
  id?: string
  name: string
  main?: RawConfigCommandFile
  ui?: RawConfigCommandFile
  menu?: Array<RawConfigCommand>
  relaunchButtons?: RawConfigRelaunchButtons
}

export type RawConfigCommand =
  | '-'
  | {
      name: string
      main: RawConfigCommandFile
      ui?: RawConfigCommandFile
      menu?: Array<RawConfigCommand>
    }

export type RawConfigCommandFile =
  | string
  | {
      src: string
      handler?: string
    }

export type RawConfigRelaunchButtons = {
  [key: string]: {
    name: string
    main: RawConfigCommandFile
    ui?: RawConfigCommandFile
    multipleSelection?: boolean
  }
}
