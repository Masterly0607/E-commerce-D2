<template>
  <!-- min-h-screen:  ensure that the container always fills the entire height of the screen, even if the content inside is very small. -->
   <!-- flex-grow: to make an element (like the middle content) expand and fill any extra space inside a flexible container. -->
    <!-- flex:  Makes the container flexible so its child items can adjust their size and position. -->
  <section class="flex flex-col min-h-screen" >
    <header-home></header-home>
        <transition name="slide" mode="out-in">
      <router-view  class="flex-grow" />
    </transition>
         <footer-component></footer-component>
  </section>
        

</template>
<script setup>

import HeaderHome from '@/components/footers/HeaderComponent.vue';
import FooterComponent from '@/components/footers/FooterComponent.vue';

</script>

<style>
/* Slide animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, opacity 0.5s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>