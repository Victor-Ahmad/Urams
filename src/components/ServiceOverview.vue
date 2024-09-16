<template>
  <section class="services">
    <div class="container">
      <!-- Services Heading -->
      <h2>Our Services</h2>
      <p class="subheading">
        Comprehensive solutions for your bathroom renovation needs.
      </p>

      <!-- Services Grid -->
      <div class="service-grid">
        <div
          class="service-box"
          v-for="(service, index) in services"
          :key="index"
        >
          <img :src="service.icon" alt="Service Icon" class="service-icon" />
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceOverview",
  data() {
    return {
      services: [
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Plumbing",
          description: "Expert installation and repair of pipes and fixtures.",
        },
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Wall Preparation",
          description: "Wall leveling and construction of new walls if needed.",
        },
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Tiling",
          description: "High-quality tiling services for walls and floors.",
        },
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Silicone Application",
          description: "Application of silicone for sealing and protection.",
        },
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Ceiling Painting",
          description: "Professional ceiling painting and finishing.",
        },
        {
          icon: "https://via.placeholder.com/100", // Replace with actual icon
          title: "Bathroom Fixtures",
          description:
            "Installation of shower cabins, mirrors, sinks, and cabinets.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Service Section Styles */
.services {
  padding: 50px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.services h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subheading {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

/* Grid Layout for Services */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* Service Box Styling */
.service-box {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

/* Hover Effect for Service Box */
.service-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}

/* Service Icons */
.service-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 15px;
}

/* Service Titles */
.service-box h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Service Descriptions */
.service-box p {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
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

  .service-box {
    padding: 15px;
  }
}
</style>
