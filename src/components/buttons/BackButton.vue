<template>
    <section>
        <div class="inline-flex gap-2 cursor-pointer hover:bg-gray-200 p-2 my-3" @click="goToHome">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 font-medium">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
</svg>
<span class="font-medium">Back</span>
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goToHome = () =>{
      router.push('/');
}
</script>