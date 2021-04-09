import * as crypto from 'crypto'
import * as esbuild from 'esbuild'
import * as fs from 'fs-extra'
import * as path from 'path'
import postcss from 'postcss'
import * as tempWrite from 'temp-write'

const cssNano = require('cssnano')
const postCssModules = require('postcss-modules')

export function esbuildCssModulesPlugin(minify: boolean): esbuild.Plugin {
  return {
    name: 'css-modules',
    setup: function (build: esbuild.PluginBuild) {
      build.onResolve({ filter: /\.css$/ }, async function (args: any) {
        const cssfilePath = path.resolve(args.resolveDir, args.path)
        const js = await createCssModulesJavaScript(cssfilePath, minify)
        const jsFilePath = await tempWrite(
          js,
          `${path.basename(args.path, path.extname(args.path))}.js`
        )
        return {
          path: jsFilePath
        }
      })
    }
  }
}

const hash = crypto.createHash('sha1')

async function createCssModulesJavaScript(
  cssFilePath: string,
  minify: boolean
) {
  const css = await fs.readFile(cssFilePath)
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
  hash.update(cssFilePath)
  const elementId = hash.digest('base64')
  return `
    if (document.getElementById('${elementId}') === null) {
      const element = document.createElement('style');
      element.id = '${elementId}';
      element.textContent = \`${result.css}\`;
      document.head.appendChild(element);
    }
    export default ${classNamesJson};
  `
}
