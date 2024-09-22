<template>
  <section class="contact-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 data-aos="fade-down">{{ $t("contactUsForm.hero.title") }}</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          {{ $t("contactUsForm.hero.subtitle") }}
        </p>
      </div>
    </div>

    <!-- Contact Form Section -->
    <div class="container contact-form-section">
      <h2 data-aos="fade-up">{{ $t("contactUsForm.form.title") }}</h2>
      <form
        @submit.prevent="submitForm"
        class="contact-form"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="form-group">
          <label for="name">{{ $t("contactUsForm.form.labels.name") }}</label>
          <input
            type="text"
            v-model="formData.name"
            id="name"
            :placeholder="$t('contactUsForm.form.placeholders.name')"
            required
          />
        </div>

        <div class="form-group">
          <label for="email">{{ $t("contactUsForm.form.labels.email") }}</label>
          <input
            type="email"
            v-model="formData.email"
            id="email"
            :placeholder="$t('contactUsForm.form.placeholders.email')"
            required
          />
        </div>

        <div class="form-group">
          <label for="phone">{{ $t("contactUsForm.form.labels.phone") }}</label>
          <input
            type="tel"
            v-model="formData.phone"
            id="phone"
            :placeholder="$t('contactUsForm.form.placeholders.phone')"
            required
          />
        </div>

        <div class="form-group">
          <label for="message">{{
            $t("contactUsForm.form.labels.message")
          }}</label>
          <textarea
            v-model="formData.message"
            id="message"
            :placeholder="$t('contactUsForm.form.placeholders.message')"
            required
          ></textarea>
        </div>

        <button type="submit" class="submit-button" :disabled="loading">
          <!-- Show spinner when loading -->
          <span v-if="loading" class="spinner"></span>
          <span v-else>{{ $t("contactUsForm.form.submitButton") }}</span>
        </button>
      </form>
    </div>

    <!-- Contact Information Section -->
    <div class="contact-info" data-aos="fade-up">
      <div class="contact-info-container">
        <h2>{{ $t("contactUsForm.info.title") }}</h2>
        <ul class="contact-details">
          <li>
            <i class="fas fa-phone"></i>
            <span
              ><strong>{{ $t("contactUsForm.info.phoneLabel") }}:</strong> +31 6
              85011945</span
            >
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <span
              ><strong>{{ $t("contactUsForm.info.emailLabel") }}:</strong>
              uramsbouw@gmail.com</span
            >
          </li>
          <li>
            <i class="fas fa-map-marker-alt"></i>
            <span
              ><strong>{{ $t("contactUsForm.info.addressLabel") }}:</strong>
              3162PL, Saffierlaan 214</span
            >
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
import emailjs from "emailjs-com";
import Swal from "sweetalert2"; // Import SweetAlert2 for better alerts

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
      loading: false, // Add loading state
    };
  },
  methods: {
    submitForm() {
      this.loading = true; // Start loading when submit is triggered

      const formParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        phone: this.formData.phone,
        message: this.formData.message,
      };

      emailjs
        .send(
          "service_bzudvfj", // Your EmailJS Service ID
          "template_gyf90zu", // Your EmailJS Template ID
          formParams,
          "gfSn2glJHkxsOpZN4" // Your Public Key
        )
        .then(
          () => {
            this.loading = false; // Stop loading after success
            // Success Alert
            Swal.fire({
              icon: "success",
              title: this.$t("contactUsForm.form.successTitle"),
              text: this.$t("contactUsForm.form.successMessage"),
              showConfirmButton: false,
              timer: 3000,
            });
            // Reset form data
            this.formData = {
              name: "",
              email: "",
              phone: "",
              message: "",
            };
          },
          (error) => {
            this.loading = false; // Stop loading after error
            // Error Alert
            Swal.fire({
              icon: "error",
              title: this.$t("contactUsForm.form.errorTitle"),
              text: this.$t("contactUsForm.form.errorMessage"),
            });
            console.error("Failed to send email: ", error.text);
          }
        );
    },
  },
};
</script>

<style scoped>
/* Form Group */
.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 15px;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

/* Spinner */
.spinner {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  vertical-align: middle;
  margin-right: 5px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Disabled button when loading */
.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

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
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  text-align: center;
  color: white;
  width: 100%;
}

.hero h1 {
  font-size: 56px;
  font-weight: bold;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
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
  margin-top: 40px;
  margin-bottom: 80px;
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

textarea {
  height: 160px;
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

  .submit-button {
    max-width: 100%;
  }
}
</style>
