import styles from './styles.scss'

export default function (rootNode: HTMLElement, data: { greeting: string }) {
  rootNode.innerHTML = `<p class="${styles.foo}">${data.greeting}</p>`
}
