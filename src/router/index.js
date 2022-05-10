import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";

import sourceData from '@/data.json'

const webHistoryPath = import.meta.env.BASE_URL

const getDestination = async ({id, slug})=>{
    const result = await fetch(`https://travel-dummy-api.netlify.app/${slug}`);
    const destination = await result.json()
  return destination.id == parseInt(id)
}

const routes = [
  { 
    path: "/", 
    name: "Home", 
    component: Home, 
    // alias:'/home' 
  },
  { 
    path: "/home", 
    redirect: '/' 
  },
  { 
    path: "/login", 
    name: "login", 
    component: ()=>import('@/views/Login.vue'),
  },
  { 
    path: "/protected", 
    name: "protected", 
    components:{
      default: ()=>import('@/views/Protected.vue'),
      LeftSidebar: ()=>import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: "/invoices", 
    name: "invoices", 
    components:{
      default: ()=>import('@/views/Invoices.vue'),
      LeftSidebar: ()=>import('@/components/LeftSidebar.vue'),
    },
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: "/user/:id(\\d+)", 
    name: "user", 
    component:()=>import('@/views/User.vue'),
    props: (route) => ({...route.params, userId: parseInt(route.params.id)}),
  },
  { 
    path: "/destination/:id/:slug", 
    name:"destination.show", 
    component: ()=>import('@/views/DestinationShow.vue'), 
    props: (route) => ({...route.params, id: parseInt(route.params.id)}),
    async beforeEnter(to){
      let {id, slug} = to.params;
      const exist = sourceData.destinations.find(destination => destination.id == parseInt(to.params.id))
      // const exist = getDestination({id, slug})

      if(!exist){
        return {
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash if any
          query: to.query,
          hash: to.hash,
        }
      }
    },
    children: [
      { 
        path: ":experienceSlug", 
        name:"experience.show", 
        component: ()=>import('@/views/ExperienceShow.vue'), 
        props: (route) => ({...route.params, id: parseInt(route.params.id) })
      }
    ]
  },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: ()=>import('@/views/NotFound.vue')  },
]




const router = createRouter({
  history: createWebHistory(webHistoryPath),
  routes,
  // linkActiveClass: "nav-active-link",
  scrollBehavior(to, from, savedPosition){
    
    if (savedPosition) {
      return savedPosition
    }
  
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        }, 300)
      })
    }
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({top: 0, behavior: 'smooth'})
      }, 300)
    })
  }
})

router.beforeEach((to,from, next)=>{
  if (to.meta.requiresAuth && !window.USER) {
    next({name: 'login', query: {redirect: to.fullPath}});
  } else {
    next();
  }
  
})

export default router