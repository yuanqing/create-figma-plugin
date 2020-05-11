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

export function compareObjects (a, b) {
  const type = typeof a
  if (
    a === null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'undefined'
  ) {
    return a === b
  }
  if (Array.isArray(a)) {
    if (Array.isArray(b) === false) {
      return false
    }
    if (a.length !== b.length) {
      return false
    }
    let result = true
    a.forEach(function (value, index) {
      if (result === true && compareObjects(value, b[index]) === false) {
        result = false
      }
    })
    return result
  }
  if (typeof b !== 'object') {
    return false
  }
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false
  }
  for (const key in a) {
    if (compareObjects(a[key], b[key]) === false) {
      return false
    }
  }
  return true
}

export function extractAttributes (array, attributes) {
  const result = []
  for (const object of array) {
    const item = {}
    for (const attribute of attributes) {
      const value = object[attribute]
      item[attribute] =
        typeof value === 'undefined' || object[attribute] === '' ? null : value
    }
    result.push(item)
  }
  return result
}
