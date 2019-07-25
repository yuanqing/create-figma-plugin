import gitUserName from 'git-user-name'
import { prompt } from 'inquirer'
import titleCase from 'title-case'
import { logPrefix } from '@create-figma-plugin/common'

const figmaPrefixRegex = /^figma-/
const multipleSpaceRegex = /\s+/g

const prefix = logPrefix.question

function validate (input) {
  if (input.replace(multipleSpaceRegex, '').trim().length > 0) {
    return true
  }
  return 'Required'
}

function filter (input) {
  return input.replace(multipleSpaceRegex, ' ').trim()
}

export function promptForUserInput (pluginName) {
  const questions = [
    {
      type: 'input',
      name: 'displayName',
      message: 'Display name',
      default: function () {
        return titleCase(pluginName.replace(figmaPrefixRegex, ''))
      },
      validate,
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'description',
      message: 'Description',
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'repositoryUrl',
      message: 'Repository URL',
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: function () {
        return gitUserName()
      },
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'license',
      message: 'License',
      default: 'MIT',
      filter,
      prefix
    }
  ]
  return prompt(questions)
}
