import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles.css"; // Import global CSS here

createApp(App).use(router).mount("#app");
