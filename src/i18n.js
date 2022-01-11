import { createI18n } from "vue-i18n/dist/vue-i18n.esm-bundler.js";


const messages = {
  en: {
    appText: {
      knowMe: 'More about me',
      about: 'About',
      skill: 'Skills',
      contact: 'Contact'
    }
  },
  ptBr: {
    appText: {
      knowMe: 'Saiba mais sobre mim',
      about: 'Sobre',
      skill: 'Competências',
      contact: 'Contato',
      greetingsArray: ['desenvolvedor Frontend', 'viajante no tempo e espaço', 'mestre de RPG', 'main Syndra no LoL', 'o (nem tão) famoso Gabigol'],
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'ptBr', // set locale
  fallbackLocale: 'ptBr', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n;