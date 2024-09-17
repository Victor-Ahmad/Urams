<template>
  <section class="services-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>Our Services</h1>
        <p>Comprehensive solutions for all your bathroom renovation needs</p>
      </div>
    </div>

    <!-- Services Section -->
    <div class="container services">
      <h2>What We Offer</h2>
      <div class="service-grid">
        <!-- Service Card -->
        <div
          class="service-card"
          v-for="(service, index) in services"
          :key="index"
        >
          <div class="icon">
            <img :src="service.icon" :alt="service.title" />
          </div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import plumbingIcon from "@/assets/images/services/Plumbing.png";
import wallPreparationIcon from "@/assets/images/services/Wall Preparation.png";
import tilingIcon from "@/assets/images/services/Tiling.png";
import siliconeApplicationIcon from "@/assets/images/services/Silicone Application.png";
import ceilingPaintingIcon from "@/assets/images/services/Ceiling Painting.png";
import bathroomFixturesIcon from "@/assets/images/services/Bathroom Fixtures.png";
import fullRenovationIcon from "@/assets/images/services/Full Bathroom Renovation.png";

export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "Plumbing",
          description: "Expert installation and repair of pipes and fixtures.",
          icon: plumbingIcon,
        },
        {
          title: "Wall Preparation",
          description: "Wall leveling and construction of new walls if needed.",
          icon: wallPreparationIcon,
        },
        {
          title: "Tiling",
          description: "High-quality tiling services for walls and floors.",
          icon: tilingIcon,
        },
        {
          title: "Silicone Application",
          description: "Application of silicone for sealing and protection.",
          icon: siliconeApplicationIcon,
        },
        {
          title: "Ceiling Painting",
          description: "Professional ceiling painting and finishing.",
          icon: ceilingPaintingIcon,
        },
        {
          title: "Bathroom Fixtures",
          description:
            "Installation of shower cabins, mirrors, sinks, and cabinets.",
          icon: bathroomFixturesIcon,
        },
        {
          title: "Full Bathroom Renovation",
          description: "Complete renovation services from start to finish.",
          icon: fullRenovationIcon,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Services Page Styling */
.services-page {
  color: #333;
  font-family: "Arial", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("https://via.placeholder.com/1920x600"); /* Placeholder hero image */
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
  margin-bottom: 10px;
}

.hero p {
  font-size: 20px;
  font-weight: 300;
}

/* Services Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.services h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #007bff;
}

/* Service Grid Layout */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 20px;
}

.service-card {
  background-color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.service-card .icon {
  margin-bottom: 20px;
}

.service-card .icon img {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.service-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
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
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
