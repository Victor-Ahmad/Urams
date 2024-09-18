<template>
  <section class="about-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 data-aos="fade-down">About Us</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Committed to Quality and Customer Satisfaction
        </p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container content">
      <div class="grid">
        <!-- Text Column -->
        <div class="col-text" data-aos="fade-right">
          <h2>Who We Are</h2>
          <p>
            With years of experience in bathroom renovations, we pride ourselves
            on delivering high-quality craftsmanship tailored to your needs.
          </p>
          <p>
            Our team of experts ensures every project is completed on time and
            within budget, using only the best materials.
          </p>
          <p>
            We would love to know more about your needs, so don't hesitate to
            contact us.
          </p>
        </div>

        <!-- Image Column -->
        <div class="col-image" data-aos="fade-left">
          <img :src="aboutUsImage" alt="About Us" />
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="cta-section" data-aos="zoom-in">
      <h2>Learn More About Our Services</h2>
      <router-link to="/services">
        <button class="cta-button primary">Explore Our Services</button>
      </router-link>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUsImage from "@/assets/images/leading/about_us.jpg"; // Updated to new image

export default {
  name: "AboutPage",
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  },
  data() {
    return {
      aboutUsImage,
    };
  },
};
</script>

<style scoped>
/* General Styling */
.about-page {
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("@/assets/images/leading/about_us.jpg"); /* Leading image */
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.6); /* Dark overlay for contrast */
  padding: 50px;
  text-align: center;
  color: #ffffff;
  width: 100%;
}

.hero h1 {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Add text shadow for emphasis */
}

.hero p {
  font-size: 24px;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto;
}

/* Content Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  align-items: center;
}

.col-text h2 {
  font-size: 36px;
  margin-bottom: 25px;
  color: #2c3e50;
}

.col-text p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #555;
}

.col-image img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2); /* Shadow effect */
}

/* Call-to-Action Section */
.cta-section {
  background-color: #007bff; /* Vibrant color for CTA */
  color: white;
  text-align: center;
  padding: 50px 20px;
  margin-top: 80px;
}

.cta-section h2 {
  font-size: 36px;
  margin-bottom: 30px;
}

.cta-button {
  background-color: #2ecc71;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 8px 15px rgba(46, 204, 113, 0.3); /* Button shadow */
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  background-color: #27ae60;
  box-shadow: 0 12px 25px rgba(46, 204, 113, 0.5); /* Hover effect */
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 40px;
  }

  .hero p {
    font-size: 18px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .cta-section h2 {
    font-size: 28px;
  }

  .cta-button {
    width: 100%;
    max-width: 300px;
  }
}
</style>
