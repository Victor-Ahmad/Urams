<template>
  <section class="contact-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 data-aos="fade-down">Get in Touch</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Have questions or ready to start your project? Contact us today.
        </p>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="container contact-form-section">
      <h2 data-aos="fade-up">Contact Us</h2>
      <form
        @submit.prevent="submitForm"
        class="contact-form"
        data-aos="fade-up"
        data-aos-delay="100"
      >
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

    <!-- Contact Information Section -->
    <div class="contact-info" data-aos="fade-up">
      <div class="contact-info-container">
        <h2>Contact Information</h2>
        <ul class="contact-details">
          <li>
            <i class="fas fa-phone"></i>
            <span><strong>Phone:</strong> 0611410968</span>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <span><strong>Email:</strong> info@urams.com</span>
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span><strong>Address:</strong>3162PL, Saffierlaan 214</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Google Maps Embed -->
    <div class="google-maps" data-aos="fade-up">
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
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "ContactPage",
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    this.scrollToTop();
  },
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
    },

    scrollToTop() {
      // Smoothly scrolls to the very top of the document (including scroll restoration)
      window.scrollTo({
        top: 0, // Ensures scrolling to the top of the document
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.contact-page {
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("@/assets/images/leading/contact_us.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  background-color: rgba(
    0,
    0,
    0,
    0.6
  ); /* Dark overlay for better text contrast */
  padding: 50px;
  text-align: center;
  color: white;
  width: 100%;
}

.hero h1 {
  font-size: 56px;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Text shadow for emphasis */
  margin-bottom: 20px;
}

.hero p {
  font-size: 22px;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto;
}

/* Contact Form Section */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 20px;
  background: linear-gradient(135deg, #f0f4f8 50%, #ffffff 50%);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  transform-style: preserve-3d;
  margin-top: 40px; /* Add margin above */
  margin-bottom: 80px; /* Add margin below */
}

.contact-form-section h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;
  color: #007bff;
}

/* Contact Form */
.contact-form {
  max-width: 700px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 25px;
}

.form-group label {
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #007bff;
  box-shadow: 0 10px 20px rgba(0, 123, 255, 0.2);
}

textarea {
  height: 160px;
}

/* Submit Button */
.submit-button {
  display: block;
  width: 100%;
  padding: 18px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 123, 255, 0.3);
}

.submit-button:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

/* Contact Information Section */
.contact-info {
  background-color: #f8f9fb;
  padding: 60px 20px;
  text-align: center;
}

.contact-info-container {
  max-width: 800px;
  margin: 0 auto;
}

.contact-info h2 {
  font-size: 36px;
  margin-bottom: 40px;
  color: #2c3e50;
}

.contact-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-details li {
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #555;
  margin-bottom: 20px;
  justify-content: center;
}

.contact-details i {
  font-size: 24px;
  color: #007bff;
  margin-right: 15px;
}

/* Google Maps Embed */
.google-maps {
  margin-top: 60px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    max-width: 80%;
  }
  .contact-form {
    max-width: 100%;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero p {
    font-size: 18px;
  }

  .contact-info h2 {
    font-size: 30px;
  }

  .contact-details li {
    flex-direction: column;
  }

  .contact-details i {
    margin-bottom: 10px;
  }
  .form-group input,
  .form-group textarea {
    max-width: 90%;
  }
  .submit-button {
    max-width: 100%;
  }
}
</style>
