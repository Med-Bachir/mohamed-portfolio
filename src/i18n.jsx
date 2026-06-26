import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import translations from './translations'

export const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
]

const RTL_LANGS = ['ar']
const STORAGE_KEY = 'portfolio-lang'

const LanguageContext = createContext(null)

function resolve(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    return translations[saved] ? saved : 'en'
  })

  const dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore storage errors */
    }
  }, [lang, dir])

  const value = useMemo(() => {
    const setLang = (code) => {
      if (translations[code]) setLangState(code)
    }
    // t(path): looks up the current language, falls back to English, then the key
    const t = (path) => {
      const hit = resolve(translations[lang], path)
      if (hit !== undefined) return hit
      const fallback = resolve(translations.en, path)
      return fallback !== undefined ? fallback : path
    }
    return { lang, setLang, dir, t }
  }, [lang, dir])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider')
  return ctx
}
