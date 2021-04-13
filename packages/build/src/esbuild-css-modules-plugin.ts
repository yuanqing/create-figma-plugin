import type { OnResolveArgs, Plugin, PluginBuild } from 'esbuild'
import { readFile } from 'fs-extra'
import { basename, extname, resolve } from 'path'
import postcss from 'postcss'
import * as tempWrite from 'temp-write'

const cssNano = require('cssnano')
const postCssModules = require('postcss-modules')
const revHash = require('rev-hash')

export function esbuildCssModulesPlugin(minify: boolean): Plugin {
  return {
    name: 'css-modules',
    setup: function (build: PluginBuild) {
      build.onResolve(
        { filter: /\.css$/ },
        async function (args: OnResolveArgs) {
          const cssfilePath = resolve(args.resolveDir, args.path)
          const js = await createCssModulesJavaScript(cssfilePath, minify)
          const jsFilePath = await tempWrite(
            js,
            `${basename(args.path, extname(args.path))}.js`
          )
          return {
            path: jsFilePath
          }
        }
      )
    }
  }
}

async function createCssModulesJavaScript(
  cssFilePath: string,
  minify: boolean
) {
  const css = await readFile(cssFilePath)
  let classNamesJson: null | string = null
  const plugins = []
  plugins.push(
    postCssModules({
      getJSON: function (_: string, json: { [key: string]: string }): void {
        if (classNamesJson !== null) {
          throw new Error('`getJSON` callback called more than once')
        }
        classNamesJson = JSON.stringify(json)
      },
      localsConvention: 'camelCaseOnly'
    })
  )
  if (minify === true) {
    plugins.push(cssNano())
  }
  const result = await postcss(plugins).process(css, {
    from: cssFilePath,
    map:
      minify === true
        ? false
        : {
            inline: true
          }
  })
  if (classNamesJson === null) {
    throw new Error('`getJSON` callback was not called')
  }
  const elementId = revHash(cssFilePath)
  const isBaseCss =
    cssFilePath.indexOf('create-figma-plugin/packages/ui/lib/css') !== -1
  return `
    if (document.getElementById('${elementId}') === null) {
      const element = document.createElement('style');
      element.id = '${elementId}';
      element.textContent = \`${result.css}\`;
      document.head.${isBaseCss === true ? 'prepend' : 'append'}(element);
    }
    export default ${classNamesJson};
  `
}
