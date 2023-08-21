import './assets/main.css'
import { createApp } from 'vue'
import { createRouter,createWebHashHistory} from 'vue-router'
import App from './App.vue'
import ViewNotes from '@/Pages/ViewNotes.vue'
import ViewStats from '@/Pages/ViewStats.vue'

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'notes',
            component:ViewNotes
        },
        {
            path:'/stats',
            name:'stats',
            component:ViewStats
        }
    ]
})

createApp(App)
.use(router)
.mount('#app')
