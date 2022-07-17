import Home from './views/Home.vue'
import Personal from './views/Personal.vue'
import Summary from './views/Summary.vue'
import AgeError from './views/AgeError.vue'
import NotFound from './views/NotFound.vue'

export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' }},
  { path: '/personal', component: Personal, meta: { title: 'Self' }},
  { path: '/summary', component: Summary, meta: { title: 'Summary' }},
  { path: '/error', component: AgeError, meta: { title: 'AgeError' }},
  { path: '/:pathMatch(.*)*', component: NotFound, meta: { title: 'Page not found' }},
]
