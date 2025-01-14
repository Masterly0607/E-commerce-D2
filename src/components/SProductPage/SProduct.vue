<script>
import { RouterLink } from 'vue-router';

    export default {
        props: {
            Rout: String,
            ImageSource: String,
            Name: String,
            Price: String,
            tag1: String,
            tag1Color: String,
            tag2: String,
            tag2Color: String,
            tag3: String,
            tag3Color: String
        },

}
</script>

<template>
    <RouterLink :to="Rout ? {name: 'Detail'} : '/product'" class="Rout">
        <div class="ycontainer">
            <img :src="ImageSource" alt="">
            <div class="Name">{{Name}}</div>
            <div class="Price">{{ Price }}</div>
            <div class="tag-container">
                <div class="tag1">{{tag1}}</div>
                <div class="tag2">{{ tag2 }}</div>
            </div>
            <div class="tag3">{{ tag3 }}</div>
        </div>
    </RouterLink>
</template>

<style scoped>
    .Rout {
        text-decoration: none;
        color: black;
    }
    .ycontainer{
        width: 230px;
        height: 370px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        /* margin-top: 10px; */
        /* margin-left: 10px; */
        padding: 0;
        /* box-sizing: border-box; */
        overflow: hidden;
    }
    .ycontainer img{
        width: 230px;
        height: 230px;
        align-self: end;
        margin-bottom: 5px;
    }
    .ycontainer .Name{
        font-size: 16px;
        height: 60px;
        width: auto;
        /* text-wrap: wrap;
        word-break: normal; */
        word-wrap: break-word;
    }
    .ycontainer .Price{
        font-size: 16px;
        font-weight: 400px;
        margin-bottom: 5px;
    }
    .tag-container{
        width: auto;
        height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px;
    }
    .tag1{
        border-radius: 1px solid v-bind(tag1Color);
        background-color: v-bind(tag1Color);
        font-size: 11px;
        margin-right: 15px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 15px;
    }
    .tag2{
        border-radius: 1px solid v-bind(tag2Color);
        background-color: v-bind(tag2Color);
        font-size: 11px;
        font-size: 11px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 15px;
    }
    .tag3{
        border-radius: 1px solid v-bind(tag3Color);
        background-color: v-bind(tag3Color);
        font-size: 11px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 15px;
        margin-top: 10px;
    }
</style>