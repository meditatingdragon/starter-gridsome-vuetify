import Vuetify from 'vuetify'
import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { appOptions, head }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.10.2/css/all.css'
  })
  
  const opts = {
    icons: {
      iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
   }
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}