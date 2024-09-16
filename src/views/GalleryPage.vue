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

    <!-- Filter Options -->
    <div class="filter-options">
      <button
        @click="filterGallery('all')"
        :class="{ active: selectedFilter === 'all' }"
      >
        All
      </button>
      <button
        @click="filterGallery('tiling')"
        :class="{ active: selectedFilter === 'tiling' }"
      >
        Tiling
      </button>
      <button
        @click="filterGallery('plumbing')"
        :class="{ active: selectedFilter === 'plumbing' }"
      >
        Plumbing
      </button>
      <button
        @click="filterGallery('full-renovation')"
        :class="{ active: selectedFilter === 'full-renovation' }"
      >
        Full Renovation
      </button>
    </div>

    <!-- Gallery Grid -->
    <div class="gallery-grid">
      <div
        v-for="(item, index) in filteredGallery"
        :key="index"
        class="gallery-item"
        @click="openModal(item)"
      >
        <img :src="item.image" :alt="item.description" loading="lazy" />
        <div class="overlay">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div v-if="selectedImage" class="modal" @click="closeModal">
      <img
        :src="selectedImage.image"
        :alt="selectedImage.description"
        class="modal-image"
      />
      <p class="modal-description">{{ selectedImage.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "GalleryPage",
  data() {
    return {
      selectedFilter: "all",
      selectedImage: null,
      gallery: [
        {
          image: "https://via.placeholder.com/400",
          category: "tiling",
          description: "Tiling Project 1",
        },
        {
          image: "https://via.placeholder.com/400",
          category: "plumbing",
          description: "Plumbing Project 1",
        },
        {
          image: "https://via.placeholder.com/400",
          category: "full-renovation",
          description: "Full Renovation Project 1",
        },
        {
          image: "https://via.placeholder.com/400",
          category: "tiling",
          description: "Tiling Project 2",
        },
        {
          image: "https://via.placeholder.com/400",
          category: "plumbing",
          description: "Plumbing Project 2",
        },
        {
          image: "https://via.placeholder.com/400",
          category: "full-renovation",
          description: "Full Renovation Project 2",
        },
      ],
    };
  },
  computed: {
    filteredGallery() {
      if (this.selectedFilter === "all") {
        return this.gallery;
      }
      return this.gallery.filter(
        (item) => item.category === this.selectedFilter
      );
    },
  },
  methods: {
    filterGallery(filter) {
      this.selectedFilter = filter;
    },
    openModal(item) {
      this.selectedImage = item;
    },
    closeModal() {
      this.selectedImage = null;
    },
  },
};
</script>

<style scoped>
/* General Page Styling */
.gallery-page {
  color: #333;
  font-family: "Arial", sans-serif;
}

/* Hero Section */
.hero {
  background-image: url("https://via.placeholder.com/1920x600"); /* Replace with actual hero image */
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
}

/* Filter Options */
.filter-options {
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 20px;
}

.filter-options button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.filter-options button.active {
  background-color: #0056b3;
}

/* Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: auto;
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
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.modal-image {
  max-width: 80%;
  max-height: 80%;
}

.modal-description {
  color: white;
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
