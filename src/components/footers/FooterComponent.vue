<template>
    <section>
        <div class=" mt-3 p-8    ">
            <div class="row   ">

                <!-- Logo box -->
              <div class="col-4">
                 <div>
                      <img src="/icons/favicon.ico" alt="">
                 </div>
                 <div class="text-sm mt-2 text-gray-500">"Discover premium-quality figurines and collectibles at Figurine. <br>From iconic characters to unique designs, we bring artistry and creativity to life. Perfect for collectors, enthusiasts, and gifting. Explore now!"</div>
              </div>

              <!-- Address  box -->
              <div class="flex gap-16 ml-60 col">
                <!-- Main -->
                 <div class="flex flex-col gap-1">
                    <span class="font-medium">Main</span>
                    <router-link
                    :to="{ name: 'home-page' }"
                    class="text-gray-400 text-sm  "
                    active-class="text-secondary font-bold underline "
                  >
                    Home
                  </router-link>
                    <router-link
                    :to="{ name: 'product-page' }"
                    class="text-gray-400 text-sm  "
                    active-class="font-bold text-secondary underline "
                  >
                    Products
                  </router-link>
                  <router-link
                    :to="{ name: 'about-us-page' }"
                    class="text-gray-400 text-sm  "
                    active-class="text-orange-500 font-bold text-secondary underline "
                  >
                    About Us
                  </router-link>
                  <router-link
                    :to="{ name: 'contact-us-page' }"
                    class="text-gray-400 text-sm  "
                    active-class="text-orange-500 font-bold text-secondary underline "
                  >
                    Contact Us
                  </router-link>
                 </div>
                 <!-- Address -->
                 <div>
                   <div class="font-medium ">Address</div>
                   <div class="text-sm text-gray-400">Tel: (+855) 97 333 1501 / 12 560 817</div>
                   <div class="text-sm text-gray-400">Email: sokmasterlychanon06@gmail.com</div>
                   <div class="mt-3 flex gap-2">
                    <a href="https://www.facebook.com/profile.php?id=100091585315101&mibextid=LQQJ4d&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" class="w-9 h-9 cursor-pointer">
<path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z" ></path>
</svg>
                    </a>
                    <a href="https://t.me/SokMasterly" target="_blank" rel="noopener noreferrer"> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" class="w-9 h-9 cursor-pointer">
<linearGradient id="BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#33bef0"></stop><stop offset="1" stop-color="#0a85d9"></stop></linearGradient><path fill="url(#BiF7D16UlC0RZ_VqXJHnXa_oWiuH0jFiU0R_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M10.119,23.466c8.155-3.695,17.733-7.704,19.208-8.284c3.252-1.279,4.67,0.028,4.448,2.113	c-0.273,2.555-1.567,9.99-2.363,15.317c-0.466,3.117-2.154,4.072-4.059,2.863c-1.445-0.917-6.413-4.17-7.72-5.282	c-0.891-0.758-1.512-1.608-0.88-2.474c0.185-0.253,0.658-0.763,0.921-1.017c1.319-1.278,1.141-1.553-0.454-0.412	c-0.19,0.136-1.292,0.935-1.745,1.237c-1.11,0.74-2.131,0.78-3.862,0.192c-1.416-0.481-2.776-0.852-3.634-1.223	C8.794,25.983,8.34,24.272,10.119,23.466z" opacity=".05"></path><path d="M10.836,23.591c7.572-3.385,16.884-7.264,18.246-7.813c3.264-1.318,4.465-0.536,4.114,2.011	c-0.326,2.358-1.483,9.654-2.294,14.545c-0.478,2.879-1.874,3.513-3.692,2.337c-1.139-0.734-5.723-3.754-6.835-4.633	c-0.86-0.679-1.751-1.463-0.71-2.598c0.348-0.379,2.27-2.234,3.707-3.614c0.833-0.801,0.536-1.196-0.469-0.508	c-1.843,1.263-4.858,3.262-5.396,3.625c-1.025,0.69-1.988,0.856-3.664,0.329c-1.321-0.416-2.597-0.819-3.262-1.078	C9.095,25.618,9.075,24.378,10.836,23.591z" opacity=".07"></path><path fill="#fff" d="M11.553,23.717c6.99-3.075,16.035-6.824,17.284-7.343c3.275-1.358,4.28-1.098,3.779,1.91	c-0.36,2.162-1.398,9.319-2.226,13.774c-0.491,2.642-1.593,2.955-3.325,1.812c-0.833-0.55-5.038-3.331-5.951-3.984	c-0.833-0.595-1.982-1.311-0.541-2.721c0.513-0.502,3.874-3.712,6.493-6.21c0.343-0.328-0.088-0.867-0.484-0.604	c-3.53,2.341-8.424,5.59-9.047,6.013c-0.941,0.639-1.845,0.932-3.467,0.466c-1.226-0.352-2.423-0.772-2.889-0.932	C9.384,25.282,9.81,24.484,11.553,23.717z"></path>
</svg>
                    </a>  

                   </div>
                 </div>
              </div>

             
            </div>
        
            <!-- Separator Box -->
             <div class=" ">
                <!-- Separator -->
                <div class="border-t border-gray-300 my-3"></div>
                <div class="flex justify-between items-center">
                    <div class="text-gray-400 text-xs">@ Copyright 2024. Figurine</div>
                    <div class="flex gap-8 items-center">
                        <span class="text-gray-400 text-xs">Terms and Conditions </span>
                        <span class="text-gray-400 text-xs">Privacy Policy</span>
                        <span class="flex gap-2 text-gray-400 text-xs items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
English
                        </span>
                    </div>
  
                </div>
             </div>
 
        </div>
    </section>

</template>