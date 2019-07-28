import { exec } from 'child_process'

export async function installDependencies (cwd) {
  const command = isYarn() ? 'yarn install' : 'npm install'
  return new Promise(function (resolve, reject) {
    exec(command, { cwd }, function (error) {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

const yarnUserAgentRegex = /yarn\//

function isYarn () {
  return yarnUserAgentRegex.test(process.env.npm_config_user_agent)
}
