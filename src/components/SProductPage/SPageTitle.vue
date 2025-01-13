<script>
export default{
    props: {
        title: String,
        // borderColor: String
    }
}
</script>

<template>
    <div class="zcontainer">
        <hr class="line">
        <div class="title">
            {{ title }}
        </div>
        <hr class="line" >
    </div>
</template>

<style scoped>
    .zcontainer{
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }

    .line {
        width: 605px;
        border: 1px solid;
        /* border-color: v-bind(borderColor); */
        border-color: #FF7D00;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .zcontainer .title{
        font-size: 25px;
        width: 240px;
        height: 37.5px;
        font-weight: 500;
        color: black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 25px;
        margin-right: 25px;
    }
</style>