export const constants = {
  apiVersion: '0.6.0',
  packageJson: {
    configKey: 'create-figma-plugin',
    codeKey: 'command',
    uiKey: 'ui'
  },
  src: {
    directory: 'src',
    globPattern: 'src/**/*.js'
  },
  build: {
    directoryName: 'build',
    manifestFilePath: 'manifest.json',
    pluginCodeFilePath: 'build/main.js',
    pluginUiFilePath: 'build/ui.js'
  },
  webpackConfigMutatorFileName: 'create-figma-plugin.js'
}
