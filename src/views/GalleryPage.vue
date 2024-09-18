<template>
  <section class="gallery-page">
    <!-- Hero Section -->
    <div class="hero">
      <div class="hero-overlay">
        <h1>Our Work</h1>
        <p>
          Explore some of our completed projects and see the quality of our
          work.
        </p>
      </div>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid">
      <div
        v-for="(item, index) in gallery"
        :key="index"
        class="gallery-item"
        @click="openModal(item)"
      >
        <div class="gallery-image-wrapper">
          <img
            :src="item.image"
            :alt="'Project ' + (index + 1)"
            loading="lazy"
          />
        </div>
        <div class="overlay">
          <p>{{ "Project " + (index + 1) }}</p>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal Teleported to Body -->
    <teleport to="body">
      <div v-if="selectedImage" class="modal">
        <div class="modal-content">
          <img
            :src="selectedImage.image"
            :alt="'Project ' + selectedImageIndex"
            class="modal-image"
          />
          <span class="close-icon" @click="closeModal">&times;</span>
        </div>
      </div>
    </teleport>
  </section>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      selectedImage: null,
      selectedImageIndex: null,
      gallery: Array.from({ length: 20 }, (v, k) => ({
        image: require(`@/assets/images/gallery/${k + 1}.jpeg`),
      })),
    };
  },
  methods: {
    openModal(item) {
      this.selectedImage = item;
      this.selectedImageIndex = this.gallery.indexOf(item) + 1;
      // Disable scrolling when modal is open
      document.body.style.overflow = "hidden";
    },
    closeModal() {
      this.selectedImage = null;
      this.selectedImageIndex = null;
      // Enable scrolling when modal is closed
      document.body.style.overflow = "";
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.gallery-page {
  color: #333;
  font-family: "Arial", sans-serif;
  padding-bottom: 60px;
  position: relative;
  z-index: 1; /* Ensures page content is below the modal */
}

/* Hero Section */
.hero {
  background-image: url("@/assets/images/leading/our_work.jpg");
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
}

.hero p {
  font-size: 20px;
  font-weight: 300;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 40px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 15px; /* Rounded corners for gallery items */
}

.gallery-item .gallery-image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image covers the entire project space */
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

/* Lightbox Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9); /* Transparent dark background */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; /* Ensure the modal is above all other elements */
}

.modal-content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ensure the modal takes full screen height */
  padding: 20px;
}

.modal-image {
  max-height: 100%; /* Adjust the image to fit within the screen height */
  max-width: 100%;
  object-fit: contain;
  border-radius: 20px; /* Rounded corners for the modal image */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

/* Close Icon Styling */
.close-icon {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-icon:hover {
  color: #f00;
}

/* Keyframes for Modal Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 36px;
  }

  .hero p {
    font-size: 16px;
  }
}
</style>
