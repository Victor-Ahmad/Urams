<template>
  <section class="contact-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>Get in Touch</h1>
        <p>Have questions or ready to start your project? Contact us today.</p>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="container contact-form-section">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            v-model="formData.name"
            id="name"
            placeholder="Your name"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            v-model="formData.email"
            id="email"
            placeholder="Your email"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="tel"
            v-model="formData.phone"
            id="phone"
            placeholder="Your phone number"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea
            v-model="formData.message"
            id="message"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button">Submit</button>
      </form>
    </div>

    <!-- Contact Information -->
    <div class="contact-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <p><strong>Email:</strong> info@example.com</p>
          </div>
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <p><strong>Address:</strong> 123 Main St, City, Country</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Google Maps Embed -->
    <div class="google-maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097376!2d144.95373521531694!3d-37.81627977975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1632998630737!5m2!1sen!2sus"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(`Thank you, ${this.formData.name}, for contacting us!`);
      // Here you can handle form submission, e.g., send data to an API
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.contact-page {
  color: #333;
  font-family: "Arial", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("https://via.placeholder.com/1920x600"); /* Replace with an actual hero image */
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
}

.hero p {
  font-size: 20px;
}

/* Contact Form Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.contact-form-section h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
}

.contact-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 150px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Contact Information */
.contact-info {
  background-color: #f9f9f9;
  padding: 40px 0;
}

.info-grid {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}

.info-item {
  text-align: center;
}

.info-item i {
  font-size: 32px;
  color: #007bff;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 18px;
}

/* Google Maps Embed */
.google-maps {
  margin-top: 60px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .info-grid {
    flex-direction: column;
    align-items: center;
  }

  .contact-form {
    max-width: 100%;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
