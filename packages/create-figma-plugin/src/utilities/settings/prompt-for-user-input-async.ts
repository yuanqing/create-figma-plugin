import { constants } from '@create-figma-plugin/common'
import gitUserName from 'git-user-name'
import inquirer from 'inquirer'

import { Settings } from '../../types/settings.js'
import { createPluginDisplayName } from './create-plugin-display-name.js'

export async function promptForUserInputAsync(
  options: Settings
): Promise<Settings> {
  const { name, template } = options
  const questions = [
    typeof name === 'undefined'
      ? false
      : {
          filter,
          message: 'name',
          name: 'name',
          type: 'input',
          validate
        },
    {
      default: function (values: { name: string }): undefined | string {
        if (typeof name !== 'undefined') {
          return createPluginDisplayName(name)
        }
        if (typeof values.name !== 'undefined') {
          return createPluginDisplayName(values.name)
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
      ? false
      : {
          default: constants.defaultTemplate,
          filter,
          message: 'template',
          name: 'template',
          type: 'input'
        },
    {
      default: constants.packageJson.defaultVersion,
      filter,
      message: 'version',
      name: 'version',
      type: 'input'
    },
    {
      filter,
      message: 'description',
      name: 'description',
      type: 'input'
    },
    {
      filter,
      message: 'repository url',
      name: 'repositoryUrl',
      type: 'input'
    },
    {
      default: gitUserName(),
      filter,
      message: 'author',
      name: 'author',
      type: 'input'
    },
    {
      default: constants.packageJson.defaultLicense,
      filter,
      message: 'license',
      name: 'license',
      type: 'input'
    }
  ].filter(Boolean)
  return {
    ...(await inquirer.prompt(questions)),
    name,
    template
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
