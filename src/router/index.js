import Vue from 'vue';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home');
const City = () => import('views/city/City');
const Detail = () => import('views/detail/Detail');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/city',
    name: 'City',
    component: City,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
