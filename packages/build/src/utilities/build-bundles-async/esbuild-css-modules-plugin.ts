import cssNano from 'cssnano'
import { OnResolveArgs, Plugin, PluginBuild } from 'esbuild'
import fs from 'fs-extra'
import { basename, extname, resolve } from 'path'
import postcss, { AcceptedPlugin } from 'postcss'
import postCssModules from 'postcss-modules'
import revHash from 'rev-hash'
import tempWrite from 'temp-write'

export function esbuildCssModulesPlugin(minify: boolean): Plugin {
  return {
    name: 'css-modules',
    setup: function (build: PluginBuild): void {
      build.onResolve(
        { filter: /\.css$/ },
        async function (args: OnResolveArgs): Promise<{ path: string }> {
          const cssfilePath = resolve(args.resolveDir, args.path)
          const js = await createCssModulesJavaScriptAsync(cssfilePath, minify)
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

const backQuoteRegex = /`/g

async function createCssModulesJavaScriptAsync(
  cssFilePath: string,
  minify: boolean
): Promise<string> {
  const css = await fs.readFile(cssFilePath, 'utf8')
  let classNamesJson: null | string = null
  const plugins: Array<AcceptedPlugin> = []
  plugins.push(
    postCssModules({
      getJSON: function (_: string, json: Record<string, string>): void {
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
  const elementId: string = revHash(cssFilePath)
  const isBaseCss =
    cssFilePath.indexOf('create-figma-plugin/packages/ui/lib/css') !== -1
  return `
    if (document.getElementById('${elementId}') === null) {
      const element = document.createElement('style');
      element.id = '${elementId}';
      element.textContent = \`${result.css.replace(backQuoteRegex, '\\`')}\`;
      document.head.${isBaseCss === true ? 'prepend' : 'append'}(element);
    }
    export default ${classNamesJson};
  `
}
