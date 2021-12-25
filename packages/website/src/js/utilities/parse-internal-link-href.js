export function parseInternalLinkHref(element) {
  if (element === document.body) {
    return null
  }
  if (element.tagName !== 'A') {
    return parseInternalLinkHref(element.parentElement)
  }
  let href = element.getAttribute('href')
  if (href === null || href[0] !== '#') {
    return null
  }
  return href.slice(1)
}
