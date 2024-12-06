<script>
    export default {
        props: {
            letters: String
        }
    }
</script>

<template>
    <div class="econtainer">
        <div class="letters">{{ letters }}</div>
    </div>
</template>

<style scoped>
    .econtainer{
        width: 1170px;
        margin: 15px;
        font-size: 13px;
        word-wrap: wrap;
    }

    .letters{
        word-wrap: break-word;
        width: auto;
    }
</style>