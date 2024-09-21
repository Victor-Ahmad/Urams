<template>
  <section class="cta-section">
    <div class="container">
      <!-- Main Heading -->
      <h2>{{ $t("cta.heading") }}</h2>
      <!-- Subheading -->
      <p>
        {{ $t("cta.subheading") }}
      </p>

      <!-- CTA Buttons -->
      <div class="cta-buttons">
        <router-link to="/contact">
          <button class="cta-button primary">
            {{ $t("cta.buttons.contact") }}
          </button>
        </router-link>
        <router-link to="/quote">
          <button class="cta-button secondary">
            {{ $t("cta.buttons.getQuote") }}
          </button>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CTASection",
};
</script>

<style scoped>
/* CTA Section Styling */
.cta-section {
  background-color: #f0f0f0; /* Light gray background */
  padding: 80px 0;
  text-align: center;
  color: #333; /* Darker text for readability */
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Heading Styling */
.cta-section h2 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #333333; /* Darker color for better contrast */
  text-shadow: none; /* Remove text shadow for clarity on light background */
}

/* Subheading Styling */
.cta-section p {
  font-size: 18px;
  margin-bottom: 40px;
  color: #555555; /* Slightly darker text color for contrast */
  max-width: 700px;
  margin: 0 auto 40px auto;
}

/* CTA Buttons Wrapper */
.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Primary CTA Button */
.cta-button.primary {
  background-color: #28a745;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button.primary:hover {
  background-color: #218838;
}

/* Secondary CTA Button */
.cta-button.secondary {
  background-color: #007bff;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button.secondary:hover {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .cta-section h2 {
    font-size: 32px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .cta-button {
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
  .container {
    max-width: 80%;
  }
}
</style>
