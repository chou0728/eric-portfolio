// element-ui 語系包
import zhTWLocale from 'element-ui/lib/locale/lang/zh-CN';
import section_introduce_photo_1 from '../assets/images/section_introduce_photo_1.png'
import section_introduce_photo_2 from '../assets/images/section_introduce_photo_2.png'
import section_choose_photo_1 from '../assets/images/section_choose_photo_1.png'
import section_choose_photo_2 from '../assets/images/section_choose_photo_2.png'
import purchase_step_1 from '../assets/images/purchase_step_1.gif'
import purchase_step_2 from '../assets/images/purchase_step_2.gif'
import purchase_step_3 from '../assets/images/purchase_step_3.gif'
import purchase_step_4 from '../assets/images/purchase_step_4.gif'
import purchase_step_5 from '../assets/images/purchase_step_5.gif'


const zhTW = {
  components: {
    Datepicker: {
      placeholder: '選擇日期',
    },
    DropdownLanguage: {
      title: '繁體中文',
    },
    Header: {
      navList: [
        {
          path: 'about',
          title: '關於我',
        },
        {
          path: 'works',
          title: '作品集',
        }
      ],
    },
  },
  pages: {
    Index: {}
  },
  ...zhTWLocale,
};
export default zhTW;
