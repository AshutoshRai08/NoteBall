import { createRouter,createWebHashHistory} from 'vue-router'
import ViewNotes from '@/Pages/ViewNotes.vue'
import ViewStats from '@/Pages/ViewStats.vue'


const routes=[
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
const router=createRouter({
    history:createWebHashHistory(),
    routes:routes
})
export default router