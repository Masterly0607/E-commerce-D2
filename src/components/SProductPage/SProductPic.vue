<script>
    export default{
        props: {
            Ppic: String
        }
    }
</script>

<template>
    <div class="dcontainer1">
        <img :src="Ppic" alt="">
    </div>
</template>

<style scoped>
    .dcontainer1{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 120px;
    width: 600px;
    }
    .dcontainer1 img{
        width: 120px;
        height: 120px;
    }
</style>