import { setUpMenu } from './utilities/set-up-menu.js'
import { setUpToc } from './utilities/set-up-toc.js'

function main() {
  setUpMenu({
    menuElementSelector: '.menu',
    menuToggleButtonElementSelector: '.menu-toggle-button',
    menuVisibleBodyClassName: '--menu-visible'
  })
  window.addEventListener('load', function () {
    setUpToc({
      activeTocItemClassName: 'menu__active',
      headersElementSelector: 'h2[id], h3[id], h4[id]',
      tocElementSelector: '.menu__toc'
    })
  })
}
main()
