export function computeNextValue (inputElement, insertedString) {
  const value = inputElement.value
  return `${value.substring(
    0,
    inputElement.selectionStart
  )}${insertedString}${value.substring(inputElement.selectionEnd)}`
}
