<template>
  <section class="testimonials">
    <div class="container">
      <!-- Testimonials Heading -->
      <h2 data-aos="fade-up">{{ $t("testimonials.heading") }}</h2>

      <!-- Swiper Container -->
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :modules="swiperModules"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        class="testimonials-swiper"
      >
        <!-- Swiper Slide for each testimonial -->
        <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-card" data-aos="fade-up">
            <div class="quote-icon">“</div>
            <div class="quote-wrapper">
              <blockquote>
                "{{ $t(`testimonials.items.${index + 1}.quote`) }}"
              </blockquote>
            </div>
            <div class="gradient-divider"></div>
            <p class="client-name">
              {{ $t(`testimonials.items.${index + 1}.name`) }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
  name: "ClientTestimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperModules: [Autoplay],
      testimonials: [
        {
          quote: this.$t("testimonials.items.1.quote"),
          name: this.$t("testimonials.items.1.name"),
        },
        {
          quote: this.$t("testimonials.items.2.quote"),
          name: this.$t("testimonials.items.2.name"),
        },
        {
          quote: this.$t("testimonials.items.3.quote"),
          name: this.$t("testimonials.items.3.name"),
        },
        {
          quote: this.$t("testimonials.items.4.quote"),
          name: this.$t("testimonials.items.4.name"),
        },
        {
          quote: this.$t("testimonials.items.5.quote"),
          name: this.$t("testimonials.items.5.name"),
        },
        {
          quote: this.$t("testimonials.items.6.quote"),
          name: this.$t("testimonials.items.6.name"),
        },
        {
          quote: this.$t("testimonials.items.7.quote"),
          name: this.$t("testimonials.items.7.name"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Testimonials Section Styling */
.testimonials {
  background: radial-gradient(
    circle,
    #e0eafc,
    #cfdef3
  ); /* Soft gradient background */
  padding: 80px 0;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.testimonials h2 {
  font-size: 40px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
}

/* Swiper Container Styling */
.testimonials-swiper {
  width: 100%;
  max-width: 950px;
  margin: 0 auto;
}

/* Testimonial Card Styling */
.testimonial-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 800px;
  min-height: 220px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 2fr 1fr 1fr; /* Rows for text, divider, and name */
  margin-top: 50px;
  margin-bottom: 50px;
  transform: translateY(10px); /* Initial position for floating effect */
}

.testimonial-card:hover {
  transform: translateY(0); /* Floating effect on hover */
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

/* Quotation Marks Styling */
.quote-icon {
  font-size: 60px;
  color: rgba(0, 123, 255, 0.1);
  position: absolute;
  top: -20px;
  left: -30px;
  font-weight: bold;
}

.quote-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1 / span 2;
}

/* Blockquote Styling */
blockquote {
  font-size: 20px;
  font-weight: 300;
  color: #333;
  font-style: italic;
  line-height: 1.5;
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Stylish Gradient Divider */
.gradient-divider {
  width: 70px;
  height: 4px;
  margin: 20px auto;
  background: linear-gradient(to right, #007bff, #00c6ff); /* Gradient line */
  border-radius: 2px;
  z-index: 1;
}

/* Client Name Styling */
.client-name {
  font-size: 18px;
  font-weight: 500;
  color: #007bff;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 3px rgba(0, 123, 255, 0.3); /* Subtle shadow for depth */
  grid-row: 4; /* Client name at the bottom */
}

/* Floating effect on card appearance */
.testimonial-card[data-aos="fade-up"] {
  transform: translateY(0); /* Animate into view */
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 20px;
    max-width: 100%;
    min-height: 200px;
  }

  .testimonials h2 {
    font-size: 34px;
  }

  blockquote {
    font-size: 18px;
  }

  .client-name {
    font-size: 16px;
  }
}
</style>
