import { globby } from 'globby'
import inquirer from 'inquirer'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export async function resolveTemplateNameAsync(
  templateName?: string
): Promise<string> {
  const templateNames = await readTemplateNamesAsync()
  if (typeof templateName !== 'undefined') {
    if (templateNames.indexOf(templateName) === -1) {
      throw new Error(`Template must be one of "${templateNames.join('", "')}"`)
    }
    return templateName
  }
  const result: { templateName: string } = await inquirer.prompt([
    {
      choices: templateNames,
      message: 'Select a template:',
      name: 'templateName',
      type: 'list'
    }
  ])
  return result.templateName
}

async function readTemplateNamesAsync(): Promise<Array<string>> {
  const pluginTemplatesDirectory = resolve(__dirname, '..', '..', 'templates')
  const result = await globby('*/*', {
    cwd: pluginTemplatesDirectory,
    onlyDirectories: true
  })
  return result
}
