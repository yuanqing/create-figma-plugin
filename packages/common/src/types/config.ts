export type Config = {
  apiVersion: string
  id: string
  name: string
  commandId: undefined | string
  main: undefined | ConfigCommandFile
  ui: undefined | ConfigCommandFile
  menu: undefined | Array<ConfigCommand>
  relaunchButtons: undefined | Array<ConfigRelaunchButton>
}

export type ConfigCommand =
  | { separator: true }
  | {
      name: string
      commandId: string
      main: ConfigCommandFile
      ui: undefined | ConfigCommandFile
      menu: undefined | Array<ConfigCommand>
    }

export type ConfigCommandFile = {
  src: string
  handler: string
}

export type ConfigRelaunchButton = {
  name: string
  commandId: string
  main: ConfigCommandFile
  ui: undefined | ConfigCommandFile
  multipleSelection: boolean
}
