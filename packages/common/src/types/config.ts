interface BaseConfigMixin {
  readonly name: string
  readonly commandId: null | string
  readonly main: null | ConfigFile
  readonly ui: null | ConfigFile
}

export interface Config extends BaseConfigMixin {
  readonly apiVersion: string
  readonly id: string
  readonly menu: null | Array<ConfigCommand | ConfigCommandSeparator>
  readonly relaunchButtons: null | Array<ConfigRelaunchButton>
  readonly enableProposedApi: boolean
  readonly enablePrivatePluginApi: boolean
  readonly build: null | string
}

export interface ConfigCommand extends BaseConfigMixin {
  readonly menu: null | Array<ConfigCommand | ConfigCommandSeparator>
}

export type ConfigCommandSeparator = { readonly separator: true }

export interface ConfigFile {
  readonly src: string
  readonly handler: string
}

export interface ConfigRelaunchButton extends BaseConfigMixin {
  readonly commandId: string
  readonly main: ConfigFile
  readonly multipleSelection: boolean
}
