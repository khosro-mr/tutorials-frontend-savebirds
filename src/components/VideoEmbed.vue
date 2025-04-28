<!-- eslint-disable -->
<template>
  <div class="video-container">
    <div class="thumbnail-container">
      <img :src="thumbnailUrl" alt="Video thumbnail" class="video-thumbnail" :title="title" @error="handleImageError">
      <div class="play-button">
        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
          <path class="play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
          <path d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>
      </div>
    </div>
    <h5 class="mt-2">{{ title }}</h5>
  </div>
</template>

<script>
export default {
  name: 'VideoEmbed',
  props: {
    youtubeId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      thumbnailQuality: 'mqdefault' // medium quality by default
    }
  },
  computed: {
    embedUrl() {
      return `https://www.youtube.com/embed/${this.youtubeId}?rel=0&controls=1`;
    },
    thumbnailUrl() {
      return `https://i.ytimg.com/vi/${this.youtubeId}/${this.thumbnailQuality}.jpg`;
    }
  },
  methods: {
    handleImageError() {
      // If the higher quality image fails, try the default quality
      if (this.thumbnailQuality === 'maxresdefault') {
        this.thumbnailQuality = 'mqdefault';
      } else if (this.thumbnailQuality === 'mqdefault') {
        this.thumbnailQuality = 'default';
      }
    }
  },
  mounted() {
    // Try to load high quality image first
    const img = new Image();
    img.src = `https://i.ytimg.com/vi/${this.youtubeId}/maxresdefault.jpg`;
    img.onload = () => {
      // If it loads successfully, use high quality
      if (img.width > 120) {
        this.thumbnailQuality = 'maxresdefault';
      }
    };
  }
}
</script>

<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: #000;
}

.video-container:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.thumbnail-container {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 8px;
  background-color: #000;
}

.video-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 68px;
  height: 48px;
  z-index: 1;
  opacity: 0.9;
  transition: opacity 0.3s;
}

.video-container:hover .play-button {
  opacity: 1;
}
</style> 