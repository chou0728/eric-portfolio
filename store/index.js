export const state = () => ({
  locales: ['enUS', 'zhTW'],
  locale: 'zhTW'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const actions = {
  setLang(vuexContext, locale) {
    vuexContext.commit ('SET_LANG', locale);
  }
}
