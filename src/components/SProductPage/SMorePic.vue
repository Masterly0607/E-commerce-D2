<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Navigation, Mousewheel ,A11y} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

    export default {
        data(){
            return{
                activeIndex: 0,
                mouseX: 0,
                mouseY: 0,
            }
        },

        props: {
            images: Array,
        },

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

        components: {
            Swiper,
            SwiperSlide,

        },
        computed: {
            zoomShiftImage() {
                return `scale(2) translateX(${this.mouseX}px) translateY(${this.mouseY}px)`
            }
        },

        watch: {
            mouseX(cur) {
                
            }
        },

        methods:{
            setLargeImage(index) {
                this.activeIndex = index;
            },
            mousePosition(event) {
                this.mouseX = (event.offsetX - 300) * -0.5 ;
                this.mouseY = (event.offsetY - 300) * -0.5;
            }
        }
    }
</script>

<template>
    <div class="dcontainer3">
        <div class="acontainer" @mousemove  ="(e) => mousePosition(e)">
            <img :src="images[activeIndex]" alt="img">
        </div>

        <!-- <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="50"
        navigation
        :mousewheel="{ forceToAxis: true, releaseOnEdges: false }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="swipeswipe"
    >
        <swiper-slide v-for="(images, index) in goodie" :key="index">
            <img :src="images" alt="">
        </swiper-slide> -->
        <div class="dcontainer1">
            <div class="dcontainer2">
                <div class="dcontainer">
                    <img class="image-select"
                        v-for="(image, index) in images"
                        :key="index"
                        :src="image"
                        alt="product_image"
                        @click="setLargeImage(index)" 
                    />
                </div>
            </div>
        </div>
    <!-- </swiper> -->
        
    </div>
</template>

<style scoped>
    .navi{
        height: 120px;
        width: 25px;
        justify-content: center;
        align-items: center;
        color: white;
        background-color: black;
    }
    
    .image-select{
        width: 120px;
        height: 120px;
        /* margin-left: 6px;
        margin-right: 6px; */
    }
    
    .dcontainer1{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 120px;
        width: 600px;
    }

    .dcontainer{
        display: flex;
        flex-direction: row;
        overflow-y: scroll;
    }

    /* .dcontainer2{
        width: 100%;
        height: 100%;
    } */

    .acontainer{
        width: 600px;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1.5px solid black;
        overflow: hidden;
    }

    .acontainer>img:hover {
        transform: v-bind(zoomShiftImage);
    }

    .dcontainer3{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    html {
        overflow: scroll;
    }

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
</style>