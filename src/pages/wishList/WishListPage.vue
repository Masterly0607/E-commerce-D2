<template>
    <section class="f-container-1200">
        <back-button></back-button>
        <div class="mt-3">
            <div class="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#F1FE5D"/>
                </svg>
                <div class="text-3xl font-bold">Wishlist</div>
            </div>
            <div class="ml-14 text-gray-400 font-thin">All items for adding to Cart</div>
        </div>
        <div class="wishList mt-5">
            <div class="wishListHeader">
                <div class="wishLine" />
            </div>
            <div class="wishNav"></div>
                <div v-if="products.length === 0" class="emptyWishlist">
                    <img class="empty" src="/images/wishList_img/empty.jpg"/>
                    <h4>Your wishlist is empty.</h4>
                    <router-link :to="{name:'home-page'}" class="browse">Browse Items</router-link>
                </div>
                <div v-else class="wishAdd">
                    <p class="explore"> Explore, purchase, or remove items from your Wish List here.</p>
                    <button class="AddCart" @click="addAllToCart">Add all to Cart</button>
                </div>
            <div class="wishItem" v-for="product in products" :key="product.name">
                <div class="product">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#F1FE5D"/>
                    </svg>
                    <img class="productImage" :src="getImagePath(product.image)" :alt="product.name" />
                    <div class="productName">{{ product.name }}</div>
                </div>
                <div class="price">
                    <div class="priceValue">$ {{ product.price }}</div>
                    <button class="add" @click="addToCart(product)">Add to Cart</button>
                </div>
            </div>
            <div class="wishLine2" />
        </div>  
    </section>
</template>

<script>
import productStore from '@/stores/productStore';

export default {
    name: "Wish",
    data() {
        return {
            products: [
                { name: "POP UP PARADE Joker Figure", image: "joker.png", price: "30.99" },
                { name: "POP MART Skullpanda The Sound Series", image: "anger.webp", price: "15.99" },
                { name: "Smiski Dressing Series", image: "smiski.jpg", price: "11.99" },
                { name: "Sonny Angel Dinosaur Series", image: "angel.avif", price: "25.00" },
            ],
        };
    },
    methods: {
        getImagePath(image) {
            return `/images/wishList_img/${image}`;
        },
        addToCart(item) {
            productStore.actions.addToCart({
                name: item.name,
                price: item.price,
                quantity: 1,
                image: this.getImagePath(item.image),
            });
            this.products = this.products.filter(product => product.name !== item.name);
        },
        addAllToCart() {
            this.products.forEach(item => {
                productStore.actions.addToCart({
                    name: item.name,
                    price: item.price,
                    quantity: 1,
                    image: this.getImagePath(item.image),
                });
            });
            this.products = [];
        },
    },
};
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
.emptyWishlist{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}
.empty {
    width: 300px;
    height: 300px;
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
    justify-content: space-between; 
    align-items: center;
    width: 82%; 
    margin-bottom: 20px; 
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
.browse {
    text-decoration: none;
    color: white;
    background-color: black;
    border-radius: 10px;
    padding: 10px 15px;
}
</style>
