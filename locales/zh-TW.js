// element-ui 語系包
import zhTWLocale from 'element-ui/lib/locale/lang/zh-CN';

const zhTW = {
  components: {
    Datepicker: {
      placeholder: '選擇日期',
    },
    DropdownLanguage: {
      title: '繁體中文',
    },
    SideNav: {
			navList: [
				{
					name: '首頁',
					path: 'index'
				},
				{
					name: '關於我',
					path: 'about'
				},
				{
					name: '作品集',
					path: 'works'
				}
			]
    },
  },
  pages: {
    Works: {
      title: '作品集',
      worksItemList: [
        {
          id: '1',
          link: 'http://cec-api-sit.cloud-interactive.com:5556',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/b31c5609-a3f4-475a-a5eb-335abedcb479.png',
          title: '大陸工程內部管理系統',
          descriptionList: [
            '使用Vue實作高互動性動態簽核表單',
            '照片上傳功能串接 Dropbox API',
            '採用vuelidate 做表單驗證',
            '使用iView做為 UI component library'
          ]
        },
        {
          id: '2',
          link: 'http://210.242.7.83:12081/',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/a3b15f6a-c05d-4992-ba87-093bcf1c618b.png',
          title: 'XareFit 健身房內部管理系統',
          descriptionList: [
            '使用FullCalendar實作教練課程行事曆',
            '串接FB API實作FB登入功能',
            '串接Google GeoLocation API 協助使用者做定位',
            '使用Element UI 做為 UI component library',
            '透過vue i18n來達成多國語系功能'
          ]
        },
        {
          id: '3',
          link: 'https://www.cloud-interactive.com',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/1ee0ddb3-cdf2-4006-a72b-621a62470645.png',
          title: 'Cloud Interactive 形象官網',
          descriptionList: [
            '使用pre-rendering 技術優化網站SEO',
            '對接Mail Server API來實作使用者填表後即時通知公司行銷團隊',
            '透過vue i18n來達成多國語系功能',
            '部分頁面採用CSS Grid 佈局'
          ]
        },
        {
          id: '4',
          link: '#',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/a67f8b53-6b95-4821-b2b7-5a75621d2de1.png',
          title: 'Wave One POS機後台系統',
          descriptionList: [
            '使用 Nuxt 實作server-rendering 優化性能',
            '透過vue i18n來達成多國語系功能',
            '採用vuelidate 做表單驗證'
          ]
        },
        {
          id: '5',
          link: '#',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/36e9d06b-f2bd-426e-b2ba-dff1c1f4b6e1.png',
          title: 'Poshmark Email HTML',
          descriptionList: [
            '與美國設計團隊共同開發響應式 Email HTML',
            '使用兼容所有新舊各式裝置與瀏覽器之CSS語法'
          ]
        },
        {
          id: '6',
          link: 'https://chou0728.github.io/revents/#/',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/6488e8aa-d5b8-457e-91ce-32f6f521ec9c.png',
          title: 'Re-vents 活動通',
          descriptionList: [
            '使用React搭配React Router做路由規劃',
            '使用Redux與Redux-Form做資料流管理及表單驗證',
            '利用Semantic UI React 美化頁面',
            '串接Google GeoLocation 與 Map API',
            '串接 FireBase Realtime Database 資料並與Redux做整合'
          ]
        },
        {
          id: '7',
          link: 'https://chou0728.github.io/nuxt-blog/',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/7354598e-bed3-484c-b56f-126fed2abb3a.png',
          title: 'Nuxt-Blog 部落格',
          descriptionList: [
            '使用 Nuxt 實作server-rendering網頁',
            '串接 FireBase Realtime Database 資料並與Vuex整合',
            '響應式(RWD)網頁',
          ]
        },
        {
          id: '8',
          link: 'http://140.115.236.72/demo-projects/BD103/BD103G3/home.php',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/8898b381-5652-465f-8e3a-8d150451a494.png',
          title: '資策會專題作品',
          descriptionList: [
            '使用PHP與MySQL建構API',
            '使用fullpage.js實作全屏滾動網頁',
            '響應式(RWD)網頁',
          ]
        },
        {
          id: '9',
          link: 'http://140.115.236.72/demo-personal/BD103/web/C1700348/html/index.html',
          imageUrl: 'https://images.cakeresume.com/eric-3295e7/ad1eef42-ccd4-4bb1-9a7e-de005778bbe5.png',
          title: '資策會個人作品',
          descriptionList: [
            '使用jQuery實作網頁動畫',
            '多數功能動畫效果使用原生JavaScript',
            '響應式(RWD)網頁',
          ]
        }
      ]
    }
  },
  ...zhTWLocale,
};
export default zhTW;
