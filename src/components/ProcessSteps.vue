<template>
  <section class="process">
    <div class="container">
      <!-- Process Heading -->
      <h2>How It Works</h2>
      <p class="subheading">Our 5-Step Process to a Perfect Bathroom</p>

      <!-- Process Steps Grid -->
      <div class="steps-grid">
        <div class="step-box" v-for="(step, index) in steps" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProcessSteps",
  data() {
    return {
      steps: [
        {
          title: "Free Consultation",
          description: "Discuss your needs and expectations with our experts.",
        },
        {
          title: "Site Visit",
          description:
            "We visit your location to assess the space, equipment, and work required.",
        },
        {
          title: "Quotation & Planning",
          description:
            "Receive a detailed quote and plan outlining all steps and timelines.",
        },
        {
          title: "Approval",
          description: "Review and approve the plan and quotation.",
        },
        {
          title: "Installation & Delivery",
          description:
            "Our team executes the project, delivering a fully renovated bathroom.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Process Section Styling */
.process {
  background-color: #f0f4f8; /* Soft background to separate this section */
  padding: 60px 0;
  text-align: center;
}

.process h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subheading {
  font-size: 18px;
  color: #666;
  margin-bottom: 50px;
}

/* Steps Grid Layout */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  justify-items: center;
}

/* Step Box Styling */
.step-box {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

/* Hover Effect for Step Box */
.step-box:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Step Number Badge */
.step-number {
  background-color: #007bff;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto 20px auto;
}

/* Step Title */
.step-box h3 {
  font-size: 22px;
  margin-bottom: 10px;
  color: #333;
}

/* Step Description */
.step-box p {
  font-size: 16px;
  color: #666;
  line-height: 1.5;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .steps-grid {
    grid-template-columns: repeat(2, 1fr); /* Two columns on tablet */
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .steps-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
  }

  .step-box {
    padding: 20px;
  }
}
</style>
