<template>
 
    <div >
    <div>
    <back-button></back-button>
    </div>

    <div class="mt-3">
      <BCard no-body>
  <BTabs card>
    <BTab title="My Account" active>
      <BCardText>
        <my-account-page></my-account-page>
      </BCardText>
    </BTab>
    <BTab title="Order History">
      <BCardText>
        <order-history-page></order-history-page>
      </BCardText>
    </BTab>
  </BTabs>
</BCard>
    </div>
 

  


    </div>
  </template>
  
  <script setup >
import BackButton from '@/components/buttons/BackButton.vue';
import MyAccountPage from './profile-setting-components/MyAccountPage.vue';
import OrderHistoryPage from './profile-setting-components/OrderHistoryPage.vue';
import {ref, computed} from 'vue';
const userData = [{
  name: 'Veth Sivhuo',
          email: 'vethsivhuo@gmail.com',
          address: 'Toulkok, Phnom Penh, Cambodia'
}]



  </script>
  
  <style scoped>

  .breadcrumb {
    margin-bottom: 20px;
    color: #666;
  }
  
  .breadcrumb a {
    color: #666;
    text-decoration: none;
  }
  
  .profile-container {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 30px;
  }
  
  /* Sidebar Styles */
  .sidebar {
    width: 250px;
    padding: 20px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  
  .avatar img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  .user-details {
    margin-left: 10px;
  }
  .user-name {
    font-weight: bold;
  }
  .user-email {
    color: #888;
    font-size: 14px;
  }
  .sidebar-nav section {
    margin-bottom: 20px;
  }
  
  .sidebar-nav h3 {
    font-size: 14px;
    margin-bottom: 10px;
    font-weight: Bold;
  }
  
  .nav-link {
    display: block;
    color: gray;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  /* Main Content Styles */
  .main-content {
    background: white;
    padding: 20px;
  }
  
  .header h1 {
    margin: 0;
    font-size: 24px;
  }
  
  .description {
    color: gray;
    margin: 10px 0 30px;
  }
  
  .info-card {
    border: 1px solid #eee;
    border-radius: 4px;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: #f8f8f8;
    border-bottom: 1px solid #eee;
  }
  
  .card-header h3 {
    margin: 0;
    font-size: 16px;
  }
  
  .edit-btn {
    padding: 6px 15px;
    border: 1px solid #666;
    background: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .info-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    margin-bottom: 15px;
  }
  
  .info-row label {
    color: #666;
    font-weight: 500;
  }
  </style>
  