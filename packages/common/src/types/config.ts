interface BaseConfigMixin {
  name: string
  commandId: null | string
  main: null | ConfigFile
  ui: null | ConfigFile
}

export interface Config extends BaseConfigMixin {
  apiVersion: string
  id: string
  menu: null | Array<ConfigCommand | ConfigCommandSeparator>
  relaunchButtons: null | Array<ConfigRelaunchButton>
}

export interface ConfigCommand extends BaseConfigMixin {
  menu: null | Array<ConfigCommand | ConfigCommandSeparator>
}

export type ConfigCommandSeparator = { separator: true }

export interface ConfigFile {
  src: string
  handler: string
}

export interface ConfigRelaunchButton extends BaseConfigMixin {
  commandId: string
  main: ConfigFile
  multipleSelection: boolean
}
