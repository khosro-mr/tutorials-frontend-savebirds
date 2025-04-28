<h1 align="center">SaveBirds.app Tutorials Frontend</h1>

This project implements the Tutorials page for SaveBirds.app using Vue 3 and Bootstrap 5, showcasing educational videos about the application's features.

# 1. Project Structure

- `src/` - Source code directory
  - `App.vue` - Main application component
  - `main.js` - Application entry point
  - `assets/` - Static assets
  - `components/` - Reusable components
    - `VideoEmbed.vue` - YouTube video embed component
  - `views/` - Page components
    - `TutorialsView.vue` - Tutorials page implementation
  - `router/` - Vue Router configuration

# 2. Features

- Responsive video grid layout (2×3)
- YouTube video embeds with hover effects
- Reference table with all video links
- Bootstrap 5 styling for responsive design
- Lazy loading of video embeds

# 3. Setup Instructions

## 3.1. Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)

## 3.2. Installation

```bash
# Install dependencies
npm install

# Serve with hot-reload for development
npm run serve

# Build for production
npm run build
```

## 3.3. Configuration

The video data is stored in the `data()` function in the `TutorialsView.vue` component. Update this data to change the displayed videos.

# 4. Implementation Details

This project follows the specifications provided in the 9-tutorials.md document, implementing:
- Title section with "Tutorials" heading
- Video grid with 6 embedded YouTube videos
- Reference table with all video links
- Responsive design for different screen sizes