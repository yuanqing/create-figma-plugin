import fs from 'fs-extra'

async function main(): Promise<void> {
  try {
    const filePath = process.argv[2]
    const data = JSON.parse(await fs.readFile(filePath, 'utf8'))
    const result = data
      .slice()
      .sort(function (x: Record<string, any>, y: Record<string, any>): number {
        return x.name.localeCompare(y.name)
      })
      .map(function (data: Record<string, any>) {
        return {
          authors: data.authors.sort(function (x: any, y: any) {
            return x.name.localeCompare(y.name)
          }),
          description: data.description,
          githubUrl: data.githubUrl,
          id: data.id,
          name: data.name
        }
      })
    await fs.writeFile(filePath, `${JSON.stringify(result, null, 2)}\n`)
  } catch (error: any) {
    console.error(error.message) // eslint-disable-line no-console
    process.exit(1)
  }
}
main()
