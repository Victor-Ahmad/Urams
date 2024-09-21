<template>
  <div class="language-switcher">
    <select v-model="currentLanguage" @change="switchLanguage">
      <option v-for="(label, code) in languages" :key="code" :value="code">
        {{ label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return {
      currentLanguage: "", // Bind the selected language
      languages: {
        en: "English",
        nl: "Dutch",
      },
    };
  },
  mounted() {
    // Load the language from localStorage if available, or use the default locale
    this.currentLanguage = localStorage.getItem("lang") || this.$i18n.locale;
  },
  methods: {
    switchLanguage() {
      // Update the i18n locale
      this.$i18n.locale = this.currentLanguage;
      // Save the selected language to localStorage
      localStorage.setItem("lang", this.currentLanguage);
    },
  },
};
</script>

<style scoped>
.language-switcher select {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
}
</style>
