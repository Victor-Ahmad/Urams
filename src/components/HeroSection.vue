<template>
  <section class="hero">
    <div class="overlay">
      <div class="content">
        <!-- Main Heading -->
        <h1>Transform Your Bathroom with Expert Craftsmanship</h1>

        <!-- Subheading -->
        <p>Professional bathroom renovation services tailored to your needs.</p>

        <!-- CTA Buttons -->
        <div class="cta-buttons">
          <router-link to="/contact">
            <button class="cta-button primary">Get a Free Quote</button>
          </router-link>
          <a href="https://wa.me/yourwhatsappnumber">
            <button class="cta-button secondary">WhatsApp</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import hero1 from "@/assets/images/hero/hero_1.jpg";
import hero2 from "@/assets/images/hero/hero_2.jpg";
import hero3 from "@/assets/images/hero/hero_3.jpg";

export default {
  name: "HeroSection",
  data() {
    return {
      heroImages: [hero1, hero2, hero3],
    };
  },
};
</script>

<style scoped>
/* Fullscreen Hero Section */
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  animation: fadeImages 15s infinite;
}

/* Animation to rotate between background images */
@keyframes fadeImages {
  0% {
    background-image: url("@/assets/images/hero/hero_1.jpg");
  }
  33% {
    background-image: url("@/assets/images/hero/hero_2.jpg");
  }
  66% {
    background-image: url("@/assets/images/hero/hero_3.jpg");
  }
  100% {
    background-image: url("@/assets/images/hero/hero_1.jpg");
  }
}

/* Overlay Effect */
.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Content Centered */
.content {
  text-align: center;
  color: white;
  max-width: 700px;
  padding: 20px;
}

/* Hero Heading */
.content h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #fff;
}

/* Hero Subheading */
.content p {
  font-size: 18px;
  margin-bottom: 30px;
  color: #f8f9fa;
}

/* CTA Buttons */
.cta-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
}

/* Primary CTA Button */
.cta-button.primary {
  background-color: #007bff;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.cta-button.primary:hover {
  background-color: #0056b3;
}

/* Secondary CTA Button (WhatsApp) */
.cta-button.secondary {
  background-color: #25d366; /* WhatsApp green */
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.cta-button.secondary:hover {
  background-color: #1ebc57;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content h1 {
    font-size: 36px;
  }

  .content p {
    font-size: 16px;
  }

  .cta-buttons {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
