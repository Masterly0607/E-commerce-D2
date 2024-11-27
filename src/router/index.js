import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      component: () => import("@/layouts/MainLayout.vue"),
      children:[
        {
          path: "",
          name: "home-page",
          component: () => import("@/pages/home/HomePage.vue"),
        },
        {
          path: "",
          name: "product-page",
          component: () => import("@/pages/product/ProductPage.vue"),
        },
        {
          path: "",
          name: "about-us-page",
          component: () => import("@/pages/about-us/AboutUsPage.vue"),
        },
        {
          path: "",
          name: "contact-us-page",
          component: () => import("@/pages/contact-us/ContactUsPage.vue"),
        },
      ]
     }
  ],
})

export default router
