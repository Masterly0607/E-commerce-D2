<script>
import Moremore from './Moremore.vue';
    export default{
        components:{
            Moremore
        },
        data(){
            return{
                goodie: [
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                    {
                        picc :'./src/assets/ImageProduct/Joker6.jpg',
                        nameholders :'xxD',
                        coster :'$20.99',
                        tag11 :'In Stock',
                        tag11Color :'#009000',
                        tag22 :'Persona Series',
                        tag22Color :'#7B7B7B'
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="moritem1">
        <button class="navprev"><</button>
        <div class="piccontainer">
            <template v-for="item in goodie" :key="item">
                <Moremore
                :picc="item.picc"
                :nameholders="item.nameholders"
                :coster="item.coster"
                :tag11="item.tag11"
                :tag11Color="item.tag11Color"
                :tag22="item.tag22"
                :tag22Color="item.tag22Color"/>
            </template>
        </div>
        <button class="navnext">></button>
    </div>
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

    html {
        overflow: scroll;
    }

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
</style>