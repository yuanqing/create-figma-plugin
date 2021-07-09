export function createClassName(
  classNames: Array<undefined | null | string>
): string {
  return classNames
    .filter(function (className?: null | string): boolean {
      return className !== null && className !== undefined
    })
    .join(' ')
}
