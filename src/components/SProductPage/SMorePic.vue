<script>
    export default {
        props: {
            Pppic: String,
        }
    }
</script>

<template>
    <div class="dcontainer">
        <button class="navi"><</button>
        <img :src="Pppic" alt="">
        <img :src="Pppic" alt="">
        <img :src="Pppic" alt="">
        <img :src="Pppic" alt="">
        <img :src="Pppic" alt="">
        <img :src="Pppic" alt="">
        <button class="navi">></button>
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
    
    img{
        width: 80px;
        height: 120px;
        margin-left: 6px;
        margin-right: 6px;
    }
    
    .dcontainer{
        display: flex;
        flex-direction: row;
        height: 120px;
        width: 800px;
    }
</style>