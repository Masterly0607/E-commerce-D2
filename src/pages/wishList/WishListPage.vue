<template>
    <section class="container">
        <div class="box">
            <div class="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#F1FE5D"/>
                </svg>
                <div class="text-3xl font-bold">Wishlist</div>
            </div>
            <div class="ml-10 text-gray-400 font-thin">All items for adding to Cart</div>
        </div>
        <div class="wishList mt-5">
            <div class="wishListHeader">
            </div>
            <div class="wishNav"></div>
            <!-- If wishlist is empty, display an empty message -->
            <div v-if="!wishlist || wishlist.length === 0" class="emptyWishlist">
                <img class="empty" src="../../assets/wishList_img/empty.jpg"/>
                <h4>Your wishlist is empty.</h4>
                <router-link :to="{name:'home-page'}" class="browse">Browse Items</router-link>
            </div>
            <div v-else class="wishAdd">
                <p class="explore"> Explore, purchase, or remove items from your Wish List here.</p>
                <!-- Button to add all products to cart -->
                <button class="AddCart" @click="addAllToCart">Add all to Cart</button>
            </div>
            <div v-if="wishlist">
                <!-- For each wishlist product -->
                <div class="wishItem" v-for="product in wishlist" :key="product.name">
                    <div class="product">
                        <button @click="removeFromWishlist(product)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#F1FE5D"/>
                            </svg>
                        </button>
                        <img class="productImage" :src="product.image" :alt="product.name" />
                        <div class="productName">{{ product.name }}</div>
                    </div>
                   <div class="price">
                        <div class="priceValue">$ {{ product.price }}</div>
                        <button class="add" @click="addToCart(product)">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>  
    </section>
</template>

<script>
import { useProductStore } from '@/stores/productStore';
import { mapActions } from 'pinia';

export default {
    setup() {
        const productStore = useProductStore();
        return { productStore };
    },
    computed: {
        wishlist() {
            return this.productStore.state.wishlist || [];
        }
    },
    methods: {
    ...mapActions(useProductStore, ['addToCart', 'removeFromWishlist']),
    addToCart(product) {
        const productStore = useProductStore();  // Use method from productStore
        productStore.addToCart(product); // Call the action to add to cart
        productStore.removeFromWishlist(product); // Remove the product from wishlist
        alert('Product added to cart!');
        console.log(localStorage.getItem('product'));
    },
    addAllToCart() {
        const productStore = useProductStore(); // Use method from productStore
        //Go over each product in wishlist
        this.wishlist.forEach(item => {
            //Add each product to cart
            productStore.addToCart({
                name: item.name,
                price: item.price,
                quantity: 1,
                image: item.image,
            });
            productStore.removeFromWishlist(item); // Remove item from wishlist after adding to cart
        });
        this.product = [];
    },
}

};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 50px 0px;
}
.box {
    display: flex;
    flex-direction: column;
    margin-left: -700px;
    gap: 10px;
}
.wishList {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 75%;
}
.wishListHeader {
    font-size: 18px;
    font-weight: bold;
    flex-direction: row;
    display: flex;
    align-items: center;
    width: 100%;
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
    margin-left: 7%;
}
.AddCart, .add {
    border: none;
    background-color: black;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    cursor: pointer;
    height: fit-content;
    margin-top: 10px;
}
.AddCart:hover, .add:hover {
    background-color:gray;
}
.wishItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    width: 96%; 
    margin-bottom: 20px; 
    margin-left: 3%;
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