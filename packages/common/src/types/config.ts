interface BaseConfig {
  name: string
  commandId: null | string
  main: null | File
  ui: null | File
}

export interface Command extends BaseConfig {
  menu: null | Array<Command | Separator>
}

export interface Config extends BaseConfig {
  apiVersion: string
  id: string
  menu: null | Array<Command | Separator>
  relaunchButtons: null | Array<RelaunchButton>
}

export interface File {
  src: string
  handler: string
}

export interface RelaunchButton extends BaseConfig {
  multipleSelection: boolean
}

export type Separator = '-'
