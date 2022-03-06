import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import storeDefinition from './store/index';

const app = createApp(App)

app.use(router)

const store = new Vuex.Store(storeDefinition);
app.use(store)

app.mount('#app')
