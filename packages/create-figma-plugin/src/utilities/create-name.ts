import { titleCase } from 'title-case'

export function createName(directoryName: string): string {
  return titleCase(
    directoryName
      .replace(/^fig(?:ma|jam)-/, '')
      .replace(/tailwindcss/, 'Tailwind CSS')
      .replace(/-/g, ' ')
  )
}
