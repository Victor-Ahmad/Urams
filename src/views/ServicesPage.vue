<template>
  <section class="services-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 data-aos="fade-down">{{ $t("services.hero.title") }}</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          {{ $t("services.hero.subtitle") }}
        </p>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container services">
      <h2 data-aos="fade-up">{{ $t("services.sectionTitle") }}</h2>
      <div class="service-grid">
        <div
          class="service-card"
          v-for="(service, index) in services"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="icon">
            <img :src="service.icon" :alt="service.title" />
          </div>
          <h3>{{ $t(`services.items.${index + 1}.title`) }}</h3>
          <p>{{ $t(`services.items.${index + 1}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
import plumbingIcon from "@/assets/images/services/Plumbing.png";
import wallPreparationIcon from "@/assets/images/services/Wall Preparation.png";
import tilingIcon from "@/assets/images/services/Tiling.png";
import siliconeApplicationIcon from "@/assets/images/services/Silicone Application.png";
import ceilingPaintingIcon from "@/assets/images/services/Ceiling Painting.png";
import bathroomFixturesIcon from "@/assets/images/services/Bathroom Fixtures.png";
import fullRenovationIcon from "@/assets/images/services/Full Bathroom Renovation.png";

export default {
  name: "ServicesPage",
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    this.scrollToTop();
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  data() {
    return {
      services: [
        {
          title: this.$t("services.items.1.title"),
          description: this.$t("services.items.1.description"),
          icon: plumbingIcon,
        },
        {
          title: this.$t("services.items.2.title"),
          description: this.$t("services.items.2.description"),
          icon: wallPreparationIcon,
        },
        {
          title: this.$t("services.items.3.title"),
          description: this.$t("services.items.3.description"),
          icon: tilingIcon,
        },
        {
          title: this.$t("services.items.4.title"),
          description: this.$t("services.items.4.description"),
          icon: siliconeApplicationIcon,
        },
        {
          title: this.$t("services.items.5.title"),
          description: this.$t("services.items.5.description"),
          icon: ceilingPaintingIcon,
        },
        {
          title: this.$t("services.items.6.title"),
          description: this.$t("services.items.6.description"),
          icon: bathroomFixturesIcon,
        },
        {
          title: this.$t("services.items.7.title"),
          description: this.$t("services.items.7.description"),
          icon: fullRenovationIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* General Page Styling */
.services-page {
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("@/assets/images/leading/our_services.jpg");
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

/* Services Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.services h2 {
  font-size: 40px;
  text-align: center;
  color: #007bff;
  margin-bottom: 60px;
}

/* Service Grid Layout */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 0 20px;
}

/* Service Card Styling */
.service-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

/* Service Icon Styling */
.service-card .icon {
  background-color: #007bff;
  padding: 20px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.service-card .icon img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

/* Service Title and Description */
.service-card h3 {
  font-size: 26px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.service-card p {
  font-size: 16px;
  color: #555;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .service-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
