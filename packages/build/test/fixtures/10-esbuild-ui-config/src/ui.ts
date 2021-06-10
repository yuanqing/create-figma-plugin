export default function (rootNode: HTMLElement, data: { greeting: string }) {
  rootNode.innerHTML = `<p>${data.greeting}</p>`
}
