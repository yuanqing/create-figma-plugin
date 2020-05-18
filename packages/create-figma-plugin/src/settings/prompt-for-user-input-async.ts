import { constants } from '@create-figma-plugin/common'
import * as gitUserName from 'git-user-name'
import { prompt } from 'inquirer'

import { Settings } from '../types/settings'
import { createPluginDisplayName } from './create-plugin-display-name'

export async function promptForUserInputAsync(
  options: Settings
): Promise<Settings> {
  const { name, template } = options
  const questions = [
    typeof name === 'undefined'
      ? false
      : {
          type: 'input',
          name: 'name',
          message: 'name',
          validate,
          filter
        },
    {
      type: 'input',
      name: 'displayName',
      message: 'display name',
      default: function (values: { name: string }) {
        if (typeof name !== 'undefined') {
          return createPluginDisplayName(name)
        }
        if (typeof values.name !== 'undefined') {
          return createPluginDisplayName(values.name)
        }
        return undefined
      },
      validate,
      filter
    },
    typeof template === 'undefined'
      ? false
      : {
          type: 'input',
          name: 'template',
          message: 'template',
          default: constants.defaultTemplate,
          filter
        },
    {
      type: 'input',
      name: 'version',
      message: 'version',
      default: constants.packageJson.defaultVersion,
      filter
    },
    {
      type: 'input',
      name: 'description',
      message: 'description',
      filter
    },
    {
      type: 'input',
      name: 'repositoryUrl',
      message: 'repository url',
      filter
    },
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: gitUserName(),
      filter
    },
    {
      type: 'input',
      name: 'license',
      message: 'license',
      default: constants.packageJson.defaultLicense,
      filter
    }
  ].filter(Boolean)
  return {
    ...(await prompt(questions)),
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
