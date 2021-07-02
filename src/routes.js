import {createRouter, createWebHistory} from "vue-router";
import Todos from './components/Todos';
import Users from './components/Users';



const routes=[
    {
        name :'Todos',
        component:Todos,
        path:'/',
    },
    {
        name :'Users',
        component:Users,
        path:'/users',
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router