export const projects = [
  {
    id: 1,
    title: "Session Timer",
    description:
      "React + Vite session timer with stopwatch, session history, and time-range stats so working hours are visible and auditable instead of estimated. Uses Firebase Auth/Firestore with offline-first localStorage to sync sessions across devices, even when the backend is unavailable.",
    tech: ["React", "Firebase", "Vite", "Vitest"],
    github: null,
    live: "https://timer.mattgoldberg.dev",
    image: "/projects/session-timer.png"
  },
  {
    id: 2,
    title: "Developer Journal Website",
    description:
      "Led a 10-person engineering team using Agile sprints to ship a developer journal web app on schedule. Designed a GitHub Actions CI/CD pipeline with Puppeteer E2E tests and PWA support to catch UI regressions early, enable offline use, and keep deployments reliable.",
    tech: ["JavaScript", "GitHub Actions", "Puppeteer", "PWA"],
    github: "https://github.com/cse110-sp24-group4/cse110-sp24-group4",
    live: null,
    image: "/projects/devdog.png"
  },
  {
    id: 3,
    title: "3D Scene Renderer",
    description:
      "C++/OpenGL 3D renderer implementing model-view-projection transforms, near-plane clipping, and perspective-correct depth interpolation for accurate z-buffering. Renders indexed triangle meshes via a custom scene graph to support hierarchical transforms and efficient multi-object scenes.",
    tech: ["C++", "OpenGL", "Graphics"],
    github: null,
    live: null,
    image: "/projects/3d-scene-renderer.png"
  },
  {
    id: 4,
    title: "Domino Tile Image Classifier",
    description:
      "PyTorch CNN that classifies domino tiles from a custom 3,000+ image dataset, achieving 99%+ test accuracy. Built the full data pipeline (collection, labeling, augmentation) and evaluation to ensure the model is robust to real-world lighting and orientation.",
    tech: ["PyTorch", "Python", "CNN"],
    github: "https://github.com/mattqgoldberg/domino-counter",
    live: null,
    image: "/projects/domino.png"
  }
]
