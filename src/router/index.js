
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path:'/',
      redirect: '/home',
      component: () => import("@/layouts/MainLayout.vue"),
      children:[
        {
          path: "home",
          name: "home-page",
          component: () => import("@/pages/home/HomePage.vue"),
        },
        {
          path: "/character/:title",
          name: "character-detail",
          component: () => import("@/pages/characters/CharacterDetailPage.vue"),
          props: true, 
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
          path: "contact-us",
          name: "contact-us-page",
          component: () => import("@/pages/contact-us/ContactUsPage.vue"),
        },
        {
          path: "ProductDetail",
          name: "Detail",
          component: ()  => import ("@/pages/product/ProductDetail.vue"),
        },
        {
          path: "profile-setting",
          name: "profile-setting-page",
          component: ()  => import ("@/pages/authentication/userAccount/ProfileSetting.vue"),
          children:[
           
        {
          path: "order-history",
          name: "orderhistory",
          component: () => import("@/pages/authentication/userAccount/profile-setting-components/OrderHistoryPage.vue"),
        },
     
          ]
        },
        { 
          path: "faqs",
          name: "faqs-page",
          component: () => import("@/pages/FaqsPage/FaqsPage.vue"),
        },
        {
          path: "cart",
          name: "cart-page",
          component: ()  => import ("@/pages/cart/CartPage.vue"),
        },
        {
          path: "wish-list",
          name: "wish-list-page",
          component: () => import("@/pages/wishList/WishListPage.vue"),
        },
               
        {
          path: "payment-methods",
          name: "payment-methods-page",
          component: () => import("@/pages/authentication/userAccount/profile-setting-components/PaymentMethodsPage.vue"),
        }
       
      ]
     },
     
     {
      path:'/auth',
      component: () => import("@/layouts/BlankLayout.vue"),
      children:[
        {
          path: "sign-in",
          name: "sign-in-page",
          component: () => import("@/pages/authentication/SignInPage.vue"),
        },
  
        {
          path: "sign-up",
          name: "sign-up-page",
          component: () => import("@/pages/authentication/SignUpPage.vue"),
        },
        {
          path: "forgot-password",
          name: "forgot-password-page",
          component: () => import("@/pages/authentication/ForgotPasswordPage.vue"),
        },
        
      ]
     },
     {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/NotFoundPage.vue'), // Handle 404
    },
  ],
})

export default router
