import { parseInternalLinkHref } from './parse-internal-link-href.js'

const MENU_ELEMENT_SELECTOR = '.menu'
const MENU_TOGGLE_BUTTON_ELEMENT_SELECTOR = '.menu-toggle-button'
const MENU_VISIBLE_BODY_CLASS_NAME = '--menu-visible'

const HIDE_MENU_TOGGLE_BUTTON_BREAKPOINT = 960

export function setUpMenu() {
  const menuElement = document.querySelector(MENU_ELEMENT_SELECTOR)
  const menuToggleButtonElement = document.querySelector(
    MENU_TOGGLE_BUTTON_ELEMENT_SELECTOR
  )

  function toggleMenuVisibility() {
    if (
      document.body.classList.contains(MENU_VISIBLE_BODY_CLASS_NAME) === true
    ) {
      document.body.classList.remove(MENU_VISIBLE_BODY_CLASS_NAME)
    } else {
      document.body.classList.add(MENU_VISIBLE_BODY_CLASS_NAME)
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
      document.body.classList.contains(MENU_VISIBLE_BODY_CLASS_NAME) ===
        false ||
      menuToggleButtonElement === event.target ||
      menuElement.contains(event.target) === true
    ) {
      return
    }
    toggleMenuVisibility()
  }
  window.addEventListener('click', handleWindowClick)
}
