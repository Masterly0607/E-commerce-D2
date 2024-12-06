<script>
    export default {
        props: {
            ImageSource: String,
            Name: String,
            Price: String,
            tag1: String,
            tag1Color: String,
            tag2: String,
            tag2Color: String
        },

}
</script>

<template>
    <div class="container">
        <img :src="ImageSource" alt="">
        <div class="Name">{{Name}}</div>
        <div class="Price">{{ Price }}</div>
        <div class="tag-container">
            <div class="tag1">{{tag1}}</div>
            <div class="tag2">{{ tag2 }}</div>
        </div>
    </div>
</template>

<style scoped>
    .container{
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
    .container img{
        width: 230px;
        height: 230px;
        align-self: end;
    }
    .container .Name{
        font-size: 18px;
        height: 60px;
        width: auto;
        /* text-wrap: wrap;
        word-break: normal; */
        word-wrap: break-word;
    }
    .container .Price{
        font-size: 18px;
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
        font-size: 12px;
        margin-right: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 15px;
    }
    .tag2{
        border-radius: 1px solid v-bind(tag2Color);
        background-color: v-bind(tag2Color);
        font-size: 12px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 15px;
    }
</style>