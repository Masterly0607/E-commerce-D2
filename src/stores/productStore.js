import { reactive } from 'vue';

const state = reactive({
    products: [],
    cart: [],
});

const actions = {
    fetchProducts() {
        // Fetch products from an API or local data
        // Example: this.products = fetchedProducts;
    },
    addToCart(product) {
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
};

export default {
    state,
    actions,
};
