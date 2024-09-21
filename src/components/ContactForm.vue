<template>
  <form @submit.prevent="submitForm" class="bg-white p-8 shadow-lg">
    <div class="mb-6">
      <label for="name" class="block text-gray-700 font-semibold mb-2">
        {{ $t("contactForm.labels.name") }}
      </label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        class="w-full p-3 border rounded"
        required
      />
    </div>
    <div class="mb-6">
      <label for="email" class="block text-gray-700 font-semibold mb-2">
        {{ $t("contactForm.labels.email") }}
      </label>
      <input
        v-model="form.email"
        type="email"
        id="email"
        class="w-full p-3 border rounded"
        required
      />
    </div>
    <div class="mb-6">
      <label for="phone" class="block text-gray-700 font-semibold mb-2">
        {{ $t("contactForm.labels.phone") }}
      </label>
      <input
        v-model="form.phone"
        type="tel"
        id="phone"
        class="w-full p-3 border rounded"
        required
      />
    </div>
    <div class="mb-6">
      <label for="service" class="block text-gray-700 font-semibold mb-2">
        {{ $t("contactForm.labels.service") }}
      </label>
      <select
        v-model="form.service"
        id="service"
        class="w-full p-3 border rounded"
      >
        <option value="plumbing">
          {{ $t("contactForm.services.plumbing") }}
        </option>
        <option value="tiling">{{ $t("contactForm.services.tiling") }}</option>
        <option value="fullRenovation">
          {{ $t("contactForm.services.fullRenovation") }}
        </option>
        <!-- Add more options as needed -->
      </select>
    </div>
    <div class="mb-6">
      <label for="message" class="block text-gray-700 font-semibold mb-2">
        {{ $t("contactForm.labels.message") }}
      </label>
      <textarea
        v-model="form.message"
        id="message"
        class="w-full p-3 border rounded"
      ></textarea>
    </div>
    <button type="submit" class="bg-blue-600 text-white py-3 px-6 rounded-lg">
      {{ $t("contactForm.buttons.submit") }}
    </button>
  </form>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert(this.$t("contactForm.submitSuccess"));
      console.log(this.form);
    },
  },
};
</script>
