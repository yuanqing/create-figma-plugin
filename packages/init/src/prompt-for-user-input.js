import gitUserName from 'git-user-name'
import githubUsernameRegex from 'github-username-regex'
import { prompt } from 'inquirer'
import titleCase from 'title-case'

const figmaPrefixRegex = /^figma-/
const multipleSpaceRegex = /\s+/g

export function promptForUserInput (name) {
  const questions = [
    {
      type: 'input',
      name: 'pluginDisplayName',
      message: 'Plugin display name',
      default: function () {
        return titleCase(name.replace(figmaPrefixRegex, ''))
      },
      validate,
      filter
    },
    {
      type: 'input',
      name: 'pluginDescription',
      message: 'Plugin description',
      filter
    },
    {
      type: 'input',
      name: 'authorName',
      message: 'Author name',
      default: function () {
        return gitUserName()
      },
      validate,
      filter
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Github username',
      default: function ({ authorName }) {
        return authorName.toLowerCase().replace(multipleSpaceRegex, '')
      },
      validate: function (input) {
        if (githubUsernameRegex.test(input)) {
          return true
        }
        return 'Invalid GitHub username'
      },
      filter
    }
  ]
  return prompt(questions)
}

function validate (input) {
  if (input.replace(multipleSpaceRegex, '').trim().length > 0) {
    return true
  }
  return 'Required'
}

function filter (input) {
  return input.replace(multipleSpaceRegex, ' ').trim()
}
