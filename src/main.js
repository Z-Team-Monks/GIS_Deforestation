import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'leaflet/dist/leaflet.css';
import router from './router'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pinTree from './assets/pine-tree.png'
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
   iconUrl: require('leaflet/dist/images/marker-icon.png'),
   shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

export default {
  data() {
        pinTree
  }
}
