<template>
  <section>
    <div class="profile-page">
      <div class="profile-container">
        <aside class="sidebar">
          <div class="user-info">
            <div class="avatar">
              <img :src="profileImage" alt="User Avatar" />
              <button @click="triggerFileInput" class="change-photo">Change Photo</button>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleFileUpload"
                style="display: none"
              />
            </div>
            <div class="user-details">
              <p class="user-name" :title="user.name">{{ truncatedName }}</p>
              <p class="user-role">Customer</p>
            </div>
          </div>

          <nav class="sidebar-nav">
            <section>
              <h3>Account Management</h3>
              <ul>
                <li><a href="#" class="nav-link">My Profile</a></li>
                <li><a href="#" class="nav-link">Address Book</a></li>
                <li><router-link :to="{name:'payment-methods-page'}" class="nav-link">Payment Methods</router-link></li>
              </ul>
            </section>
            <section>
              <h3>Orders</h3>
              <ul>
                <li><a href="#" class="nav-link">Order History</a></li>
                <li><a href="#" class="nav-link">Returns</a></li>
                <li><a href="#" class="nav-link">Cancellations</a></li>
              </ul>
            </section>
            <section>
              <h3>Wishlist</h3>
              <ul>
                <li><a href="#" class="nav-link">Saved Items</a></li>
              </ul>
            </section>
          </nav>
        </aside>

        <main class="main-content">
          <div class="header">
            <h1>My Profile</h1>
            <p class="description">Review and update your account information below.</p>
          </div>

          <div class="info-card">
            <div class="card-header">
              <h3>User Information</h3>
              <button @click="toggleEditMode" class="edit-btn">
                {{ isEditing ? "Cancel" : "Edit" }}
              </button>
            </div>
            <form v-if="isEditing" @submit.prevent="updateProfile" class="card-content">
              <div class="info-row" v-for="(label, key) in editableFields" :key="key">
                <label>{{ label }}</label>
                <template v-if="key === 'gender'">
                  <select v-model="user[key]" class="input-field">
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </template>
                <template v-else>
                  <input
                    v-model="user[key]"
                    :placeholder="'Enter your ' + label.toLowerCase()"
                    type="text"
                    class="input-field"
                  />
                </template>
              </div>
              <button type="submit" class="save-btn">Save</button>
            </form>
            <div v-else class="card-content">
              <div class="info-row" v-for="(label, key) in editableFields" :key="key">
                <label>{{ label }}</label>
                <span>{{ user[key] || '--' }}</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<script setup>
import router from "@/router";
import { reactive, ref, computed, onMounted } from "vue";

const user = reactive({
  name: "",
  email: "",
  gender: "",
  address: "",
  phoneNumber: "",
  dob: "",
  nationality: "",
});

const editableFields = reactive({
  name: "Name",
  email: "Email",
  gender: "Gender",
  address: "Address",
  phoneNumber: "Phone Number",
  dob: "Date of Birth",
  nationality: "Nationality",
});

const profileImage = ref("/public/images/profile.png");
const isEditing = ref(false);

const truncatedName = computed(() => {
  const maxLength = 25;
  return user.name.length > maxLength ? `${user.name.slice(0, maxLength)}...` : user.name;
});

const loadUserProfile = () => {
onMounted(() => {
  const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
  if (storedProfile) Object.assign(user, storedProfile);

  const storedProfileImage = localStorage.getItem("profileImage");
  if (storedProfileImage) {
    profileImage.value = storedProfileImage;
  }
};

onMounted(() => {
  loadUserProfile();
  window.addEventListener("storage", loadUserProfile);
  if (storedProfileImage) profileImage.value = storedProfileImage;
});

const toggleEditMode = () => {
  isEditing.value = !isEditing.value;
};

const updateProfile = () => {
  localStorage.setItem("userProfile", JSON.stringify(user));
  isEditing.value = false;
  alert("Profile updated successfully!");
};

const triggerFileInput = () => {
  const fileInput = document.querySelector("input[type='file']");
  fileInput.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      profileImage.value = e.target.result;
      localStorage.setItem("profileImage", profileImage.value);
      alert("Profile picture updated successfully!");
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.profile-page {
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
}

.profile-container {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 30px;
}

.sidebar {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.166);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 20px;
}

.avatar img {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.change-photo {
  display: block;
  font-size: 14px;
  color: #007bff;
  background: none;
  border: none;
  margin-top: 10px;
  cursor: pointer;
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.user-role {
  font-size: 14px;
  color: #666;
}

.sidebar-nav section {
  margin-bottom: 20px;
}

.sidebar-nav h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.nav-link {
  font-size: 14px;
  color: #555;
  display: block;
  padding: 5px 0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

.main-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.166);
}

.header h1 {
  font-size: 22px;
  font-weight: bold;
}

.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
}

.info-card {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.edit-btn {
  font-size: 14px;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
}

.info-row {
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 15px;
}

.input-field {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.save-btn:hover {
  background-color: #0056b3;
}

.info-row span {
  font-weight: 400;
  font-size: 14px;
  color: #333;
}

@media (max-width: 768px) {
  .profile-container {
    grid-template-columns: 1fr;
  }

  .sidebar {
    margin-bottom: 30px;
  }
}
</style>
