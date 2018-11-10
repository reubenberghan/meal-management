export function getPathname ({ router: { location: { pathname } = {} } = {} }) {
  return pathname
}

export function getSearch ({ router: { location: { search } = {} } = {} }) {
  return search
}
