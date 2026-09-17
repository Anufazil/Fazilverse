// Nav items point at sections that only exist on the home page
// ("#about", "#skills", etc). This resolves such a hash-only href to
// a route the router understands ("/#about") so clicking it works
// correctly from any page, not just "/" — a plain <a href="#about">
// does nothing when the current page has no element with that id.
export function toHomeRoute(href) {
  return href === "#home" ? "/" : `/${href}`;
}
