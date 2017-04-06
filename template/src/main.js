{{#vuex}}import 'es6-promise/auto'{{/vuex}}
import Vue from 'vue'
import MgApp from './MgApp'

{{#vuex}}{{#router}}import { sync } from 'vuex-router-sync'{{/router}}{{/vuex}}
{{#vuex}}import store from './store'{{/vuex}}
{{#router}}import router from './router'{{/router}}

// You can use both the components found @https://bootstrap-vue.github.io/
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

// Or use manual bootstrap 4 from @https://v4-alpha.getbootstrap.com/getting-started/introduction/
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
{{#vuex}}{{#router}}
// Keeps the router and the store in sync @https://github.com/vuejs/vuex-router-sync
sync(store, router)
{{/router}}{{/vuex}}
Vue.use(BootstrapVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#router}}
  router,
  {{/router}}
  {{#vuex}}
  template: '<MgApp />',
  {{else}}
  data: {
    message: window.__INITIAL_STATE__
  },
  template: '<MgApp :message="message"></MgApp>',
  {{/vuex}}
  components: { MgApp }
})
