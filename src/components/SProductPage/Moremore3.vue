<script>
import Moremore from './Moremore.vue';
import { Swiper, SwiperSlide } from "swiper/vue";
import {Navigation, Mousewheel ,A11y} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ref, onMounted } from "vue";
    export default{
        setup() {
            const onSwiper = (swiper) => {
            console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, A11y, Mousewheel],
            };
        },
        components:{
            Moremore,
            Swiper,
            SwiperSlide
        },
        data(){
            return{
                goodie: [
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Miku.jpg',
                        nameholders :'Hatsune Miku Figure - Sakura Miku 2024 Ver.',
                        coster :'$33.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Hatsune Miku',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail1',
                        picc :'./src/assets/ImageProduct/MikuToo.jpg',
                        nameholders :'Nendoroid Surprise Piapro Characters',
                        coster :'$59.94',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Asuna.jpg',
                        nameholders :'POP UP PARADE Asuna Figure',
                        coster :'$38.99',
                        tag11 :'Pre Order',
                        tag11Color :'#009000',
                        tag22 :'Sword Art Online',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Anna.jpg',
                        nameholders :'POP UP PARADE Anna Yanami L Size Figure',
                        coster :'$57.99',
                        tag11 :'Pre Order',
                        tag11Color :'#009000',
                        tag22 :'Makeine',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Holo.jpg',
                        nameholders :'TENITOL Holo Figure',
                        coster :'$56.99',
                        tag11 :'Pre Order',
                        tag11Color :'#009000',
                        tag22 :'Spice and Wolf',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Chainsaw.jpg',
                        nameholders :'Chainsaw Man Makima 1/7 Scale Figure',
                        coster :'$197.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Rika.jpg',
                        nameholders :'Rikka Tadakara Figure',
                        coster :'$98.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                ]
            }
        }
    }
</script>

<template>
    <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="50" 
        navigation
        :mousewheel="{ forceToAxis: true, releaseOnEdges: false }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swipeswipe"
    >
        <swiper-slide v-for="(item, index) in goodie" :key="index">
            <Moremore
                :picc="item.picc"
                :nameholders="item.nameholders"
                :coster="item.coster"
                :tag11="item.tag11"
                :tag11Color="item.tag11Color"
                :tag22="item.tag22"
                :tag22Color="item.tag22Color"
                :Rou="item.Rou"/>
        </swiper-slide>
    </swiper>
    
    <!-- <div class="moritem1">
        <button class="navprev"><</button>
        <div class="piccontainer">
            <template v-for="item in goodie" :key="item">
                <swiper
                    :slides-per-view="5"
                    :space-between="15"
                    @swiper="onSwiper"
                    @sildeChange="onSlideChange"
                >
                    <swiper-slide v-for="(image, index) in images" :key="'slide-' + index">
                        <Moremore
                        :picc="item.picc"
                        :nameholders="item.nameholders"
                        :coster="item.coster"
                        :tag11="item.tag11"
                        :tag11Color="item.tag11Color"
                        :tag22="item.tag22"
                        :tag22Color="item.tag22Color"
                        :Rou="item.Rou"/>
                    </swiper-slide>
                </swiper>
            </template>
        </div>
        <button class="navnext">></button>
    </div> -->
</template>

<style scoped>
    button{
        height: 320px;
        width: 25px;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
    }

    .moritem1{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        /* overflow: hidden; */
    }
    
    .piccontainer{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        margin-left: 7.5px;
        margin-right: 7.5px;
    }

    .swipeswipe{
        display: flex;
        flex-direction: row;
        width: 1200px;
        overflow: hidden;
        gap: 10px;
    }

    .swiper-button-prev,
    .swiper-button-next {
        color: black;
    }
</style>