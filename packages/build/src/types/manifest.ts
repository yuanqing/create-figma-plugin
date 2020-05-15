export type Manifest = {
  name: string
  id?: string
  api: string
  main: string
  ui?: string
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
  relaunchButtons?: Array<ManifestRelaunchButton>
}

export type ManifestMenuItem = {
  name: string
  command?: string
  menu?: Array<ManifestMenuItem | ManifestMenuItemSeparator>
}

export type ManifestMenuItemSeparator = { separator: true }

export type ManifestRelaunchButton = {
  command: string
  name: string
  multipleSelection?: true
}
