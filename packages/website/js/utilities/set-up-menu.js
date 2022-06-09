import { HIDE_MENU_TOGGLE_BUTTON_BREAKPOINT } from './constants.js'
import { parseInternalLinkHref } from './parse-internal-link-href.js'

export function setUpMenu({
  menuElementSelector,
  menuToggleButtonElementSelector,
  menuVisibleBodyClassName
}) {
  const menuElement = document.querySelector(menuElementSelector)
  const menuToggleButtonElement = document.querySelector(
    menuToggleButtonElementSelector
  )

  function toggleMenuVisibility() {
    if (document.body.classList.contains(menuVisibleBodyClassName) === true) {
      document.body.classList.remove(menuVisibleBodyClassName)
    } else {
      document.body.classList.add(menuVisibleBodyClassName)
    }
    menuToggleButtonElement.setAttribute(
      'aria-expanded',
      menuToggleButtonElement.getAttribute('aria-expanded') === 'true'
        ? 'false'
        : 'true'
    )
  }

  function handleMenuClick(event) {
    if (
      window.innerWidth < HIDE_MENU_TOGGLE_BUTTON_BREAKPOINT &&
      menuElement.contains(event.target) &&
      parseInternalLinkHref(event.target) !== null
    ) {
      toggleMenuVisibility()
    }
  }
  menuElement.addEventListener('click', handleMenuClick)

  function handleMenuToggleButtonClick() {
    toggleMenuVisibility()
  }
  menuToggleButtonElement.addEventListener('click', handleMenuToggleButtonClick)

  function handleWindowClick(event) {
    if (
      document.body.classList.contains(menuVisibleBodyClassName) === false ||
      menuToggleButtonElement === event.target ||
      menuElement.contains(event.target) === true
    ) {
      return
    }
    toggleMenuVisibility()
  }
  window.addEventListener('click', handleWindowClick)
}
