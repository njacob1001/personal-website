/// <reference types="react-scripts" />
import es from 'platform/i18n/messages/es.json'
import en from 'platform/i18n/messages/en.json'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

// react-i18next versions lower than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface Resources {
    en: typeof en
    es: typeof es
  }
}

// react-i18next versions higher than 11.11.0
declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en'
    // custom resources type
    resources: {
      en: typeof en
      es: typeof es
    }
  }
}
