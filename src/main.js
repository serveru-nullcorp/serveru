import 'regenerator-runtime/runtime'
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './main.scss'

Vue.use(ElementUI)

import { router } from './router'
import { store } from './store'

new Vue({ store, router }).$mount('#app')
