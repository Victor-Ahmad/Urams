<template>
  <section class="testimonials">
    <div class="container">
      <!-- Testimonials Heading -->
      <h2>What Our Clients Say</h2>

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
          <div class="testimonial-card">
            <img
              :src="testimonial.image"
              alt="Client Photo"
              class="client-photo"
            />
            <blockquote>"{{ testimonial.quote }}"</blockquote>
            <p class="client-name">- {{ testimonial.name }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"; // Import Swiper and SwiperSlide
import { Autoplay } from "swiper/modules"; // Only Autoplay module now
import "swiper/swiper-bundle.css"; // Import Swiper CSS

export default {
  name: "ClientTestimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperModules: [Autoplay], // Removed Navigation module
      testimonials: [
        {
          image: "https://via.placeholder.com/150",
          quote:
            "Urams transformed my bathroom into a masterpiece! The attention to detail was incredible.",
          name: "Emily Johnson",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "We couldn’t have asked for a better renovation. The team was professional and the results stunning.",
          name: "Chris Lee",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "Excellent service from start to finish. The whole process was smooth, and the quality of work was exceptional!",
          name: "Olivia Smith",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "The best renovation company we have worked with! Our bathroom looks amazing!",
          name: "Michael Williams",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "Urams exceeded our expectations. Everything was done with precision and care.",
          name: "Sophia Brown",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "The team worked efficiently and professionally. The end result is exactly what we wanted.",
          name: "Lucas Davis",
        },
        {
          image: "https://via.placeholder.com/150",
          quote:
            "The craftsmanship and quality of work were top-notch. Highly recommend Urams for any renovation!",
          name: "Ella Martinez",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Testimonials Section Styling */
.testimonials {
  background-color: #f0f0f0; /* Light gray background */
  padding: 80px 0;
  text-align: center;
  color: #333; /* Darker text for readability */
}

.testimonials h2 {
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 50px;
  color: #333333;
}

/* Swiper Container Styling */
.testimonials-swiper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

/* Testimonial Card Styling */
.testimonial-card {
  background-color: #ffffff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Client Photo Styling */
.client-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  border: 3px solid #007bff;
}

/* Blockquote Styling */
blockquote {
  font-size: 18px;
  color: #333333;
  font-style: italic;
  margin-bottom: 20px;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 20px auto;
}

/* Client Name Styling */
.client-name {
  font-size: 16px;
  font-weight: bold;
  color: #007bff;
}
</style>
