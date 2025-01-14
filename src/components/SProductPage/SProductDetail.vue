<script>
    import { mapActions, mapState } from 'pinia';
    import { RouterLink } from 'vue-router';
    import { useCartStore } from '@/stores/cart';
    import { useProductStore } from '@/stores/productStore';
    export default {
        props: {
            id: Number,
            Name: String,
            tag: String,
            tagColor: String,
            Costs: Number,
            Status: String,
            statusColor: String,
            Amount: Number,
            picLink: String
        },
        computed: {
            ...mapState(useCartStore, {
                products: "products",
                // addToCart: "addToCart",
                productsInCart: "productsInCart",
                incrementProduct: "incrementProduct",
                decrementProduct: "decrementProduct",
                amountInCart(store) {
                    return store.getAmountInCart(this.id);
                }
            }),

            product() {
                const product = {
                    id: this.id,
                    Name: this.Name,
                    tag: this.tag,
                    tagColor: this.tagColor,
                    Costs: this.Costs,
                    Status: this.Status,
                    statusColor: this.statusColor,
                    Amount: this.amountInCart,
                    picLink: this.picLink,
                }
                return product;
            }
        },
        methods: {
            addToWishlist(product) {
                const productStore = useProductStore(); // Use the store directly
                productStore.addToWishlist({
                    name: product.Name,
                    price: product.Costs,
                    Amount: product.Amount || 1, // Ensure Amount is included
                    tag: product.tag,
                    tagColor: product.tagColor,
                    Status: product.Status,
                    statusColor: product.statusColor,
                    image: product.picLink,
                }); // Call the action to add to wishlist
                alert('Product added to wishlist!');
                console.log(localStorage.getItem('wishlist'));
                
            },
            addToCart(product) {
                const productStore = useProductStore(); // Use the store directly
                productStore.addToCart({
                    name: product.Name,
                    price: product.Costs,
                    Amount: product.Amount || 1, // Ensure Amount is included
                    tag: product.tag,
                    tagColor: product.tagColor,
                    Status: product.Status,
                    statusColor: product.statusColor,
                    image: product.picLink,
                }); // Call the action to add to cart
                alert('Product added to cart!');
                console.log(localStorage.getItem('product'));
                
            }
        }
    }
</script>

<template>
    <div class="bcontainer">
        <div class="bcontainer1">
            <div class="NaC">{{ Name }}</div>
            <div class="tag">{{ tag }}</div>
            <div class="NaC">${{ Costs }}</div>
            <div class="How">{{ Status }}</div>
            <div class="quantity">
                <div class="counter">Quantity</div>
                <button class="remove-tocart" @click="decrementProduct(product.id)">-</button>
                <span class="quanity">{{ amountInCart }}</span>
                <button class="add-tocart" @click="incrementProduct(product.id)">+</button>
            </div>
        </div>
        <div class="bcontainer2">
            <RouterLink to="checkout" class="clickclick" @click="addToCart(product)"><svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>‎ ‎ Buy Now</RouterLink>
            <button class="clickclick" @click="addToCart(product)"><svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>‎ ‎ Add to Cart</button>
            <button class="clickclick" @click="addToWishlist(product)"><svg width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path></svg>‎ ‎ Add to Wish list</button>
        </div>
    </div>
</template>

<style scoped>
    .bcontainer{
        width: 450px;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bcontainer1{
        display: flex;
        flex-direction: column;
    }

    .clickclick{
        width: 450px;
        height: 35px;
        font-size: 17px;
        font-weight: 400px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        background-color: black;
        color: white;
        border-radius: 15px;
        margin-top: 15px;
        text-decoration: none;
    }
    
    .NaC{
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .tag{
        width: fit-content;
        border-radius: 1px solid v-bind(tagColor);
        background-color: v-bind(tagColor);
        color: white;
        font-size: 13px;
        padding-left: 10px;
        padding-right: 10px;
        border-radius: 15px;
        margin-bottom: 15px;
    }

    .counter{
        font-size: 13px;
    }

    .How{
        font-size: 13px;
        color: v-bind(statusColor);
        margin-bottom: 15px;
    }

    .quantity{
        width: 105px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
    }

    .count{
        height: 20px;
    }
</style>
