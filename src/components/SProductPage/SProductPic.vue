<script>
    export default{
        props: {
            Ppic: String
        }
    }
</script>

<template>
    <div class="acontainer">
        <img :src="Ppic" alt="img">
    </div>
</template>

<style scoped>
    .acontainer{
        width: 600px;
        height: 600px;
        justify-content: center;
        align-items: center;
        border: 1.5px solid black;
    }
</style>