// element-ui 語系包
import enUSLocale from 'element-ui/lib/locale/lang/en';

const enUS = {
  components: {
    Datepicker: {
      placeholder: 'Select Date'
    },
    DropdownLanguage: {
      title: 'English'
    },
    SideNav: {
      navList: [
        {
          name: 'Home',
          path: 'index'
        },
        {
          name: 'About',
          path: 'about'
        },
        {
          name: 'Works',
          path: 'works'
        }
      ]
    }
  },
  pages: {
    Works: {
      title: 'Works',
      technologies: 'Technologies:',
      worksItemList: [
        {
          id: 'SleekFlow',
          imageUrl: 'https://i.imgur.com/UFw3psv.png',
          title: 'SleekFlow',
          description:
            'An Omni-Channel social commerce SaaS platform based on React and TypeScript. The mobile App version is built by Flutter framework.',
          technologies:
            'Typescript, Redux Observable, XState, Storybook, RxJS, Semantic UI, stylus'
        },
        {
          id: 'SUPLEX',
          imageUrl: 'https://i.imgur.com/Anh1L77.png',
          title: 'SUPLEX',
          description:
            'SUPLEX is a SaaS website that use R3 Corda as the blockchain infrastructure to help enterprise to manage supply chain finance. It was built by Next.js and using SWR to enhance better user experience and fully tested using Jest and Cypress.',
          technologies:
            'Next.js, SWR, Storybook, Cypress, Chakra UI, Cypress, Jest, React Hook Form'
        },
        {
          id: 'Customize Components Editor',
          imageUrl:
            'https://images.cakeresume.com/ANNw5/eric-3295e7-bd27fa/2b32116b-a963-4533-b086-b08e4d816136.png',
          title: 'Customize Components Editor',
          description:
            'A self-built from the ground up multi-language admin website with the drag-n-drop feature using Craft.js to let the user customize their own components. It is running on React and Redux, using Node.js and MySQL to create RESTful APIs.',
          technologies:
            'React, Redux-Toolkit, React i18next, JWT, Craft.js, Tailwind CSS, Node.js, MySQL'
        },
        {
          id: 'Video Management Center',
          imageUrl:
            'https://images.cakeresume.com/ANNw5/eric-3295e7-bd27fa/74f03c44-8b46-4172-ae97-d90821d9137b.png',
          title: 'Video Management Center',
          description:
            'Admin website can let admin upload and manage video, having React-based HLS video player component built by hls.js.',
          technologies:
            'React, Redux-Toolkit, styled-components, hls.js, Ant Design, Cypress, JWT'
        },
        {
          id: 'Game Bus',
          imageUrl:
            'https://images.cakeresume.com/3Vxo8/eric-3295e7/72a1e76d-c3f2-4206-b2bb-cb545f44c718.png',
          title: 'Game Bus',
          description:
            'Admin website integrating different kinds of games API. The admin user can arrange game API settings and see a variety of reports.',
          technologies: 'React, Redux-Thunk, Sass, JWT'
        },
        {
          id: 'Game Management Center',
          imageUrl:
            'https://images.cakeresume.com/3Vxo8/eric-3295e7/0a1e744c-8ddc-4571-825f-2101fb2cd7eb.png',
          title: 'Game Management Center',
          description:
            'A Vue-based large and complex admin website with multi-language and more than 100 pages using TypeScript and Vuex and implemented Sheet.js to convert HTML tables to Excel files.',
          technologies: 'Vue, Vuex, Vue i18n, ,TypeScript, Sheet.js'
        },
        {
          id: 'Wave One POS Admin',
          imageUrl:
            'https://images.cakeresume.com/ANNw5/eric-3295e7-bd27fa/553595f6-252c-430a-82da-98fefe7e31f7.png',
          title: 'Wave One POS Admin',
          description:
            'POS machine data management website with multi-Language, using Nuxt.js SSR technology and Element UI. This website is running in the browser of the POS machine.',
          technologies: 'Vue, Vuex, Nuxt.js, Vue i18n, Stylus, Pug'
        },
        {
          id: 'CEC Electronic Forms Management',
          imageUrl:
            'https://images.cakeresume.com/eric-3295e7/b31c5609-a3f4-475a-a5eb-335abedcb479.png',
          title: 'CEC Electronic Forms Management',
          description:
            'A self-built from the ground up admin website that can let the user customize forms with fully validated dynamic-created input columns and upload several images as an attachment by Integrating Dropbox API.',
          technologies: 'Vue, Vuex, Vue i18n, Dropbox API, iView, Vuelidate'
        },
        {
          id: 'XareFit Gym Schedule Management',
          imageUrl:
            'https://images.cakeresume.com/eric-3295e7/a3b15f6a-c05d-4992-ba87-093bcf1c618b.png',
          title: 'XareFit Gym Schedule Management',
          description:
            'A website with a calendar to let coach and gym manager create, audit, and schedule the course, integrating Google Maps API and Facebook login API.',
          technologies:
            'Vue, Vuex, Vue i18n, Google Maps API, Facebook API, FullCalendar.js'
        },
        {
          id: 'Cloud Interactive Official Website',
          imageUrl:
            'https://images.cakeresume.com/eric-3295e7/1ee0ddb3-cdf2-4006-a72b-621a62470645.png',
          title: 'Cloud Interactive Official Website',
          description:
            'A multi-language and responsive website of the company, using prerender-spa-plugin to optimize SEO.',
          technologies:
            'Vue, Vue Router, Vue i18n, Stylus, Pug, prerender-spa-plugin'
        }
      ]
    }
  },
  ...enUSLocale
};
export default enUS;
