import gitUserName from 'git-user-name'
import { prompt } from 'inquirer'
import titleCase from 'title-case'

const figmaPrefixRegex = /^figma-/
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

export async function promptForUserInput ({ name, template }) {
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
        return titleCase(
          (typeof name === 'undefined' ? values.name : name).replace(
            figmaPrefixRegex,
            ''
          )
        )
      },
      validate,
      filter
    },
    typeof template === 'undefined' && {
      type: 'input',
      name: 'template',
      message: 'template',
      default: 'default',
      filter
    },
    {
      type: 'input',
      name: 'version',
      message: 'version',
      default: '1.0.0',
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
      default: function () {
        return gitUserName()
      },
      filter
    },
    {
      type: 'input',
      name: 'license',
      message: 'license',
      default: function () {
        return 'MIT'
      },
      filter
    }
  ].filter(Boolean)
  return {
    name,
    template,
    ...(await prompt(questions))
  }
}
