export function parseInternalLinkHref(element) {
  if (element === document.body) {
    return null
  }
  if (element.tagName !== 'A') {
    // Recurse up until we reach an anchor element
    return parseInternalLinkHref(element.parentElement)
  }
  const href = element.getAttribute('href')
  if (href === null || href[0] !== '#') {
    return null
  }
  return href.slice(1)
}
