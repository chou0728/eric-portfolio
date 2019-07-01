import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ElementLocale from 'element-ui/lib/locale';
import enUS from '@/locales/en-US';
import zhTW from '@/locales/zh-TW';

Vue.use (VueI18n);

export default ({app, store}) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n ({
    locale: store.state.locale,
    fallbackLocale: store.state.locale || 'zhTW',
    messages: {
      enUS,
      zhTW,
    },
  });
  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`;
    }
    return `/${app.i18n.locale}/${link}`;
  };

  ElementLocale.i18n ((key, value) => app.i18n.t (key, value));
};
