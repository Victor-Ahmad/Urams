<template>
  <div>
    <HeroSection />
    <ServiceOverview />
    <ProcessSteps />
    <ClientTestimonials />
    <CTASection />
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import ServiceOverview from "@/components/ServiceOverview.vue";
import ProcessSteps from "@/components/ProcessSteps.vue";
import ClientTestimonials from "@/components/ClientTestimonials.vue";
import CTASection from "@/components/CTASection.vue";

export default {
  components: {
    HeroSection,
    ServiceOverview,
    ProcessSteps,
    ClientTestimonials,
    CTASection,
  },
};
</script>
