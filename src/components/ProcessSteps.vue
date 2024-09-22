<template>
  <section class="process-stairs">
    <!-- Floating Colorful Bubbles Background -->
    <div class="bubbles">
      <div
        v-for="n in 10"
        :key="'bubble-' + n"
        :class="['bubble', 'bubble-' + n]"
      ></div>
    </div>

    <div class="container">
      <!-- Process Heading -->
      <h2 data-aos="fade-up">{{ $t("processSteps.heading") }}</h2>
      <p class="subheading" data-aos="fade-up" data-aos-delay="100">
        {{ $t("processSteps.subheading") }}
      </p>

      <!-- Stairs Layout -->
      <div class="stairs-grid">
        <div
          class="stair-step"
          v-for="(step, index) in steps"
          :key="index"
          :class="'step-' + (index + 1)"
          data-aos="fade-up"
          :data-aos-delay="index * 150"
        >
          <div class="step-content">
            <div class="step-icon-wrapper">
              <img :src="step.icon" alt="Step Icon" class="step-icon" />
            </div>
            <div class="step-text">
              <h3>{{ $t(`processSteps.steps.${index + 1}.title`) }}</h3>
              <p>{{ $t(`processSteps.steps.${index + 1}.description`) }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="gallery-redirect-section" data-aos="zoom-in">
        <div class="gallery-redirect">
          <router-link to="/gallery" class="gallery-button">
            {{ $t("galleryRedirect.title") }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

// Import step icons
import step1Icon from "@/assets/images/steps/step_1.png";
import step2Icon from "@/assets/images/steps/step_2.png";
import step3Icon from "@/assets/images/steps/step_3.png";
import step4Icon from "@/assets/images/steps/step_4.png";
import step5Icon from "@/assets/images/steps/step_5.png";

export default {
  name: "ProcessSteps",
  mounted() {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  },
  data() {
    return {
      steps: [
        {
          icon: step1Icon,
          title: this.$t("processSteps.steps.1.title"),
          description: this.$t("processSteps.steps.1.description"),
        },
        {
          icon: step2Icon,
          title: this.$t("processSteps.steps.2.title"),
          description: this.$t("processSteps.steps.2.description"),
        },
        {
          icon: step3Icon,
          title: this.$t("processSteps.steps.3.title"),
          description: this.$t("processSteps.steps.3.description"),
        },
        {
          icon: step4Icon,
          title: this.$t("processSteps.steps.4.title"),
          description: this.$t("processSteps.steps.4.description"),
        },
        {
          icon: step5Icon,
          title: this.$t("processSteps.steps.5.title"),
          description: this.$t("processSteps.steps.5.description"),
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Import Font */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

.gallery-redirect-section {
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Gallery Redirect Styling */
.gallery-redirect {
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-button {
  background: linear-gradient(
    135deg,
    #ff9a8b,
    #fecf6d,
    #ff7e5f
  ); /* Vibrant gradient */
  color: white;
  padding: 20px 40px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background-size: 200% 200%; /* Animate gradient */
  animation: gradientPulse 5s ease infinite; /* Background pulse */
}

.gallery-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* Hover effect */
}

/* Gradient animation pulse */
@keyframes gradientPulse {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Responsive Styling */
@media (max-width: 768px) {
  .gallery-button {
    font-size: 18px;
    padding: 15px 30px;
  }

  .gallery-redirect-section {
    padding: 40px 10px;
    margin: 20px auto;
  }
}

/* Process Section Styles */
.process-stairs {
  padding: 100px 0;
  background: linear-gradient(-45deg, #b3e5fc, #b2fab4, #b3e5fc, #add8e6);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  text-align: center;
  position: relative;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
}

/* Adjusted z-index to ensure bubbles are visible */
.process-stairs .container {
  position: relative;
  z-index: 2; /* Bring content above bubbles */
}

/* Animated Gradient Background */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Floating Colorful Bubbles */
.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1; /* Place behind content but above background */
  pointer-events: none; /* Prevent interaction */
}

.bubble {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.375); /* Adjusted alpha */
  border-radius: 50%;
  animation: moveBubble linear infinite;
  opacity: 0.375; /* Adjusted opacity */
}

/* Remove shadows/glow */
.bubble::before {
  display: none;
}

/* Generate multiple bubbles with different properties */
/* Bubbles with higher chance at top right */
.bubble-1 {
  width: 250px;
  height: 250px;
  top: 5%;
  left: 75%;
  animation-duration: 20s;
  animation-delay: -2s;
  background-color: rgba(255, 69, 0, 0.375); /* Orange Red */
}

.bubble-2 {
  width: 220px;
  height: 220px;
  top: 15%;
  left: 80%;
  animation-duration: 24s;
  animation-delay: -4s;
  background-color: rgba(75, 0, 130, 0.375); /* Indigo */
}

.bubble-3 {
  width: 270px;
  height: 270px;
  top: 10%;
  left: 65%;
  animation-duration: 20s;
  animation-delay: -6s;
  background-color: rgba(255, 165, 0, 0.375); /* Orange */
}

.bubble-4 {
  width: 240px;
  height: 240px;
  top: 20%;
  left: 85%;
  animation-duration: 16s;
  animation-delay: -8s;
  background-color: rgba(0, 0, 255, 0.375); /* Blue */
}

/* Bubbles with higher chance at bottom left */
.bubble-5 {
  width: 260px;
  height: 260px;
  top: 70%;
  left: 5%;
  animation-duration: 20s;
  animation-delay: -10s;
  background-color: rgba(255, 0, 0, 0.375); /* Red */
}

.bubble-6 {
  width: 280px;
  height: 280px;
  top: 80%;
  left: 10%;
  animation-duration: 24s;
  animation-delay: -12s;
  background-color: rgba(0, 128, 0, 0.375); /* Green */
}

.bubble-7 {
  width: 230px;
  height: 230px;
  top: 75%;
  left: 15%;
  animation-duration: 20s;
  animation-delay: -3s;
  background-color: rgba(128, 0, 128, 0.375); /* Purple */
}

.bubble-8 {
  width: 250px;
  height: 250px;
  top: 85%;
  left: 5%;
  animation-duration: 16s;
  animation-delay: -5s;
  background-color: rgba(255, 192, 203, 0.375); /* Pink */
}

/* Remaining bubbles with random positions */
.bubble-9 {
  width: 240px;
  height: 240px;
  top: 30%;
  left: 50%;
  animation-duration: 20s;
  animation-delay: -7s;
  background-color: rgba(255, 255, 0, 0.375); /* Yellow */
}

.bubble-10 {
  width: 300px;
  height: 300px;
  top: 60%;
  left: 40%;
  animation-duration: 24s;
  animation-delay: -9s;
  background-color: rgba(0, 255, 255, 0.375); /* Cyan */
}

/* Additional bubbles with a mix of positions */
.bubble-11 {
  width: 260px;
  height: 260px;
  top: 40%;
  left: 20%;
  animation-duration: 22s;
  animation-delay: -11s;
  background-color: rgba(255, 105, 180, 0.375); /* Hot Pink */
}

.bubble-12 {
  width: 240px;
  height: 240px;
  top: 25%;
  left: 60%;
  animation-duration: 18s;
  animation-delay: -13s;
  background-color: rgba(173, 216, 230, 0.375); /* Light Blue */
}

.bubble-13 {
  width: 250px;
  height: 250px;
  top: 55%;
  left: 70%;
  animation-duration: 20s;
  animation-delay: -15s;
  background-color: rgba(60, 179, 113, 0.375); /* Medium Sea Green */
}

.bubble-14 {
  width: 270px;
  height: 270px;
  top: 35%;
  left: 10%;
  animation-duration: 22s;
  animation-delay: -17s;
  background-color: rgba(255, 140, 0, 0.375); /* Dark Orange */
}

.bubble-15 {
  width: 280px;
  height: 280px;
  top: 65%;
  left: 85%;
  animation-duration: 24s;
  animation-delay: -19s;
  background-color: rgba(70, 130, 180, 0.375); /* Steel Blue */
}

.bubble-16 {
  width: 230px;
  height: 230px;
  top: 50%;
  left: 30%;
  animation-duration: 20s;
  animation-delay: -21s;
  background-color: rgba(199, 21, 133, 0.375); /* Medium Violet Red */
}

.bubble-17 {
  width: 260px;
  height: 260px;
  top: 15%;
  left: 25%;
  animation-duration: 18s;
  animation-delay: -23s;
  background-color: rgba(34, 139, 34, 0.375); /* Forest Green */
}

.bubble-18 {
  width: 250px;
  height: 250px;
  top: 80%;
  left: 60%;
  animation-duration: 20s;
  animation-delay: -25s;
  background-color: rgba(220, 20, 60, 0.375); /* Crimson */
}

.bubble-19 {
  width: 240px;
  height: 240px;
  top: 45%;
  left: 80%;
  animation-duration: 22s;
  animation-delay: -27s;
  background-color: rgba(0, 191, 255, 0.375); /* Deep Sky Blue */
}

.bubble-20 {
  width: 270px;
  height: 270px;
  top: 70%;
  left: 50%;
  animation-duration: 24s;
  animation-delay: -29s;
  background-color: rgba(154, 205, 50, 0.375); /* Yellow Green */
}

.bubble-21 {
  width: 280px;
  height: 280px;
  top: 25%;
  left: 15%;
  animation-duration: 20s;
  animation-delay: -31s;
  background-color: rgba(138, 43, 226, 0.375); /* Blue Violet */
}

.bubble-22 {
  width: 230px;
  height: 230px;
  top: 65%;
  left: 35%;
  animation-duration: 18s;
  animation-delay: -33s;
  background-color: rgba(210, 105, 30, 0.375); /* Chocolate */
}

/* Keyframes for bubbles moving in random directions with fade-in and fade-out */
@keyframes moveBubble {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0;
  }
  20% {
    opacity: 0.375; /* Fade in to adjusted opacity */
  }
  80% {
    opacity: 0.375; /* Maintain adjusted opacity */
  }
  100% {
    transform: translate(150px, -600px) scale(1.4);
    opacity: 0; /* Fade out to fully transparent */
  }
}

.process-stairs h2 {
  font-size: 48px;
  font-weight: bold;
  color: #333333; /* Dark gray */
  margin-bottom: 30px;
}

.subheading {
  font-size: 20px;
  color: #666666; /* Medium gray */
  margin-bottom: 60px;
}

/* Stairs Grid Layout */
.stairs-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, auto);
  row-gap: 50px;
  padding: 0 20px;
  position: relative;
}

.stairs-grid .stair-step {
  position: relative;
  z-index: 2; /* Ensure steps are above bubbles */
}

/* Step Box Styling */
.stair-step {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

/* Remove the line between steps */
.stair-step::after {
  display: none;
}

/* Remove Hover Effect */
.stair-step:hover {
  /* No hover effect */
}

/* Positioning the steps to create a staircase effect */
.step-1 {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.step-2 {
  grid-column: 2 / span 2;
  grid-row: 2;
}

.step-3 {
  grid-column: 3 / span 2;
  grid-row: 3;
}

.step-4 {
  grid-column: 4 / span 2;
  grid-row: 4;
}

.step-5 {
  grid-column: 5 / span 2;
  grid-row: 5;
}

.step-content {
  display: flex;
  align-items: center;
}

.step-icon-wrapper {
  background: linear-gradient(145deg, #00aaff, #0077cc);
  padding: 15px;
  border-radius: 50%;
  margin-right: 20px;
}

.step-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.step-text {
  max-width: 400px;
  text-align: left;
}

.step-text h3 {
  font-size: 24px;
  font-weight: bold;
  color: #333333; /* Dark gray */
  margin-bottom: 10px;
}

.step-text p {
  font-size: 16px;
  color: #666666; /* Medium gray */
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .stairs-grid {
    grid-template-columns: 1fr;
    row-gap: 30px;
  }

  .stair-step {
    grid-column: span 1;
    max-width: 100%;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .process-stairs h2 {
    font-size: 36px;
  }

  .subheading {
    font-size: 18px;
  }

  .step-text h3 {
    font-size: 20px;
  }

  .step-text p {
    font-size: 14px;
  }
  .stair-step {
    max-width: 80%;
  }
}
</style>
