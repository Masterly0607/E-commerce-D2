import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'',
      component: () => import("@/layouts/MainLayout.vue"),
      children:[
        {
          path: "/home",
          name: "home-page",
          component: () => import("@/pages/home/HomePage.vue"),
        },
        {
          path: "product",
          name: "product-page",
          component: () => import("@/pages/product/ProductPage.vue"),
        },
        {
          path: "new-release",
          name: "new-release-page",
          component: () => import("@/pages/new-release/NewReleasePage.vue"),
        },
        {
          path: "trending",
          name: "trending-page",
          component: () => import("@/pages/trending/TrendingPage.vue"),
        },
        {
          path: "about-us",
          name: "about-us-page",
          component: () => import("@/pages/about-us/AboutUsPage.vue"),
        },
        {
          path: "/contact-us",
          name: "contact-us-page",
          component: () => import("@/pages/contact-us/ContactUsPage.vue"),
        },
      ]
     },
     {
      path:'/auth',
      component: () => import("@/layouts/BlankLayout.vue"),
      children:[
        {
          path: "sign-in",
          name: "login-page",
          component: () => import("@/pages/authentication/SignInPage.vue"),
        },
  
        {
          path: "sign-up",
          name: "sign-up-page",
          component: () => import("@/pages/authentication/SignUpPage.vue"),
        },
        
      ]
     }
  ],
})

export default router
