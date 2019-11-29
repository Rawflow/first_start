import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
//import Vuetify from 'vuetify/lib'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

/*export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
})*/