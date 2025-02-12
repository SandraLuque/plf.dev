export const languageList: Record<string, { code: string; name: string }> = {
  en: {
    code: 'en',
    name: 'English',
  },
  es: {
    code: 'es',
    name: 'Español',
  },
}

export const defaultLang = 'es'
export const showDefaultLang = false

export const labels = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mi',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contactos',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
  },
} as const

export const routes = {
  es: {
    '#inicio': '#inicio',
    '#acerca-de': '#acerca-de',
    '#proyectos': '#proyectos',
    '#contacto': '#contacto',
  },
  en: {
    '#inicio': '#home',
    '#acerca-de': '#about',
    '#proyectos': '#projects',
    '#contacto': '#contact',
  },
}
