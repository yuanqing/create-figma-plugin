import styles from './styles.css'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  rootNode.innerHTML = `<p class="${styles.foo}">${data.greeting}</p>`
}
