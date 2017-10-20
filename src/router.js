import Router from 'vue-router';
import Login from './views/login/login.vue';
// import Mine from '../pages/mine/mine.vue';

Vue.use(Router)

// Story view factory
function createStoriesView (type) {
  return {
    name: `${type}-stories-view`,
    render (createElement) {
      return createElement(StoriesView, { props: { type }})
    }
  }
}

export default new Router({
  routes: [
    {
      path:'/login',
      name: 'login',
      component: Login
    },
  ]
})
