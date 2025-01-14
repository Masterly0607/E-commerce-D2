<template>
    <section >
        <div class="history" >
        <div class="myOrder">
            <div class="title">My Orders</div>
            <div class="category">
                <div class="state">
                    <button class="order" @click="changeColor('All orders')" :class="{ 'active': activeButton === 'All orders' }">All orders</button>
                    <button class="ship" @click="changeColor('Shipped')" :class="{ 'active': activeButton === 'Shipped' }">Shipped</button>
                    <button class="nship" @click="changeColor('Not yet shipped')" :class="{ 'active': activeButton === 'Not yet shipped' }">Not yet shipped</button>
                </div>
            </div>
            <div class="orderList">
                <div class="content">
                    <!-- Rate banner -->
                    <div class="rate" v-if="showRate">
                        <div class="yes">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.15323 5.408C10.4202 3.136 11.0532 2 12.0002 2C12.9472 2 13.5802 3.136 14.8472 5.408L15.1752 5.996C15.5352 6.642 15.7152 6.965 15.9952 7.178C16.2752 7.391 16.6252 7.47 17.3252 7.628L17.9612 7.772C20.4212 8.329 21.6502 8.607 21.9432 9.548C22.2352 10.488 21.3972 11.469 19.7202 13.43L19.2862 13.937C18.8102 14.494 18.5712 14.773 18.4642 15.117C18.3572 15.462 18.3932 15.834 18.4652 16.577L18.5312 17.254C18.7842 19.871 18.9112 21.179 18.1452 21.76C17.3792 22.341 16.2272 21.811 13.9252 20.751L13.3282 20.477C12.6742 20.175 12.3472 20.025 12.0002 20.025C11.6532 20.025 11.3262 20.175 10.6722 20.477L10.0762 20.751C7.77323 21.811 6.62124 22.341 5.85624 21.761C5.08924 21.179 5.21623 19.871 5.46923 17.254L5.53523 16.578C5.60723 15.834 5.64323 15.462 5.53523 15.118C5.42923 14.773 5.19024 14.494 4.71424 13.938L4.28024 13.43C2.60324 11.47 1.76523 10.489 2.05723 9.548C2.34923 8.607 3.58024 8.328 6.04024 7.772L6.67624 7.628C7.37524 7.47 7.72424 7.391 8.00524 7.178C8.28624 6.965 8.46523 6.642 8.82523 5.996L9.15323 5.408Z" stroke="black" stroke-width="1.5"/>
                            </svg>
                            <p>Please rate your experience with the seller</p>
                        </div>
                        <div class="no" @click="showRate = false">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4168 5.87648L16.1243 4.58398L11.0002 9.70815L5.876 4.58398L4.5835 5.87648L9.70766 11.0007L4.5835 16.1248L5.876 17.4173L11.0002 12.2932L16.1243 17.4173L17.4168 16.1248L12.2927 11.0007L17.4168 5.87648Z" fill="black"/>
                            </svg>
                        </div>
                    </div>
                    <div class="productList">
                        <!-- Filter products -->
                        <div class="product" v-for="product in (activeButton === 'All orders' ? products : (activeButton === 'Shipped' ? shippedProducts : notYetShippedProducts))" :key="product.name">
                            <div class="status">
                                <h3 class="date">{{ getDeliveryStatus(product.date) }}</h3>
                            </div>
                            <div class="productInfo">
                                <!-- Each product -->
                                <img class="productImg" :src="product.image" :alt="product.name" />
                                <div class="productDescription">
                                    <h5 class="productTitle">{{ product.name }}</h5>
                                    <div class="productPrice">Price: ${{ product.price }}</div>
                                    <div class="return">Return or Replace items: Eligible through {{ product.orderDate }} </div>
                                    <div class="buttons">
                                        <button class="again" @click="addToCart(product)">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.76904 5.85602L5.96454 5.49002C6.05875 5.46121 6.15771 5.45124 6.25577 5.46068C6.35383 5.47011 6.44907 5.49877 6.53606 5.54501C6.62304 5.59126 6.70007 5.65418 6.76274 5.73019C6.8254 5.8062 6.87248 5.89382 6.90129 5.98802C6.9301 6.08223 6.94007 6.18119 6.93064 6.27925C6.9212 6.37731 6.89254 6.47255 6.8463 6.55954C6.80006 6.64652 6.73713 6.72355 6.66112 6.78621C6.58511 6.84888 6.4975 6.89596 6.40329 6.92477L3.53454 7.80227C3.44029 7.83109 3.34128 7.84104 3.24317 7.83157C3.14507 7.8221 3.04979 7.79338 2.96279 7.74706C2.87579 7.70074 2.79878 7.63772 2.73615 7.56162C2.67352 7.48551 2.6265 7.39781 2.59779 7.30352L1.72029 4.43477C1.69148 4.34056 1.68151 4.24161 1.69095 4.14355C1.70038 4.04549 1.72904 3.95024 1.77529 3.86326C1.82153 3.77627 1.88445 3.69925 1.96046 3.63658C2.03648 3.57391 2.12409 3.52683 2.21829 3.49802C2.40855 3.43984 2.61413 3.45962 2.78981 3.55301C2.96548 3.64641 3.09686 3.80576 3.15504 3.99602L3.48504 5.07677C5.29104 2.29502 8.87379 1.09877 12.0545 2.40227C13.0058 2.79212 13.86 3.38572 14.5572 4.14129C15.2543 4.89685 15.7774 5.79603 16.0895 6.77552C16.1215 6.86987 16.1344 6.96966 16.1275 7.06905C16.1205 7.16844 16.0937 7.26544 16.0489 7.35438C16.004 7.44333 15.9418 7.52244 15.866 7.5871C15.7902 7.65175 15.7023 7.70065 15.6073 7.73095C15.5124 7.76124 15.4124 7.77232 15.3132 7.76354C15.2139 7.75475 15.1174 7.72628 15.0293 7.67978C14.9412 7.63329 14.8632 7.5697 14.7999 7.49274C14.7367 7.41577 14.6894 7.32697 14.6608 7.23152C14.3439 6.23655 13.7521 5.35149 12.9537 4.67852C12.1553 4.00556 11.1828 3.57214 10.1485 3.42831C9.1143 3.28448 8.06045 3.43611 7.1087 3.86568C6.15695 4.29526 5.34536 4.98526 4.76904 5.85602ZM14.0143 12.0023L12.683 12.3345C12.5866 12.361 12.4859 12.3679 12.3868 12.3548C12.2877 12.3418 12.1923 12.3091 12.106 12.2586C12.0197 12.2081 11.9444 12.1409 11.8845 12.0609C11.8245 11.9809 11.7812 11.8898 11.757 11.7928C11.7328 11.6958 11.7282 11.595 11.7436 11.4962C11.7589 11.3974 11.7938 11.3027 11.8463 11.2176C11.8987 11.1325 11.9677 11.0588 12.049 11.0007C12.1304 10.9427 12.2225 10.9015 12.32 10.8795L15.0523 10.1978C15.1947 10.1302 15.3548 10.1092 15.5098 10.1378C15.6591 10.1574 15.7991 10.2216 15.9115 10.3219C16.0239 10.4222 16.1034 10.5541 16.1398 10.7003L16.8658 13.6103C16.9088 13.8014 16.8753 14.0018 16.7725 14.1685C16.6697 14.3353 16.5057 14.4552 16.3156 14.5026C16.1256 14.55 15.9245 14.5212 15.7554 14.4223C15.5863 14.3234 15.4626 14.1622 15.4108 13.9733L15.1633 12.9818C14.4412 14.0209 13.4521 14.8461 12.3004 15.3704C11.1487 15.8946 9.87683 16.0986 8.61892 15.9607C7.36101 15.8228 6.16357 15.3482 5.15275 14.5869C4.14193 13.8256 3.35515 12.8057 2.87529 11.6348L2.68029 11.1593C2.64296 11.0681 2.62396 10.9705 2.62435 10.872C2.62475 10.7735 2.64454 10.676 2.6826 10.5852C2.72066 10.4943 2.77624 10.4119 2.84618 10.3425C2.91611 10.2731 2.99901 10.2182 3.09017 10.1809C3.27426 10.1055 3.48076 10.1063 3.66424 10.1832C3.75509 10.2213 3.83756 10.2768 3.90693 10.3468C3.9763 10.4167 4.03121 10.4996 4.06854 10.5908L4.26354 11.0655C4.64586 11.9984 5.27566 12.8091 6.085 13.4103C6.89434 14.0114 7.85248 14.3801 8.85602 14.4766C9.85956 14.5731 10.8704 14.3937 11.7794 13.9578C12.6885 13.5219 13.4612 12.8452 14.0143 12.0023Z" />
                                            </svg>
                                            Buy it again</button>
                                        <router-link :to="{ name: 'Detail', params: { productName: product.name }}" class="viewProduct">
                                            View product detail
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="message">
            <div class="chat">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_433_1805)">
                <path d="M36.2502 8.33398C38.0038 8.33388 39.6911 9.07166 40.967 10.3964C42.2429 11.7211 43.0108 13.5326 43.1137 15.4603L43.1252 15.9044V20.9513C44.8788 20.9512 46.5661 21.689 47.842 23.0137C49.1178 24.3384 49.8858 26.1499 49.9887 28.0776L50.0001 28.5217V38.6156C50.0002 40.5466 49.3302 42.4046 48.1272 43.8096C46.9242 45.2145 45.2791 46.0601 43.5285 46.1734L43.1252 46.186V48.6237C43.1252 51.1976 40.5058 52.6461 38.6473 51.2304L38.4273 51.0487L33.1289 46.186H24.7919C23.103 46.1861 21.4731 45.5016 20.2132 44.2631L19.8923 43.925L15.6253 47.4477C13.8126 48.9442 11.2574 47.637 11.0557 45.2296L11.042 44.9243V41.1391C9.28836 41.1392 7.60101 40.4014 6.32513 39.0767C5.04926 37.752 4.28133 35.9405 4.17845 34.0128L4.16699 33.5687V15.9044C4.16689 13.9734 4.8369 12.1154 6.03993 10.7104C7.24295 9.3055 8.88805 8.45989 10.6386 8.3466L11.042 8.33398H36.2502ZM43.1252 25.9983H24.7919C24.1841 25.9983 23.6012 26.2641 23.1715 26.7374C22.7417 27.2106 22.5002 27.8525 22.5002 28.5217V38.6156C22.5002 39.2849 22.7417 39.9267 23.1715 40.4C23.6012 40.8732 24.1841 41.1391 24.7919 41.1391H33.1289C34.201 41.1396 35.2389 41.5539 36.0623 42.31L38.5556 44.5962C38.6301 43.6528 39.0231 42.7745 39.6569 42.1345C40.2907 41.4945 41.1194 41.1393 41.9793 41.1391H43.1252C43.7329 41.1391 44.3158 40.8732 44.7456 40.4C45.1754 39.9267 45.4168 39.2849 45.4168 38.6156V28.5217C45.4168 27.8525 45.1754 27.2106 44.7456 26.7374C44.3158 26.2641 43.7329 25.9983 43.1252 25.9983ZM36.2502 13.3809H11.042C10.4342 13.3809 9.85128 13.6468 9.42152 14.12C8.99175 14.5933 8.75031 15.2351 8.75031 15.9044V33.5687C8.75031 34.2379 8.99175 34.8798 9.42152 35.353C9.85128 35.8263 10.4342 36.0921 11.042 36.0921H12.1878C13.0995 36.0921 13.9738 36.4909 14.6185 37.2008C15.2631 37.9107 15.6253 38.8734 15.6253 39.8773V41.1391L17.9398 39.2288C17.9247 39.0248 17.917 38.8203 17.9169 38.6156V28.5217C17.9169 26.5139 18.6413 24.5884 19.9306 23.1686C21.2199 21.7489 22.9685 20.9513 24.7919 20.9513H38.5418V15.9044C38.5418 15.2351 38.3004 14.5933 37.8706 14.12C37.4409 13.6468 36.858 13.3809 36.2502 13.3809Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_433_1805">
                <rect width="50" height="50" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <h3 class="send">Send us a message</h3>
                <p>If you unable to find the answer
                    please describe your issue, we 
                    will solve you the solution within 
                    the next page.
                </p>
            </div>
            <router-link :to="{name:'contact-us-page'}" class="sendMs">Send us a message</router-link>
        </div>
    </div>   
    </section>

</template>
<script>
import { useProductStore } from '@/stores/productStore'; 
import { ref } from 'vue';

export default {
    name: 'OrderHistory',
    setup() {
        const activeButton = ref("All orders"); // Set default state to "All orders"

        const changeColor = (buttonName) => {
            activeButton.value = buttonName; // Update state when button is clicked
        };
        return {
            activeButton,
            changeColor,
        }
    },
    computed: {
        shippedProducts() {
            const currentDate = new Date();
            return this.products.filter(product => {
                const date = new Date(product.date);
                return date < currentDate; // Only include products that are shipped
            }).map(product => {
                return {
                    ...product,
                    status: 'Shipped' // Set status to 'Shipped' for filtered products
                };
            });
        },
        notYetShippedProducts() {
            const currentDate = new Date();
            return this.products.filter(product => {
                const date = new Date(product.date);
                return date >= currentDate; // Only include products that are not yet shipped
            }).map(product => {
                return {
                    ...product,
                    status: 'Not yet shipped' // Set status to 'Not yet shipped' for filtered products
                };
            });
        },
    },
    methods: {
        addToCart(product) {
            const productStore = useProductStore();
            productStore.addToCart(product); // Call the action to add to cart from productStore
            alert('Product added to cart!');
            console.log(localStorage.getItem('product'));

        },
        //Check the date to determine whether it should be shipped or not
        getDeliveryStatus(date) {
            return new Date(date) >= new Date() ? `Will be delivered on ${date}` : `Delivered on ${date}`;
        }
    },
    data() {
        return {
            products: [
            {
                name: "POP UP PARADE Joker Figure",
                price: "30.99",
                date: "July 8, 2025",
                image: '../src/assets/orderHistory_img/Joker6.jpg',
                orderDate: "August 8, 2025",
            },
            {
                name: "Hatsune Miku Figure - Sakura Miku 2024 Ver.",
                price: "33.99",
                date: "March 15, 2024",
                image: '../src/assets/ImageProduct/Miku1.jpg',
                orderDate: "April 15, 2024",
            },
            ],
            showRate: true
        }
    }
}
</script>
<style scoped>
.history{
    display: flex;
    flex-direction: row;
    padding: 20px 0px
}
.myOrder {
    width: 70%;
    padding: 0px 60px;

}
.title {
    font-size: xx-large;
    font-weight: bold;
}
.category{
    display: flex;
    flex-direction: row;
    padding: 20px 0px;
}
.state{
    background-color: #B4AEAE;
    border-radius: 10px;
    padding: 5px;
    margin-right: auto;
    display: flex;
    gap: 5px;
}
.duration {
    background-color: #B4AEAE;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
}
.option {
    display: flex;
    background-color: #B4AEAE;
}
.orderList {
    border: black 1px solid;
    border-radius: 20px;
}
.order, .ship, .nship {
    background-color:#B4AEAE;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;

}
p {
    margin: 0;
}
.content {
    padding: 10px 60px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.rate {
    background-color: #F9E446;
    padding: 10px;
    align-items: center;
    display: flex;
    border-radius: 15px;
}
.yes {
    margin-right: auto;
    display: flex;
    gap: 5px;
}
.no {
    cursor: pointer;
}
.productList {
    display: flex;
    flex-direction: column;
    gap: 20px;
    
}
.product {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.productInfo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 5px;
    align-items: center;
}
.productDescription {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.productImg {
    width: 110px;
    height: 130px;
}
.buttons {
    gap: 10px;
    display: flex;
}
.again, .viewProduct, .sendMs {
    background-color: black;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    gap: 5px;
    color: white;
    align-items: center;
}
.again:hover, .viewProduct:hover, .sendMs:hover {
    background-color: gray;
    color: white;
    border: none;
}
.delivered, .return {
    color: #B4AEAE;
    font-size: 14px;
}
.message {
    border-radius: 20px;
    box-shadow: 0px 0px 24px gray;
    padding: 20px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    gap: 30px;
    height: fit-content;
}
.chat {
    padding: 0px 20px;
    gap: 20px;
    display: flex;
    flex-direction: column;
}
button {
    cursor: pointer;
}
a {
    text-decoration: none;
}
.active {
  background-color: #E5E5E5;
}

</style>