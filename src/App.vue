<template>
  <div id="app">
    <!-- App Header -->
    <AppHeader />

    <!-- Main Content -->
    <router-view />

    <!-- App Footer -->
    <AppFooter />
  </div>
</template>

<script>
// Import the AppHeader and AppFooter components
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
/* Global styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
