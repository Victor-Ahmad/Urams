<template>
  <header class="header">
    <div class="container flex justify-between items-center">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/"> <img :src="logo" alt="Urams Logo" /></router-link>
      </div>

      <!-- Navigation Links -->
      <nav class="nav">
        <!-- Desktop Nav Links (hidden on mobile) -->
        <ul class="nav-links flex space-x-6 items-center" v-if="!isMobile">
          <li>
            <router-link to="/">{{ $t("header.nav.home") }}</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t("header.nav.about") }}</router-link>
          </li>
          <li>
            <router-link to="/services">{{
              $t("header.nav.services")
            }}</router-link>
          </li>
          <li>
            <router-link to="/process">{{
              $t("header.nav.process")
            }}</router-link>
          </li>
          <li>
            <router-link to="/gallery">{{
              $t("header.nav.gallery")
            }}</router-link>
          </li>
          <li>
            <router-link to="/contact">{{
              $t("header.nav.contact")
            }}</router-link>
          </li>

          <!-- CTA Button Added to Desktop Navigation -->
          <li class="cta-btn">
            <router-link to="/contact">
              <button class="cta-button">{{ $t("header.cta") }}</button>
            </router-link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        <!-- Hamburger Menu Icon (visible on mobile) -->
        <div class="hamburger-menu" @click="toggleMobileMenu" v-if="isMobile">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>

        <!-- Mobile Dropdown (visible when the menu is open on mobile) -->
        <ul class="mobile-nav-links" v-if="isMobileMenuOpen">
          <li>
            <router-link to="/" @click="toggleMobileMenu">{{
              $t("header.nav.home")
            }}</router-link>
          </li>
          <li>
            <router-link to="/about" @click="toggleMobileMenu">{{
              $t("header.nav.about")
            }}</router-link>
          </li>
          <li>
            <router-link to="/services" @click="toggleMobileMenu">{{
              $t("header.nav.services")
            }}</router-link>
          </li>
          <li>
            <router-link to="/process" @click="toggleMobileMenu">{{
              $t("header.nav.process")
            }}</router-link>
          </li>
          <li>
            <router-link to="/gallery" @click="toggleMobileMenu">{{
              $t("header.nav.gallery")
            }}</router-link>
          </li>
          <li>
            <router-link to="/contact" @click="toggleMobileMenu">{{
              $t("header.nav.contact")
            }}</router-link>
          </li>

          <!-- CTA Button inside Mobile Menu -->
          <li class="mobile-cta-btn">
            <router-link to="/contact" @click="toggleMobileMenu">
              <button class="cta-button">{{ $t("header.cta") }}</button>
            </router-link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import logo from "@/assets/images/logo.png"; // Import the logo image
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"; // Import the component

export default {
  name: "AppHeader",
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      logo,
      isMobile: false, // To track if it's a mobile screen
      isMobileMenuOpen: false, // To toggle the mobile menu
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) {
        this.isMobileMenuOpen = false;
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
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
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.cta-btn .cta-button:hover {
  background-color: #218838;
}

/* Hide the desktop CTA button on mobile */
@media (max-width: 767px) {
  .cta-btn {
    display: none;
  }
}

/* Hamburger Menu Styles (for mobile) */
.hamburger-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.hamburger-menu .bar {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
}

/* Mobile Navigation Styles */
.mobile-nav-links {
  list-style-type: none;
  padding: 0;
  margin: 10px 0 0 0;
  background-color: rgba(0, 0, 0, 0.9); /* Black with slight transparency */
  position: absolute;
  top: 60px; /* Adjust this based on your header height */
  right: 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.mobile-nav-links li {
  text-align: center; /* Center the text */
  padding: 10px;
}

.mobile-nav-links a {
  display: block;
  padding: 10px;
  color: white; /* White text for contrast */
  text-decoration: none;
}

.mobile-nav-links a:hover {
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* Slight white transparency on hover */
  color: white;
}

/* Add styles for the CTA button inside mobile dropdown */
.mobile-cta-btn {
  padding: 15px;
  text-align: center;
}

.mobile-cta-btn .cta-button {
  width: 100%;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 10px 0;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.mobile-cta-btn .cta-button:hover {
  background-color: #218838;
}

/* Responsive Media Queries */
@media (max-width: 767px) {
  /* Hide normal nav on mobile */
  .nav-links {
    display: none;
  }

  /* Show hamburger menu on mobile */
  .hamburger-menu {
    display: flex;
  }

  /* Add horizontal padding to the header */
  .header {
    padding-left: 15px;
    padding-right: 15px;
  }

  /* Reduce logo size on mobile */
  .logo img {
    width: 60px; /* Smaller size on mobile */
  }

  /* Reduce hamburger menu size on mobile */
  .hamburger-menu .bar {
    width: 25px; /* Reduce width */
    height: 2px; /* Reduce height */
  }
}
</style>
