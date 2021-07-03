import { constants } from '@create-figma-plugin/common'
import inquirer from 'inquirer'

import { Settings } from '../../types/settings.js'
import { readPluginTemplateNamesAsync } from '../read-template-names-async.js'
import { createPluginDisplayName } from './create-plugin-display-name.js'

export async function promptForUserInputAsync(options: {
  name?: string
  template?: string
}): Promise<Settings> {
  const { name, template } = options
  const questions = [
    typeof name === 'undefined'
      ? {
          filter,
          message: 'name',
          name: 'name',
          type: 'input',
          validate
        }
      : false,
    {
      default: function (answers: { name: string }): undefined | string {
        if (typeof name !== 'undefined') {
          return createPluginDisplayName(name)
        }
        if (typeof answers.name !== 'undefined') {
          return createPluginDisplayName(answers.name)
        }
        return undefined
      },
      filter,
      message: 'display name',
      name: 'displayName',
      type: 'input',
      validate
    },
    typeof template === 'undefined'
      ? {
          choices: await readPluginTemplateNamesAsync(),
          default: constants.defaultTemplate,
          filter,
          message: 'template',
          name: 'template',
          type: 'list'
        }
      : false
  ].filter(Boolean)
  const answers = await inquirer.prompt(questions)
  return {
    displayName: answers.displayName,
    name: typeof name === 'undefined' ? answers.name : name,
    template: typeof template === 'undefined' ? answers.template : template
  }
}

const multipleSpaceRegex = /\s+/g

function validate(input: string): true | 'Required' {
  if (input.replace(multipleSpaceRegex, '').trim().length > 0) {
    return true
  }
  return 'Required'
}

function filter(input: string): string {
  return input.replace(multipleSpaceRegex, ' ').trim()
}
