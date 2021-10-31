import { titleCase } from 'title-case'

export function createDisplayName(name: string): string {
  return titleCase(name.replace(/^fig(?:ma|jam)-/, '').replace(/-/g, ' '))
}
