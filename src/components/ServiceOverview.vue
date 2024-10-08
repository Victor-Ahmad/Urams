<template>
  <section class="services">
    <div class="container">
      <!-- Services Heading -->
      <h2 data-aos="fade-up">{{ $t("ourServices.heading") }}</h2>
      <p class="subheading" data-aos="fade-up" data-aos-delay="100">
        {{ $t("ourServices.subheading") }}
      </p>

      <!-- Services Grid -->
      <div class="service-grid">
        <div
          class="service-box"
          v-for="(service, index) in services"
          :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="icon-wrapper" data-aos="zoom-in" data-aos-delay="200">
            <img :src="service.icon" alt="Service Icon" class="service-icon" />
          </div>
          <h3>{{ $t(`ourServices.items.${index + 1}.title`) }}</h3>
          <p>{{ $t(`ourServices.items.${index + 1}.description`) }}</p>
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
  name: "ServiceOverview",
  mounted() {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  },
  data() {
    return {
      services: [
        {
          icon: plumbingIcon,
          title: this.$t("ourServices.items.1.title"),
          description: this.$t("ourServices.items.1.description"),
        },
        {
          icon: wallPreparationIcon,
          title: this.$t("ourServices.items.2.title"),
          description: this.$t("ourServices.items.2.description"),
        },
        {
          icon: tilingIcon,
          title: this.$t("ourServices.items.3.title"),
          description: this.$t("ourServices.items.3.description"),
        },
        {
          icon: siliconeApplicationIcon,
          title: this.$t("ourServices.items.4.title"),
          description: this.$t("ourServices.items.4.description"),
        },
        {
          icon: ceilingPaintingIcon,
          title: this.$t("ourServices.items.5.title"),
          description: this.$t("ourServices.items.5.description"),
        },
        {
          icon: bathroomFixturesIcon,
          title: this.$t("ourServices.items.6.title"),
          description: this.$t("ourServices.items.6.description"),
        },
        {
          icon: fullRenovationIcon,
          title: this.$t("ourServices.items.7.title"),
          description: this.$t("ourServices.items.7.description"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Service Section Styles */
.services {
  padding: 120px 0;
  background: radial-gradient(
    circle at top,
    #ffffff,
    #f3f4f6
  ); /* Light gradient for a premium feel */
  text-align: center;
  overflow: hidden;
}

.services h2 {
  font-size: 50px;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 30px;
}

.subheading {
  font-size: 20px;
  color: #7f8c8d;
  margin-bottom: 70px;
}

/* Grid Layout for Services */
.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  padding: 0 20px;
}

/* 3D Card Effect */
.service-box {
  background: #f7f8fa;
  border-radius: 20px;
  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.1),
    -10px -10px 25px rgba(255, 255, 255, 0.7);
  padding: 40px;
  text-align: center;
  transition: transform 0.4s ease;
  transform-style: preserve-3d; /* Preserve 3D effect */
  perspective: 1000px; /* Perspective depth */
  transform: rotateX(8deg) rotateY(-8deg); /* Initial 3D tilt */
}

/* Icon Wrapper */
.icon-wrapper {
  background: linear-gradient(145deg, #00aaff, #0077cc);
  padding: 25px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 25px;
}

.service-icon {
  width: 75px;
  height: 75px;
  object-fit: contain;
}

/* Service Titles */
.service-box h3 {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #34495e;
}

/* Service Descriptions */
.service-box p {
  font-size: 17px;
  color: #7f8c8d;
  line-height: 1.7;
  margin-bottom: 0;
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
}
</style>
