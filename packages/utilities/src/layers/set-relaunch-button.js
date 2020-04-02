export function setRelaunchButton (layer, key, description = '') {
  layer.setRelaunchData({ [key]: description })
}
