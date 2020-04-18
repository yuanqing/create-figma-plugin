import { constants } from '@create-figma-plugin/common'
import gitUserName from 'git-user-name'
import { prompt } from 'inquirer'
import { createPluginDisplayName } from './create-plugin-display-name'

export async function promptForUserInputAsync ({ name, template }) {
  const questions = [
    typeof name === 'undefined' && {
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
      default: function (values) {
        return createPluginDisplayName(
          typeof name === 'undefined' ? values.name : name
        )
      },
      validate,
      filter
    },
    typeof template === 'undefined' && {
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
    name,
    template,
    ...(await prompt(questions))
  }
}

const multipleSpaceRegex = /\s+/g

function validate (input) {
  if (input.replace(multipleSpaceRegex, '').trim().length > 0) {
    return true
  }
  return 'Required'
}

function filter (input) {
  return input.replace(multipleSpaceRegex, ' ').trim()
}
