export function isKeyCodeCharacterGenerating(keyCode: number): boolean {
  return (
    keyCode === 32 || // space
    (keyCode >= 48 && keyCode <= 57) || // 0 to 9
    (keyCode >= 65 && keyCode <= 90) || // A to Z
    (keyCode >= 96 && keyCode <= 105) || // Number pad
    (keyCode >= 186 && keyCode <= 192) || // ;=,-./`
    (keyCode >= 219 && keyCode <= 222) // [\]'
  )
}
