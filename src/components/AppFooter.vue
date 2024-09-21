<template>
  <footer class="footer">
    <div class="container">
      <!-- Contact Information in Row (Web) or Column (Mobile) -->
      <div class="contact-info">
        <a href="mailto:info@urams.com">
          <i class="fas fa-envelope"></i> info@urams.com
        </a>
        <a href="tel:+31611410968">
          <i class="fas fa-phone-alt"></i> 0611410968
        </a>
        <a href="https://wa.me/31611410968" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp.png"
            alt="WhatsApp"
            class="whatsapp-icon"
          />
          {{ $t("footer.contact.whatsapp") }}
        </a>
      </div>

      <!-- Back to Top Button -->
      <button class="back-to-top" @click="scrollToTop">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<!-- Scoped Footer Styling -->
<style scoped>
/* Footer Styling */
.footer {
  background-color: #222; /* Dark background for a stylish look */
  color: #f8f9fa; /* Light text for contrast */
  padding: 20px 0;
  text-align: center;
}

/* Container styles for layout */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Contact Info Styling */
.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px; /* Spacing between items */
}

.contact-info a {
  color: #f8f9fa;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: #007bff; /* Highlight links on hover */
}

.contact-info i {
  margin-right: 8px;
}

/* WhatsApp icon styling */
.whatsapp-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

/* Back to Top Button */
.back-to-top {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 7px 10px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.back-to-top:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .container {
    max-width: 80%;
    flex-direction: column;
    gap: 20px;
  }

  .contact-info {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
