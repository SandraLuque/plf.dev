import { defaultLang, labels, routes, showDefaultLang } from './ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in labels) return lang as keyof typeof labels
  return defaultLang
}

export function useTranslations(lang: keyof typeof labels) {
  return function translate(key: keyof (typeof labels)[typeof defaultLang]) {
    return labels[lang][key] || labels[defaultLang][key]
  }
}

export function useTranslatedPath(lang: keyof typeof labels) {
  return function translatePath(path: string, l: string = lang) {
    const pathName = path.replaceAll('/', '')
    const hasTranslation =
      defaultLang !== l &&
      (routes[l as keyof typeof routes] as Record<string, string>)[pathName] !== undefined
    const translatedPath = hasTranslation
      ? '/' + (routes[l as keyof typeof routes] as Record<string, string>)[pathName]
      : path

    return !showDefaultLang && l === defaultLang ? translatedPath : `/${l}${translatedPath}`
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = new URL(url).pathname
  const parts = pathname?.split('/')
  const path = parts.pop() || parts.pop()

  if (path === undefined) {
    return undefined
  }

  const currentLang = getLangFromUrl(url)

  if (defaultLang === currentLang) {
    const route = Object.values(routes)[0]
    return route[path as keyof typeof route] !== undefined
      ? route[path as keyof typeof route]
      : undefined
  }

  const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
    return Object.keys(obj).find((key) => obj[key] === value)
  }

  const reversedKey = getKeyByValue(routes[currentLang], path)

  if (reversedKey !== undefined) {
    return reversedKey
  }

  return undefined
}
