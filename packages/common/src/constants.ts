export const constants = {
  build: {
    buildDirectoryName: 'build',
    mainConfigGlobPattern: 'build-figma-plugin.main.{cjs,js}',
    manifestConfigGlobPattern: 'build-figma-plugin.manifest.{cjs,js}',
    manifestFilePath: 'manifest.json',
    manifestPluginApi: '1.0.0',
    manifestWidgetApi: '1.0.0',
    pluginCodeFilePath: 'build/main.js',
    pluginUiFilePath: 'build/ui.js',
    srcDirectoryName: 'src',
    uiConfigGlobPattern: 'build-figma-plugin.ui.{cjs,js}'
  },
  defaultTemplateName: 'plugin/hello-world',
  packageJson: {
    configKey: 'figma-plugin',
    defaultName: 'figma-plugin',
    versions: {
      pluginTypings: '1.74.0',
      widgetTypings: '1.5.0'
    }
  }
}
