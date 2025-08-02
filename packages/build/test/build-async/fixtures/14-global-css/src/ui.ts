import '!./styles.css'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  rootNode.innerHTML = `<p class="foo">${data.greeting}</p>`
}
