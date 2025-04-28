<!-- eslint-disable -->
<template>
  <div class="container my-5">
    <!-- Title Section -->
    <section class="mb-5">
      <h1 class="display-4 text-center fw-bold">Tutorials</h1>
    </section>

    <!-- Video Grid -->
    <section class="mb-5">
      <!-- First Row of Videos -->
      <div class="row mb-5">
        <div v-for="tutorial in topRowTutorials" :key="tutorial.id" class="col-md-4 mb-4">
          <a :href="tutorial.url" target="_blank" rel="noopener noreferrer" class="video-link">
            <VideoEmbed :youtubeId="tutorial.youtubeId" :title="tutorial.title" />
          </a>
        </div>
      </div>
      
      <!-- Second Row of Videos -->
      <div class="row">
        <div class="col-md-4 mb-4">
          <a href="https://youtu.be/huDsVljsZIc" target="_blank" rel="noopener noreferrer" class="video-link">
            <div class="video-title">Bird Atlas Generator| SaveBirds.app</div>
            <div class="video-wrapper">
              <img src="https://i.ytimg.com/vi/huDsVljsZIc/mqdefault.jpg" alt="Bird Atlas Generator" class="video-thumb">
              <div class="play-overlay">
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                  <path class="play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        
        <div class="col-md-4 mb-4">
          <a href="https://youtu.be/fKw_LcyKndM" target="_blank" rel="noopener noreferrer" class="video-link">
            <div class="video-title">GitHub| SaveBirds.app</div>
            <div class="video-wrapper">
              <img src="https://i.ytimg.com/vi/fKw_LcyKndM/mqdefault.jpg" alt="GitHub" class="video-thumb">
              <div class="play-overlay">
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                  <path class="play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
        
        <div class="col-md-4 mb-4">
          <a href="https://youtu.be/iC3IGFMPpxU" target="_blank" rel="noopener noreferrer" class="video-link">
            <div class="video-title">Atlas Visualization| SaveBirds.app</div>
            <div class="video-wrapper">
              <img src="https://i.ytimg.com/vi/iC3IGFMPpxU/mqdefault.jpg" alt="Atlas Visualization" class="video-thumb">
              <div class="play-overlay">
                <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                  <path class="play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#f00"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Reference Table - Hidden from UI but used for data reference -->
    <section v-if="false">
      <h2 class="h3 mb-4">All Tutorials</h2>
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="table-light">
            <tr>
              <th>#</th>
              <th>Position</th>
              <th>Title</th>
              <th>YouTube URL</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tutorial in tutorials" :key="tutorial.id">
              <td>{{ tutorial.id }}</td>
              <td>{{ tutorial.position }}</td>
              <td>{{ tutorial.title }}</td>
              <td>
                <a :href="tutorial.url" target="_blank" rel="noopener noreferrer">
                  {{ tutorial.url }}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import VideoEmbed from '@/components/VideoEmbed.vue'

export default {
  name: 'TutorialsView',
  components: {
    VideoEmbed
  },
  data() {
    return {
      tutorials: [
        {
          id: 1,
          position: "Top Left",
          title: "Home page| SaveBirds.app",
          youtubeId: "IFbb-o4_POg",
          url: "https://youtu.be/IFbb-o4_POg"
        },
        {
          id: 2,
          position: "Top Center",
          title: "Metrics| SaveBirds.app",
          youtubeId: "hHcHOo5oYXc",
          url: "https://youtu.be/hHcHOo5oYXc"
        },
        {
          id: 3,
          position: "Top Right",
          title: "Presence-Absence Data| SaveBirds.app",
          youtubeId: "tn3nFSa2GEU",
          url: "https://youtu.be/tn3nFSa2GEU"
        },
        {
          id: 4,
          position: "Bottom Left",
          title: "Bird Atlas Generator| SaveBirds.app",
          youtubeId: "huDsVljsZIc",
          url: "https://youtu.be/huDsVljsZIc"
        },
        {
          id: 5,
          position: "Bottom Center",
          title: "GitHub| SaveBirds.app",
          youtubeId: "fKw_LcyKndM",
          url: "https://youtu.be/fKw_LcyKndM"
        },
        {
          id: 6,
          position: "Bottom Right",
          title: "Atlas Visualization| SaveBirds.app",
          youtubeId: "iC3IGFMPpxU",
          url: "https://youtu.be/iC3IGFMPpxU"
        }
      ]
    }
  },
  computed: {
    topRowTutorials() {
      return this.tutorials.filter(tutorial => tutorial.id <= 3);
    },
    bottomRowTutorials() {
      return this.tutorials.filter(tutorial => tutorial.id > 3);
    }
  },
  mounted() {
    document.title = "Tutorials | SaveBirds.app";
  }
}
</script>

<style scoped>
/* Add any additional custom styles here */
table {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .display-4 {
    font-size: 2.5rem;
  }
}

.video-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.container {
  max-width: 1200px;
}

.display-4 {
  color: #3f4a59;
  margin-bottom: 2rem;
}

.video-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  border-radius: 8px;
  background-color: #000;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.video-wrapper:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.video-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
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

.video-wrapper:hover .play-overlay {
  opacity: 1;
}

.video-title {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #000;
  text-align: center;
}
</style> 