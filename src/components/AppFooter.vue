<template>
  <footer class="footer">
    <div class="container">
      <!-- Social Icons Section -->
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>

      <!-- Copyright Section -->
      <p>&copy; 2024 Urams. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<!-- Scoped Footer Styling -->
<style scoped>
/* Footer Background and Padding */
.footer {
  background-color: #333;
  padding: 40px 0;
  color: #f8f9fa;
  text-align: center;
}

/* Social Media Icons Styles */
.social-icons {
  margin-bottom: 20px;
}

.social-icons a {
  margin: 0 10px;
  color: white;
  font-size: 20px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #007bff;
}

/* Copyright Text */
.footer p {
  font-size: 14px;
  color: #ccc;
  margin: 0;
}

/* Footer Media Queries for Mobile Responsiveness */
@media (max-width: 600px) {
  .social-icons a {
    font-size: 18px;
  }

  .footer p {
    font-size: 12px;
  }
}
</style>
