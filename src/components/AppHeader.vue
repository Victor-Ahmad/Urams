<template>
  <header class="header">
    <div class="container flex justify-between items-center">
      <!-- Updated Logo -->
      <div class="logo">
        <img :src="logo" alt="Urams Logo" />
      </div>

      <!-- Navigation Links -->
      <nav>
        <ul class="nav-links flex space-x-6">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/process">Our Process</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>

      <!-- Call-to-Action Button -->
      <div class="cta-btn">
        <router-link to="/contact">
          <button class="cta-button">Request Your Free Consultation Now</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/images/logo.png"; // Import the logo image

export default {
  name: "AppHeader",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
/* Header styles */
.header {
  background-color: #fff;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

/* Container ensures proper alignment */
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo Styling */
.logo img {
  width: 80px; /* Adjusted size for a better fit */
}

/* Navigation Styles */
.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline-block;
}

.nav-links a {
  color: #333;
  font-size: 16px;
  text-decoration: none;
  padding: 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
  background-color: #f0f0f0;
  border-radius: 4px;
}

/* Call-to-Action Button Styles */
.cta-btn .cta-button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-btn .cta-button:hover {
  background-color: #218838;
}
</style>
