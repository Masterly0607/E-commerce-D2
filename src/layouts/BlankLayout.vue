<template>
    <section>
    <div class="p-8 bg-black h-40">
        <router-link :to="{name:'home-page'}">
            <img src="/public/icons/apple-touch-icon.png" alt="logo" class="h-32">
        </router-link>
       
    </div>
    </section>
    <router-view />
</template>