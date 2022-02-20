import { createRouter, createWebHashHistory } from 'vue-router'

import Films from "../components/Films"
import Film from "../components/Film"
import TreePage from "../components/TreePage"
import FourPage from "../components/FourPage"
import FivePage from "../components/FivePage"


const routes = [
    {
        path: '/',
        name: 'Фильмы',
        component: Films
    },
    {
        path: '/film',
        name: 'Фильм',
        component: Film
    },
    {
        path: '/treePage/:id',
        name: 'Третья страница',
        component: TreePage
    },
    {
        path: '/fourPage',
        name: 'четвертая страница',
        component: FourPage
    },
    {
        path: '/fivePage/:moveId',
        name: 'пятая страница',
        component: FivePage
    },

]

const router = createRouter({ history: createWebHashHistory(), routes })
export default router