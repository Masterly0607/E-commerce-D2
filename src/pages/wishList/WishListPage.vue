<template>
    <section class="f-container-1200">
        <back-button></back-button>
        <div class="mt-3">
          <div class="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-orange-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

<div class="text-3xl font-bold">WistList</div>
          </div>
          <div class="ml-14 text-gray-400 font-thin">All items for adding to Cart</div>
         </div>
       <div class="wishList mt-5">
        <div class="wishListHeader">
  
            <div class="wishLine" />
        </div>
        <div class="wishNav">
    
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
    </section>
   
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

    display: flex;
    justify-content: center;
    flex-direction: column;
}
.wishListHeader {
    font-size: 18px;
    font-weight: bold;
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 90%;
}
.wishLine, .wishLine2 {

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