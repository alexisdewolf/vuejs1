import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home.vue'
import Note from './Note.vue'
Vue.use(VueRouter)

const routes =
[
{ path: "/", component: Home},
{ path: '/note', component: Note},
]

export default new VueRouter( { routes })