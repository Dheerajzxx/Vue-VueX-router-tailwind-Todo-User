import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import store from './store'
import './index.css'

createApp(App).use(routes).use(store).mount('#app')
