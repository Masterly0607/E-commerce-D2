<template>
    <section>
      <div class="w-full p-6 border-b-[2px]">
        <div class="flex justify-between items-center">
          <!-- Img box -->
          <div>
            <img src="/icons/favicon.ico" alt="Logo" />
          </div>
  
          <!-- Menu box -->
          <div>
            <nav>

              <ul class="flex gap-10  items-center">
                <li>
                  <router-link
                    :to="{ name: 'home-page' }"
                    class="text-gray-400 hover:bg-gray-200 p-3 text-xl"
                    active-class="text-orange-500 font-bold"
                  >
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{ name: 'product-page' }"
                    class="text-gray-400 hover:bg-gray-200 p-3 text-xl"
                    active-class="text-orange-500 font-bold"
                  >
                    Products
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{ name: 'about-us-page' }"
                    class="text-gray-400 hover:bg-gray-200 p-3 text-xl"
                    active-class="text-orange-500 font-bold"
                  >
                    About Us
                  </router-link>
                </li>
                <li>
                  <router-link
                    :to="{ name: 'contact-us-page' }"
                    class="text-gray-400 hover:bg-gray-200 p-3 text-xl"
                    active-class="text-orange-500 font-bold"
                  >
                    Contact Us
                  </router-link>
                </li>
                 
                <!-- Seperator -->
                <div class="w-[2px] h-10 bg-gray-300 "></div>


                <div class="flex gap-3">
                    <div>
                    <button class="flex items-center px-4 py-2 border border-primary text-gray-500 rounded hover:bg-primary-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2 text-primary">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
</svg>

  <span class="text-primary">Sign Up</span>
</button>


</div>
<div>
                    <button class="flex items-center px-4 py-2 bg-primary text-gray-500 rounded hover:bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>


  <span class="text-white">Sign In</span>
</button>


</div>
                </div>
  

                  
              </ul>
              
            </nav>

            <!-- Border -->
           
          </div>
        </div>
      </div>
    </section>
  </template>
  