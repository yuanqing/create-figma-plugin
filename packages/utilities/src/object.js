export function cloneObject (object) {
  const type = typeof object
  if (
    object === null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined'
  ) {
    return object
  }
  if (Array.isArray(object)) {
    return object.map(function (value) {
      return cloneObject(value)
    })
  }
  const result = {}
  for (const key in object) {
    result[key] = cloneObject(object[key])
  }
  return result
}
