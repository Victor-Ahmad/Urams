<template>
  <section class="about-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>About Us</h1>
        <p>Committed to Quality and Customer Satisfaction</p>
      </div>
    </div>

    <!-- Content Section -->
    <div class="container content">
      <div class="row">
        <!-- Text Column -->
        <div class="col">
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
        <div class="col">
          <img src="https://via.placeholder.com/400" alt="About Us" />
        </div>
      </div>
    </div>

    <!-- Call to Action Section -->
    <div class="cta-section">
      <h2>Learn More About Our Services</h2>
      <router-link to="/services">
        <button class="cta-button primary">Explore Our Services</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
/* About Page Styling */
.about-page {
  color: #333;
  font-family: "Arial", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("https://via.placeholder.com/1920x600"); /* Placeholder hero image */
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  padding: 40px;
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
}

.hero p {
  font-size: 20px;
  font-weight: 300;
}

/* Content Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
}

.col {
  flex: 1;
}

.col img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* CTA Section */
.cta-section {
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 60px;
}

.cta-section h2 {
  font-size: 32px;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #28a745;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #218838;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }

  .row {
    flex-direction: column;
    text-align: center;
  }

  .cta-section h2 {
    font-size: 28px;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
  }
}
</style>
