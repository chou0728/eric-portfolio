// element-ui 語系包
import enLocale from 'element-ui/lib/locale/lang/en';

const enUS = {
  components: {
    Datepicker: {
      placeholder: 'Select Date',
    },
    DropdownLanguage: {
      title: 'English',
    },
    Header: {
      navList: [
        {
          path: 'about',
          title: 'About',
        },
        {
          path: 'works',
          title: 'Works',
        }
      ],
    },
  },
  pages: {
    Index: {}
  },
  ...enLocale,
};
export default enUS;
