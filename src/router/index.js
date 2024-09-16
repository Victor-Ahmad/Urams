import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ServicesPage from "../views/ServicesPage.vue";
import ProcessPage from "../views/ProcessPage.vue";
import GalleryPage from "../views/GalleryPage.vue";
import ContactPage from "../views/ContactPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/about", component: AboutPage },
  { path: "/services", component: ServicesPage },
  { path: "/process", component: ProcessPage },
  { path: "/gallery", component: GalleryPage },
  { path: "/contact", component: ContactPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
