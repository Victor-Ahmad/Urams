import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n"; // Import the i18n configuration
import "./assets/styles.css"; // Import global CSS here

// Create the Vue app and use both the router and i18n
const app = createApp(App);

app.use(router);
app.use(i18n); // Add i18n to the app

app.mount("#app");
