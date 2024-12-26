<template>
  <section class="w-full max-w-5xl mx-auto px-4 py-16 space-y-16">
    <header class="flex flex-col items-center">
      <h1 class="text-5xl font-extrabold text-gray-800 tracking-wide">Welcome to Hype Store</h1>
      <p class="mt-4 text-lg text-gray-600 text-center max-w-3xl">
        Your one-stop destination for premium urban figurines and designer collectibles.
      </p>
      <div class="w-24 h-1 bg-orange-500 mt-6"></div>
    </header>

    <div class="space-y-8 text-gray-700 text-lg leading-8">
      <p class="animate-fade-in">
        Founded in November 2024, Hype Store began as a visionary project for an Internet Programming class. Today, we stand as a vibrant hub for collectors and enthusiasts who share a passion for urban figurines and designer toys.
      </p>
      <p class="animate-fade-in">
        At Hype Store, we don’t just sell products—we curate a lifestyle. Each collectible embodies the spirit of creativity, modern design, and cultural diversity. From bold, colorful figurines to limited-edition designer toys, our products inspire a sense of wonder and artistic appreciation.
      </p>
      <p class="animate-fade-in">
        Our platform, <a href="http://www.hypestore.com" target="_blank" rel="noopener noreferrer" class="text-orange-500 hover:underline">
          www.hypestore.com
        </a>, isn’t just an online store. It’s a thriving community where collectors come together to explore, connect, and share their love for collectible art. Whether you’re a seasoned collector or just starting your journey, Hype Store is here to inspire and support you.
      </p>
    </div>


    <div>
      <h2 class="text-4xl font-bold text-gray-800 text-center">Our Commitment</h2>
      <p class="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
        At Hype Store, we’re guided by three core principles that define everything we do.
      </p>
      <div class="flex flex-wrap justify-center gap-12 mt-8">
        <div class="flex flex-col items-center text-center space-y-4 max-w-xs hover:scale-105 transform transition duration-300">
          <img src="/icons/quality.png" alt="Quality" class="w-20 h-20" />
          <h3 class="text-2xl font-bold text-gray-800">Uncompromising Quality</h3>
          <p class="text-gray-600">We prioritize excellence in every product, ensuring our customers receive only the best in collectible art.</p>
        </div>
        <div class="flex flex-col items-center text-center space-y-4 max-w-xs hover:scale-105 transform transition duration-300">
          <img src="/icons/innovation.png" alt="Innovation" class="w-20 h-20" />
          <h3 class="text-2xl font-bold text-gray-800">Relentless Innovation</h3>
          <p class="text-gray-600">Our designs are a bold blend of urban culture, artistic ingenuity, and cutting-edge creativity.</p>
        </div>
        <div class="flex flex-col items-center text-center space-y-4 max-w-xs hover:scale-105 transform transition duration-300">
          <img src="/icons/community.png" alt="Community" class="w-20 h-20" />
          <h3 class="text-2xl font-bold text-gray-800">A Thriving Community</h3>
          <p class="text-gray-600">We connect collectors, artists, and enthusiasts to foster a sense of belonging and shared passion.</p>
        </div>
      </div>
    </div>

    <div class="text-center">
      <h2 class="text-4xl font-bold text-gray-800">Let’s Connect</h2>
      <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
        Have a question? Need assistance? Or simply want to collaborate? We’re here for you.
      </p>
      <ul class="space-y-4 mt-6 text-gray-700">
        <li class="animate-slide-in-left text-lg">
          📧 Email: 
          <a href="mailto:contact@hypestore.com" class="text-orange-500 hover:underline">contact@hypestore.com</a>
        </li>
        <li class="animate-slide-in-left text-lg">
          📞 Phone: 
          <a href="tel:+85512345678" class="text-orange-500 hover:underline">+855 12 345 678</a>
        </li>
        <li class="animate-slide-in-left text-lg">
          🖥️ Visit: 
          <a href="/contact-us" class="text-orange-500 hover:underline">Contact Form</a>
        </li>
      </ul>
      <p class="mt-8 text-gray-500 italic">
        Let’s make your next project unforgettable. Together, we bring ideas to life.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutUsPage",
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-in-out;
}

.animate-slide-in-left {
  animation: slide-in-left 1s ease-in-out;
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
