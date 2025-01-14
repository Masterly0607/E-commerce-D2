<template>
    <div class="container">
      
      <div class="content">
        <h1>THANK YOU!</h1>
        
        <p class="message">
            Thank you so much for your recent purchase of our product! We are thrilled to know that you chose our product, and
            we sincerely appreciate your support. We take great pride in the quality and craftsmanship of each item, and we hope that your
            new figure brings you as much joy as it did us when creating it. If you have any questions or need further assistance, please
            don't hesitate to reach out. We look forward to serving you again in the future and hope to see you back soon!
        </p>
  
        <router-link to="/home">
        <button class="primary-button">Go back to Home Page</button>
        </router-link>

        <a href="#" class="return-link">Read about our return policy</a>
        
        <div class="service-icons">
          <div class="service-item">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 21l8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404l-9 4.404m9-4.404l-8.27-4.28c-.267-.138-.4-.208-.541-.235a1 1 0 0 0-.378 0c-.14.027-.274.097-.542.235L3 7.533m0 0l9 4.404"/></svg>
            </span>
            <span class="label">DELIVERY</span>
          </div>
          <div class="service-item">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#000" d="M19.138 7.138a4.862 4.862 0 1 1-4.351 7.034h.468a4.448 4.448 0 1 0 0-4.345h-.468a4.86 4.86 0 0 1 4.351-2.69m0 3.31a1.552 1.552 0 1 1 0 3.104a1.552 1.552 0 0 1 0-3.104m-17.577.011c.606 0 .997.255 1.26.615l-.62.48c-.17-.208-.364-.348-.649-.348c-.415 0-.708.356-.708.789v.008c0 .445.293.793.708.793c.31 0 .492-.144.67-.36l.62.44c-.28.386-.658.67-1.31.67A1.507 1.507 0 0 1 0 12.012v-.008c0-.866.662-1.544 1.56-1.544zm4.734.038l1.264 2.99h-.882l-.212-.534h-1.15l-.211.535h-.861l1.26-2.99zm4.27.022c.454 0 .768.118.968.318c.174.174.263.398.263.691v.008c0 .458-.242.76-.611.916l.708 1.035h-.946l-.598-.9h-.365v.9h-.822v-2.969zm5.399 0v.72h-.891v2.249h-.823V11.24h-.886v-.721zm-10.071.954l-.335.84h.665zm4.634-.246h-.543v.717h.548c.275 0 .44-.136.44-.352v-.008c0-.238-.173-.357-.445-.357"/></svg>
            </span>
            <span class="label">PAYMENTS</span>
          </div>
          <div class="service-item">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M12.9998 8L6 14L12.9998 21"/><path d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"/></g></svg>
            </span>
            <span class="label">RETURNS</span>
          </div>
          <div class="service-item">
            <span class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zM11 10h2v2h-2zm-4 0h2v2H7zm8 0h2v2h-2z"/></svg>
            </span>
            <span class="label">CUSTOMER SERVICE</span>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
</script>
  
<style scoped>
.container {
    min-width: 1200px;
    padding: 1rem;
    justify-content: center;
    text-align: center;
    font-family: Arial, sans-serif;
}
  
.logo {
    color: #ff0000;
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    font-style: italic;
}
  
.website {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 2rem;
}
  
.content {
    padding: 1rem;
}
  
h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
}
  
.message {
    line-height: 1.6;
    color: #333;
    margin-bottom: 2rem;
    text-align: left;
}
  
.primary-button {
    background-color: #2b3990;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}
  
.primary-button:hover {
    background-color: #1e2661;
}
  
.return-link {
    display: block;
    margin: 1rem 0 2rem;
    color: #666;
    text-decoration: underline;
    text-shadow: 1px 1px rgb(202, 199, 199);
}
  
.service-icons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 3rem;
}
  
.service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-width: 120px;
}
  
.icon {
    font-size: 1.5rem;
}
  
.label {
    font-size: 0.8rem;
    color: #666;
    text-align: center;
}
  
@media (max-width: 800px) {
    .service-icons {
      flex-wrap: wrap;
      gap: 1rem;
    }
}
</style>