<template>
  <section class="process-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>Our Process</h1>
        <p>How we ensure a perfect bathroom renovation</p>
      </div>
    </div>

    <!-- Vertical Roadmap Section -->
    <div class="container roadmap">
      <h2>Our Step-by-Step Process</h2>
      <div class="timeline">
        <!-- Roadmap Step -->
        <div
          class="timeline-step"
          v-for="(step, index) in steps"
          :key="index"
          :class="['timeline-step', index % 2 === 0 ? 'left' : 'right']"
        >
          <!-- Step Content -->
          <div class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="icon">
              <img :src="step.icon" :alt="step.title" />
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <!-- Vertical Dotted Line and Dots -->
          <div class="line-connector">
            <div class="dot"></div>
            <div v-if="index < steps.length - 1" class="dotted-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProcessPage",
  data() {
    return {
      steps: [
        {
          title: "Free Consultation",
          description: "Discuss your needs and expectations with our experts.",
          icon: "https://via.placeholder.com/100", // Replace with actual icon URL
        },
        {
          title: "Site Visit",
          description:
            "We visit your location to assess the space, equipment, and work required.",
          icon: "https://via.placeholder.com/100", // Replace with actual icon URL
        },
        {
          title: "Quotation & Planning",
          description:
            "Receive a detailed quote and plan outlining all steps and timelines.",
          icon: "https://via.placeholder.com/100", // Replace with actual icon URL
        },
        {
          title: "Approval",
          description: "Review and approve the plan and quotation.",
          icon: "https://via.placeholder.com/100", // Replace with actual icon URL
        },
        {
          title: "Installation & Delivery",
          description:
            "Our team executes the project, delivering a fully renovated bathroom.",
          icon: "https://via.placeholder.com/100", // Replace with actual icon URL
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Process Page Styling */
.process-page {
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

/* Roadmap Section */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.roadmap h2 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #007bff;
}

/* Timeline Styling */
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
}

.timeline-step {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
}

.timeline-step.left .step-card {
  margin-right: auto;
}

.timeline-step.right .step-card {
  margin-left: auto;
}

/* Step Card Styling */
.step-card {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.step-number {
  background-color: #007bff;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 15px;
}

.step-card h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
}

.step-card p {
  font-size: 16px;
  color: #555;
}

.icon {
  margin-bottom: 20px;
}

.icon img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

/* Dotted Line and Dots */
.line-connector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dot {
  background-color: #007bff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-bottom: 15px;
}

.dotted-line {
  width: 2px;
  height: 60px;
  background-color: transparent;
  border-left: 2px dashed #007bff;
}

/* Responsive Design */
@media (max-width: 768px) {
  .timeline-step.left,
  .timeline-step.right {
    flex-direction: column;
    align-items: center;
  }

  .step-card {
    max-width: 90%;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
