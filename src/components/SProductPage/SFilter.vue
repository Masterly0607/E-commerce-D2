<script>
    export default{
        props: {
            Filters: String,
        }
    }
</script>

<template>
    <div class="filter-container">
        <div class="minicontainer">
            <div class="Filters">{{ Filters }}</div>
            <button class="minus"><svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5 11V13H19V11H5Z"></path></svg></button>
        </div>
        <hr class="line1">
    </div>
</template>

<style scopded>
    .filter-container{
        width: 300px;
        /* height: 450px; */
        display: flex;
        flex-direction: column;
        
    }
    .Filters{
        font-weight: 500;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
    .line1{
        color: gray;
    }
    .minus{
        font-size: 30px;
        color: darkgrey;
    }
    .minicontainer{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
        align-items: center;
    }
    .line1{
        margin-bottom: 10px;
    }
</style>