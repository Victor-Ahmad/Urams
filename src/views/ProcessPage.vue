<template>
  <section class="process-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1 data-aos="fade-down">Our Process</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          How we ensure a perfect bathroom renovation
        </p>
      </div>
    </div>

    <!-- Steps in Custom Pattern -->
    <div class="container steps-section">
      <h2 data-aos="fade-up">Our Step-by-Step Process</h2>
      <div class="steps-container">
        <!-- Row 1 -->
        <div class="step-row">
          <div
            v-for="(slot, index) in rowLength"
            :key="'row1-' + index"
            class="step-slot"
          >
            <div v-if="row1[index]" class="step" data-aos="fade-up">
              <div class="step-content">
                <div class="step-icon">
                  <img :src="row1[index].icon" :alt="row1[index].title" />
                </div>
                <div class="step-number">{{ row1[index].number }}</div>
                <h3>{{ row1[index].title }}</h3>
                <p>{{ row1[index].description }}</p>
              </div>
            </div>
            <div v-else class="empty-slot"></div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="step-row">
          <div
            v-for="(slot, index) in rowLength"
            :key="'row2-' + index"
            class="step-slot"
          >
            <div v-if="row2[index]" class="step" data-aos="fade-up">
              <div class="step-content">
                <div class="step-icon">
                  <img :src="row2[index].icon" :alt="row2[index].title" />
                </div>
                <div class="step-number">{{ row2[index].number }}</div>
                <h3>{{ row2[index].title }}</h3>
                <p>{{ row2[index].description }}</p>
              </div>
            </div>
            <div v-else class="empty-slot"></div>
          </div>
        </div>

        <!-- Arrows -->
        <div class="arrows">
          <div
            v-for="(arrow, index) in arrows"
            :key="'arrow-' + index"
            :class="['arrow', arrow.class]"
            :style="getArrowStyle(index)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* General Page Styling */
.process-page {
  color: #333;
  font-family: "Helvetica Neue", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("@/assets/images/leading/our_process.jpg");
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
  background-color: rgba(0, 0, 0, 0.6);
  padding: 50px;
  text-align: center;
  color: white;
  width: 100%;
}

.hero h1 {
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
}

.hero p {
  font-size: 22px;
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto;
}

/* Steps Section */
.steps-section {
  padding: 80px 20px;
}

.steps-section h2 {
  font-size: 40px;
  text-align: center;
  margin-bottom: 60px;
  color: #007bff;
}

.steps-container {
  position: relative;
}

.step-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
}

.step-slot {
  width: 18%;
  position: relative;
}

.step {
  text-align: center;
}

.step-content {
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-content:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
}

.step-icon img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
}

.step-number {
  background-color: #007bff;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  margin: 0 auto 20px;
}

.step h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.step p {
  font-size: 16px;
  color: #555;
}

/* Empty Slot */
.empty-slot {
  height: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .step-row {
    flex-direction: column;
    align-items: center;
  }

  .step-slot {
    width: 100%;
    margin-bottom: 40px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero p {
    font-size: 18px;
  }

  .steps-section h2 {
    font-size: 36px;
  }

  .step-content {
    padding: 20px;
  }

  .step-number {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  .step-icon img {
    width: 70px;
    height: 70px;
  }

  .step h3 {
    font-size: 22px;
  }

  .step p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }

  .steps-section h2 {
    font-size: 32px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }

  .step-icon img {
    width: 60px;
    height: 60px;
  }

  .step h3 {
    font-size: 20px;
  }

  .step p {
    font-size: 12px;
  }
}
</style>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

import step1 from "@/assets/images/steps/step_1.png";
import step2 from "@/assets/images/steps/step_2.png";
import step3 from "@/assets/images/steps/step_3.png";
import step4 from "@/assets/images/steps/step_4.png";
import step5 from "@/assets/images/steps/step_5.png";

export default {
  name: "ProcessPage",
  mounted() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  },
  data() {
    return {
      steps: [
        {
          number: 1,
          icon: step1,
          title: "Free Consultation",
          description: "Discuss your needs and expectations with our experts.",
        },
        {
          number: 2,
          icon: step2,
          title: "Site Visit",
          description:
            "We visit your location to assess the space, equipment, and work required.",
        },
        {
          number: 3,
          icon: step3,
          title: "Quotation & Planning",
          description:
            "Receive a detailed quote and plan outlining all steps and timelines.",
        },
        {
          number: 4,
          icon: step4,
          title: "Approval",
          description: "Review and approve the plan and quotation.",
        },
        {
          number: 5,
          icon: step5,
          title: "Installation & Delivery",
          description:
            "Our team executes the project, delivering a fully renovated bathroom.",
        },
      ],
    };
  },
  computed: {
    rowLength() {
      return 5;
    },
    row1() {
      const row = new Array(this.rowLength).fill(null);
      this.steps.forEach((step) => {
        if (step.number % 2 === 1) {
          const position = step.number - 1;
          row[position] = step;
        }
      });
      return row;
    },
    row2() {
      const row = new Array(this.rowLength).fill(null);
      this.steps.forEach((step) => {
        if (step.number % 2 === 0) {
          const position = step.number - 1;
          row[position] = step;
        }
      });
      return row;
    },
  },
};
</script>
