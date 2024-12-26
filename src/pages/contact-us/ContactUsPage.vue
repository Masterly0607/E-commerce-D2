<template>
    <div class="contactUs">
      <div class="contact">
        <p class="name">Contact Us
        </p>
        <div class="contactLine"></div>
      </div>
      <div class="content">
        <div class="input" >
          <input type="text" placeholder="Name" v-model="name" />
          <input type="text" placeholder="E-mail" v-model="Email" />

        </div>
        <div class="msg">
            <textarea rows="4">message</textarea>
        </div>
        <div class="button">
          <button type="button">Send Message</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  </script>
  <style scoped>
  .contactUs {
    width: 95%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0px ;
    padding: 250px 0px 80px 180px;
    gap: 20px;
  }
  .contact {
    font-size: 36px;
    font-weight: bold;
    flex-direction: row;
    display: flex;
    column-gap: 60px;
    align-items: center;
    width: 90%;
  }
  
  .contactLine {
    border: 1px solid #B4AEAE;
    width: 840px;
  }
  .content {
    padding: 0px 150px 0px 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .input {
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  input, textarea, button {
    border: 1px black solid;
    width: 100%;
  }
  input, button {
    border-radius: 50px;
    padding: 10px 15px;
  }
  textarea {
    border-radius: 10px;
    padding: 5px 10px;
    color: #B4AEAE;
  }
  button {
    background-color: black;
    color: white;
  }
  </style>