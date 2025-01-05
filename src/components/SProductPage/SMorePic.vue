<script>
    export default {
        props: {
            Pppic: String,
        }
    }
</script>

<template>
    <div class="dcontainer1">
        <button class="navi"><</button>
        <div class="dcontainer2">
            <div class="dcontainer">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
                <img :src="Pppic" alt="">
            </div>
        </div>
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
    
    .dcontainer1{
        display: flex;
        flex-direction: row;
        height: 120px;
        width: 600px;
    }

    .dcontainer{
        display: flex;
        flex-direction: row;
        overflow-y: scroll;
    }

    .dcontainer2{
        /* width: 100%;
        height: 100%; */
    }

    html {
        overflow: scroll;
    }

    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
</style>