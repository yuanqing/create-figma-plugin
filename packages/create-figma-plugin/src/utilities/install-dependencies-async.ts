import { exec, ExecException } from 'child_process'

export async function installDependenciesAsync(cwd: string): Promise<void> {
  await new Promise<void>(function (resolve, reject) {
    const command = isYarn() === true ? 'yarn install' : 'npm install'
    exec(command, { cwd }, function (error: ExecException | null): void {
      if (error) {
        reject(error)
        return
      }
      resolve()
    })
  })
}

function isYarn(): boolean {
  return /yarn\//.test(process.env.npm_config_user_agent as string)
}
