export function setRelaunchButton(
  node: BaseNode,
  key: string,
  options?: { description: string }
) {
  const description = options?.description || ''
  node.setRelaunchData({ [key]: description })
}
