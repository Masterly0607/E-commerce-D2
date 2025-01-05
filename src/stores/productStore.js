import { reactive } from 'vue';

const state = reactive({
    products: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [], // Load cart from local storage
    wishlist: [], // New state for wishlist
});

const actions = {
    addToCart(product) {
        console.log("Cart before saving:", state.cart); // Log the cart before saving
        if (!product || !product.name) {
            console.error("Invalid product:", product);
            return;
        }
        
        const existingProduct = state.cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1; // Increase quantity if already in cart
        } else {
            state.cart.push({ ...product, quantity: 1 }); // Add new product with quantity 1
        }
    },
    removeFromCart(productName) {
        state.cart = state.cart.filter(product => product.name !== productName);
    },
    addToWishlist(product) { // New action to add to wishlist
        if (!product || !product.name) {
            console.error("Invalid product:", product);
            return;
        }
        
        const existingProduct = state.wishlist.find(item => item.name === product.name);
        if (!existingProduct) {
            state.wishlist.push(product); // Add new product to wishlist
        }
    },
    removeFromWishlist(productName) { // New action to remove from wishlist
        state.wishlist = state.wishlist.filter(product => product.name !== productName);
    },
};

export default {
    state,
    actions,
};