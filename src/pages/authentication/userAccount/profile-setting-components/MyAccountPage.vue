<template>
  <div class="profile-page">
    <div class="profile-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="user-info">
          <div class="avatar">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </div>
          <div class="user-details">
            <p class="user-name">{{ profile.name }}</p>
            <p class="user-email">{{ profile.email }}</p>
          </div>
        </div>

        <nav class="sidebar-nav">
          <section>
            <h3>Manage My Account</h3>
            <a href="#" class="nav-link">My Profile</a>
            <a href="#" class="nav-link">Address Book</a>
            <a href="#" class="nav-link">My Payment Options</a>
          </section>

          <section>
            <h3>My Orders</h3>
            <a href="#" class="nav-link">My Returns</a>
            <a href="#" class="nav-link">My Cancellations</a>
          </section>

          <section>
            <h3>My Wishlist</h3>
          </section>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <div v-if="!isEditing">
          <div class="header">
            <h1>My Profile</h1>
            <p class="description">Review and update this account's information.</p>
          </div>

          <div class="info-card">
            <div class="card-header">
              <h3>User Information</h3>
              <button @click="startEditing" class="edit-btn">Edit</button>
            </div>
            <div class="card-content">
              <div class="info-row">
                <label>Name</label>
                <span>{{ profile.name }}</span>
              </div>
              <div class="info-row">
                <label>Email</label>
                <span>{{ profile.email }}</span>
              </div>
              <div class="info-row">
                <label>Address</label>
                <span>{{ profile.address }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Edit Form -->
        <div v-else class="edit-form">
          <h1>Edit Your Profile</h1>
          
          <div class="form-container">
            <div class="form-group">
              <label>First Name</label>
              <input 
                v-model="editedProfile.firstName" 
                type="text" 
                class="form-input"
              />
            </div>
            
            <div class="form-group">
              <label>Last Name</label>
              <input 
                v-model="editedProfile.lastName" 
                type="text" 
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input 
                v-model="editedProfile.email" 
                type="email" 
                class="form-input"
              />
            </div>

            <div class="form-group">
              <label>Address</label>
              <input 
                v-model="editedProfile.address" 
                type="text" 
                class="form-input"
              />
            </div>

            <div class="password-section">
              <h3>Password Changes</h3>
              <div class="form-group">
                <input 
                  v-model="editedProfile.currentPassword" 
                  type="password" 
                  placeholder="Current Password"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input 
                  v-model="editedProfile.newPassword" 
                  type="password" 
                  placeholder="New Password"
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <input 
                  v-model="editedProfile.confirmPassword" 
                  type="password" 
                  placeholder="Confirm New Password"
                  class="form-input"
                />
              </div>
              <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
            </div>

            <div class="button-group">
              <button @click="cancelEdit" class="cancel-btn">Cancel</button>
              <button @click="saveChanges" class="save-btn">Save Changes</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const isEditing = ref(false);
const passwordError = ref('');

const profile = reactive({
  name: 'Veth Sivhuo',
  email: 'vethsivhuo@gmail.com',
  address: 'Toulkok, Phnom Penh, Cambodia'
});

const editedProfile = reactive({
  firstName: 'Veth',
  lastName: 'Sivhuo',
  email: 'vethsivhuo@gmail.com',
  address: 'Toulkok, Phnom Penh, Cambodia',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

const startEditing = () => {
  isEditing.value = true;
};

const validateForm = () => {
  passwordError.value = '';
  
  if (editedProfile.newPassword) {
    if (editedProfile.newPassword.length < 6) {
      passwordError.value = 'Password must be at least 6 characters';
      return false;
    }
    if (editedProfile.newPassword !== editedProfile.confirmPassword) {
      passwordError.value = 'Passwords do not match';
      return false;
    }
  }
  
  return true;
};

const saveChanges = () => {
  if (validateForm()) {
    // Update profile
    profile.name = `${editedProfile.firstName} ${editedProfile.lastName}`;
    profile.email = editedProfile.email;
    profile.address = editedProfile.address;
    
    // Reset form and exit edit mode
    isEditing.value = false;
    passwordError.value = '';
  }
};

const cancelEdit = () => {
  // Reset form
  editedProfile.firstName = profile.name.split(' ')[0];
  editedProfile.lastName = profile.name.split(' ')[1];
  editedProfile.email = profile.email;
  editedProfile.address = profile.address;
  editedProfile.currentPassword = '';
  editedProfile.newPassword = '';
  editedProfile.confirmPassword = '';
  
  // Exit edit mode
  isEditing.value = false;
  passwordError.value = '';
};
</script>

<style scoped>
/* Base Styles */
.profile-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
  font-weight: bold;
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

/* Card Styles */
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

/* Edit Form Styles */
.edit-form {
  padding: 20px;
}

.form-container {
  max-width: 800px;
  margin-top: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.password-section {
  margin-top: 30px;
}

.password-section h3 {
  margin-bottom: 20px;
}

.error-message {
  color: #dc2626;
  font-size: 14px;
  margin-top: 5px;
}

/* Button Styles */
.edit-btn {
  padding: 10px 20px;
  border: 2px solid #666;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  min-width: 120px;
  text-align: center;
}

.edit-btn:hover {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 30px;
}

.cancel-btn {
  padding: 10px 24px;
  background: none;
  border: 2px solid #666;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  min-width: 120px;
  text-align: center;
  transition: all 0.3s ease;
}

.cancel-btn:hover {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}

.save-btn {
  padding: 10px 24px;
  background: none;
  border: 2px solid #666;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  min-width: 120px;
  text-align: center;
  transition: all 0.3s ease;
}

.save-btn:hover {
  background-color: #28a745;
  color: white;
  border-color: #28a745;
}
</style>