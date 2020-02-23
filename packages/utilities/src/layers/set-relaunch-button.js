export function setRelaunchButton (layer, id, description = '') {
  layer.setRelaunchData({ [id]: description })
}
