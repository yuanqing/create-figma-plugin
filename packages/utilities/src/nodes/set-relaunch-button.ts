export function setRelaunchButton (
  node: SceneNode,
  key: string,
  options?: { description: string }
) {
  const description = options?.description || ''
  node.setRelaunchData({ [key]: description })
}
