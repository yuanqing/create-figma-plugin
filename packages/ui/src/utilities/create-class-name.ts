export function createClassName(classNames: Array<null | string>): string {
  return classNames
    .filter(function (className: null | string) {
      return className !== null
    })
    .join(' ')
}
