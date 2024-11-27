<template>
        <header-home></header-home>
        <transition name="slide" mode="out-in">
      <router-view />
    </transition>
         <footer-component></footer-component>

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