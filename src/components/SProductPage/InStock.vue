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
                        picc :'./src/assets/ImageProduct/Kirby.jpg',
                        nameholders :'POP UP PARADE Kirby Figure',
                        coster :'$31.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Kirby Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail1',
                        picc :'./src/assets/ImageProduct/Kuromi.jpg',
                        nameholders :'Nendoroid Kuromi Figure',
                        coster :'$54.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Sanrio',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Monokuma.jpg',
                        nameholders :'SOFT VINYL FIGURE Dangaronpa 12 - Monokuma',
                        coster :'$58.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Dangaronpa',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Senku.jpg',
                        nameholders :'PPOP UP PARADE Senku Ishigami Figure',
                        coster :'$35.99',
                        tag11 :'in Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Makeine',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Asuka.jpg',
                        nameholders :'Asuka Shikinami Langley Figure',
                        coster :'$56.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Evangelion Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Christina.jpg',
                        nameholders :'Kurisu Mikase Figure',
                        coster :'$179.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Steins;Gate',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        Rou : 'ProductDetail',
                        picc :'./src/assets/ImageProduct/Mio.jpg',
                        nameholders :'figma Mio Figure',
                        coster :'$85.99',
                        tag11 :'In Stock',
                        tag11Color :'#FF6200',
                        tag22 :'Xenoblade Chr...',
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
</style>