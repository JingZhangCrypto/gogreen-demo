import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import walletEn from '../../public/locales/en/wallet.json'
import commonEn from '../../public/locales/en/common.json'
import homeEn from '../../public/locales/en/home.json'

const resources = {
  en: {
    wallet: walletEn,
    common: commonEn,
    home: homeEn,
  },
}

export type Lang = keyof typeof resources

export enum LangEnum {
  En = 'en',
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    backend: {
      /* translation file path */
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    supportedLngs: ['en', 'zh'],
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'wallet',
    ns: ['wallet'],
    react: {
      useSuspense: false,
    },
  })

// preload english
i18n.addResourceBundle('en', 'wallet', walletEn)

export default i18n
