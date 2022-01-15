import { HIDE_MENU_TOGGLE_BUTTON_BREAKPOINT } from './constants.js'
import { parseInternalLinkHref } from './parse-internal-link-href.js'

const TOC_ELEMENT_SELECTOR = '.menu__toc'
const ACTIVE_TOC_ELEMENT_CLASSNAME = 'menu__active'
const HEADER_ELEMENTS_SELECTOR = 'h2[id], h3[id], h4[id]'

export function setUpToc() {
  let headers = parseHeaders()

  if (window.innerWidth < HIDE_MENU_TOGGLE_BUTTON_BREAKPOINT) {
    function handleWindowScroll() {
      updateTocActiveElement(headers)
    }
    window.addEventListener('scroll', handleWindowScroll)
    return
  }

  window.history.scrollRestoration = 'manual'

  function handleInternalLinkClick(event) {
    if (event.metaKey === true || event.shiftKey === true) {
      return
    }
    const id = parseInternalLinkHref(event.target)
    if (id === null) {
      return
    }
    if (scrollToId(headers, id, { pushState: true }) === true) {
      event.preventDefault()
    }
  }
  window.addEventListener('click', handleInternalLinkClick)

  function handlePopState(event) {
    event.preventDefault()
    if (event.state === null) {
      window.scrollTo({ top: 0 })
      return
    }
    window.scrollTo({ top: event.state.scrollY })
  }
  window.addEventListener('popstate', handlePopState)

  function handleWindowResize() {
    headers = parseHeaders()
    handleWindowScroll()
  }
  window.addEventListener('resize', handleWindowResize)

  function handleWindowScroll() {
    updateTocActiveElement(headers)
    history.replaceState(
      { scrollY: window.scrollY },
      null,
      window.location.hash
    )
  }
  window.addEventListener('scroll', handleWindowScroll)

  const id = window.location.hash.slice(1)
  if (id !== '') {
    scrollToId(headers, id, { pushState: false })
  }
}

function parseHeaders() {
  const headerElements = Array.prototype.slice.call(
    document.body.querySelectorAll(HEADER_ELEMENTS_SELECTOR)
  )

  const headers = []
  for (const headerElement of headerElements) {
    headers.push({
      id: headerElement.getAttribute('id'),
      scrollY: headerElement.offsetTop
    })
  }

  const maxScrollY = document.documentElement.offsetHeight - window.innerHeight
  const lastScrollY = headers[headers.length - 1].scrollY
  if (lastScrollY <= maxScrollY) {
    return headers
  }

  const startScrollY = maxScrollY - window.innerHeight
  const ratio = window.innerHeight / (lastScrollY - startScrollY)
  return headers.map(function (header, index) {
    if (header.scrollY <= startScrollY) {
      return header
    }
    if (index === headers.length - 1) {
      return { ...header, scrollY: maxScrollY }
    }
    return {
      ...header,
      scrollY: Math.round(
        startScrollY + (header.scrollY - startScrollY) * ratio
      )
    }
  })
}

function scrollToId(headers, id, { pushState }) {
  const header = headers.find(function (header) {
    return header.id === id
  })
  if (typeof header === 'undefined') {
    updateTocActiveElement(headers)
    return false
  }
  const state = { scrollY: header.scrollY }
  if (pushState === true) {
    history.pushState(state, null, `#${id}`)
  } else {
    history.replaceState(state, null, `#${id}`)
  }
  window.scrollTo({ top: header.scrollY })
  updateTocActiveElement(headers)
  return true
}

function updateTocActiveElement(headers) {
  const tocElement = document.querySelector(TOC_ELEMENT_SELECTOR)
  const previousActiveElement = tocElement.querySelector(
    `.${ACTIVE_TOC_ELEMENT_CLASSNAME}`
  )
  if (previousActiveElement !== null) {
    previousActiveElement.classList.remove(ACTIVE_TOC_ELEMENT_CLASSNAME)
  }
  const id = computeActiveId(headers)
  if (id === null) {
    return
  }
  const activeElement = tocElement.querySelector(`[href="#${id}"]`)
  if (activeElement === null) {
    return
  }
  activeElement.classList.add(ACTIVE_TOC_ELEMENT_CLASSNAME)
}

function computeActiveId(headers) {
  for (const header of headers.slice().reverse()) {
    if (header.scrollY <= window.scrollY) {
      return header.id
    }
  }
  return null
}
