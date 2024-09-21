<template>
  <section class="hero">
    <div class="overlay"></div>

    <!-- Slideshow Divs -->
    <div class="slideshow slide1"></div>
    <div class="slideshow slide2"></div>
    <div class="slideshow slide3"></div>

    <div class="content">
      <!-- Main Heading -->
      <h1>{{ $t("hero.heading") }}</h1>

      <!-- Subheading -->
      <p>{{ $t("hero.subheading") }}</p>

      <!-- CTA Buttons -->
      <div class="cta-buttons">
        <router-link to="/contact">
          <button class="cta-button primary">
            {{ $t("hero.cta.getQuote") }}
          </button>
        </router-link>
        <a href="https://wa.me/yourwhatsappnumber">
          <button class="cta-button secondary">
            {{ $t("hero.cta.whatsapp") }}
          </button>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
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
  overflow: hidden;
}

/* Overlay Effect */
.overlay {
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1; /* Above slideshow */
}

/* Slideshow Background Images */
.slideshow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  z-index: 0; /* Behind overlay and content */
  animation: fadeSlideshow 18s infinite;
}

.slide1 {
  background-image: url("@/assets/images/hero/hero_1.png");
}

.slide2 {
  background-image: url("@/assets/images/hero/hero_2.png");
  animation-delay: 6s;
}

.slide3 {
  background-image: url("@/assets/images/hero/hero_3.png");
  animation-delay: 12s;
}

/* Keyframes for slideshow fading */
@keyframes fadeSlideshow {
  0% {
    opacity: 1;
  }
  33.33% {
    opacity: 1;
  }
  38% {
    opacity: 0;
  }
  66.66% {
    opacity: 0;
  }
  71% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

/* Content Centered */
.content {
  position: relative;
  text-align: center;
  color: white;
  z-index: 2; /* Above slideshow */
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
