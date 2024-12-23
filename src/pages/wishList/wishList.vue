<template>
    <div class="wishList">
        <div class="wishListHeader">
            <p class="name">Wish List</p>
            <div class="wishLine" />
        </div>
        <div class="wishNav">
            <div class="navigationBar" @click="onNavigationBarTextClick">Home</div>
            <div class="arrow">&gt;</div>
            <div class="navigationBar1">Wish List</div>
        </div>
        <div class="wishAdd">
            <p class="explore"> Explore, purchase, or remove items from your Wish List here.</p>
            <button class="AddCart" >Add all to Cart</button> 
        </div>
        <div class="wishItem" v-for="list in lists" :key="list.name">
            <div class="product">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#F1FE5D"/>
                </svg>
                <img class="productImage" :src="getImagePath(list.image)" :alt="list.name" />
                <div class="productName" > {{ list.name }}</div>
            </div>
            <div class="price">
                <div class="priceValue">$ {{list.price}}</div>
                <button class="add" >Add to Cart</button>
            </div>
        </div>
        <div class="wishLine2" />
    </div>
</template>
<script >
    export default {
          name: "Wish",
          methods: {
                onNavigationBarTextClick() {
                },
                getImagePath(image) {
                    return `/images/wishList_img/${image}`;
                }

        },
    
            data() {
    return {
        // List of products in the wish list, each with a name, image, and price
        lists: [
            {
                name: "POP UP PARADE Joker Figure",
                image: "joker.png", 
                price: "30.99"
            },
            {
                name: "POP MART Skullpanda The Sound Series",
                image: "anger.webp", 
                price: "15.99"
            },
            {
                name: "Smiski Dressing Series",
                image: "smiski.jpg", 
                price: "11.99"
            },
            {
                name: "Sonny Angel Dinosaur Series",
                image: "angel.avif", 
                price: "25.00"
            },
        ]
    };
}

        }

</script>
<style scoped>
.wishList {
    width: 95%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px ;
    padding: 250px 0px 0px 180px;
}
.wishListHeader {
    font-size: 36px;
    font-weight: bold;
    flex-direction: row;
    display: flex;
    column-gap: 60px;
    align-items: center;
    width: 90%;
}
.wishLine, .wishLine2 {
    border: 1px solid #B4AEAE;
    width: 870px;
}
.wishNav {
    display: flex;
    flex-direction: row;
    color: #717171;
    column-gap: 10px;
}
.wishAdd {
    display: flex;
    flex-direction: row;
}
.explore {
    margin-right: 35%;
}
.AddCart {
    border: none;
    background-color: blue;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    height: fit-content;
    margin-top: 10px;
}
.wishItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Ensures product is left-aligned and price is right-aligned */
    align-items: center;
    width: 82%; 
    margin-bottom: 20px; /* Adds spacing between items */
}
.product {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: auto;
}
.price {
    display: flex;
    text-align: right;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
.add {
    border: none;
    background-color: red;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    height: fit-content;
    margin-top: 10px;
}
.wishLine2 {
    width: 1090px;
}
img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
}
</style>