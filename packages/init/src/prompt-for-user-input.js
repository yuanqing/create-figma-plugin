import gitUserName from 'git-user-name'
import { prompt } from 'inquirer'
import titleCase from 'title-case'
import { logPrefixes } from '@create-figma-plugin/common'

const figmaPrefixRegex = /^figma-/
const multipleSpaceRegex = /\s+/g

const prefix = logPrefixes.question

function validate (input) {
  if (input.replace(multipleSpaceRegex, '').trim().length > 0) {
    return true
  }
  return 'Required'
}

function filter (input) {
  return input.replace(multipleSpaceRegex, ' ').trim()
}

export async function promptForUserInput ({ name, template }) {
  const questions = [
    typeof name === 'undefined' && {
      type: 'input',
      name: 'name',
      message: 'name',
      validate,
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'displayName',
      message: 'display name',
      default: function ({ name }) {
        return titleCase(name.replace(figmaPrefixRegex, ''))
      },
      validate,
      filter,
      prefix
    },
    typeof template === 'undefined' && {
      type: 'input',
      name: 'template',
      message: 'template',
      default: 'default',
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'description',
      message: 'description',
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'repositoryUrl',
      message: 'repository url',
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'author',
      message: 'author',
      default: function () {
        return gitUserName()
      },
      filter,
      prefix
    },
    {
      type: 'input',
      name: 'license',
      message: 'license',
      default: function () {
        return 'MIT'
      },
      filter,
      prefix
    }
  ].filter(Boolean)
  return {
    name,
    template,
    ...(await prompt(questions))
  }
}
