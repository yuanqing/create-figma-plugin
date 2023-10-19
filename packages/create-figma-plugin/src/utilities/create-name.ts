import titleize from 'titleize'

export function createName(directoryName: string): string {
  return titleize(
    directoryName
      .replace(/^fig(?:ma|jam)-/, '')
      .replace(/tailwindcss/, 'Tailwind CSS')
      .replace(/-/g, ' ')
  )
}
