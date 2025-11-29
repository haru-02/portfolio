<template>
  <div class="projects-container terminal-card">
    <h1>Projects</h1>
    <div class="projects-grid">
      <div v-for="p in projects" :key="p.name" class="project-card">
        <img v-if="p.image" :src="p.image" alt="" class="project-image" />
        <div class="project-content">
          <h2>{{ p.name }}</h2>
          <p class="stack">{{ p.stack }}</p>
          <p class="desc">{{ p.description }}</p>

          <div class="links">
            <a v-if="p.demo" :href="p.demo" target="_blank">Live Demo</a>
            <a :href="p.repo" target="_blank">GitHub Repo</a>
          </div>
        </div>
      </div>
    </div>
    <h1>Blogs and Talks</h1>
    <div class="projects-grid">
      <div v-for="p in talks" :key="p.name" class="project-card">
        <img v-if="p.image" :src="p.image" alt="" class="project-image" />
        <div class="project-content">
          <h2>{{ p.name }}</h2>
          <p class="stack">{{ p.stack }}</p>
          <p class="desc">{{ p.description }}</p>

          <div class="links">
            <a v-if="p.demo" :href="p.demo" target="_blank">Live Demo</a>
            <a :href="p.repo" target="_blank">Link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'Wraiter',
    stack: 'Cloudflare Workers • AI • BHVR Stack (Bun, Hono, Vite+React) • TypeScript',
    description:
      'A full-stack AI-powered text editor built with Cloudflare Workers. Features streaming AI chat, real-time file management, and a fully serverless backend using D1 and Workers AI.',
    demo: 'https://wraiter-9xs.pages.dev/',
    repo: 'https://github.com/haru-02/cf_ai_wraiter',
    image: '/wraiter.png',
  },
  {
    name: 'Desert Monkey',
    stack: 'OCaml • Dune • Alcotest • Systems Programming',
    description:
      'A full functional interpreter built from scratch in OCaml supporting functions, recursion, lists, conditionals, and error handling. Includes a full test suite using Alcotest.',
    demo: null,
    repo: 'https://github.com/haru-02/desert_monkey',
    image: '/desert_monkey.png',
  },
  {
    name: 'ESBMC Python Frontend',
    stack: 'C++ • Python • SMT Solvers • Static Analysis',
    description:
      'Enhanced ESBMC’s Python backend by converting Python code to SMT formulas for vulnerability detection. Added support for type annotations, range loops, and mutation tests.',
    demo: null,
    repo: 'https://github.com/haru-02/esbmc',
    image: '/esbmc.png',
  },
  {
    name: 'Anomaly Detection System',
    stack: 'Python • Pandas • Numpy • Real-time Analytics',
    description:
      'A real-time anomaly detection engine for continuous data streams, using STL decomposition to handle concept drift and seasonal variation. Built for high throughput.',
    demo: null,
    repo: 'http://github.com/haru-02/data-stream-anomaly',
    image: '/anomaly.png',
  },
  {
    name: 'Secure mobile payment system',
    stack: 'Cryptography • Maths • System design • Protocol',
    description:
      'The project entails a whitepaper design for a secure mobile payment system for a vending machine, using the most minimum features available, without any shared keys between the user and the vending machine.',
    demo: null,
    repo: 'https://github.com/haru-02/cybersecurity-projects/blob/main/secure-mobile-payment.pdf',
    image: '/payment.png',
  },
  {
    name: 'System Governance portfolio',
    stack: 'System Governance • Audit • System design • Risk analysis',
    description:
      'A 70 page system design and governance report of a traffic offense record system presented to a panel of KPMG analysts with a team.',
    demo: null,
    repo: 'https://github.com/haru-02/cybersecurity-projects/blob/main/SystemsPortfolio.pdf',
    image: '/payment.png',
  },
]

const talks = [
  {
    name: 'Asura Insights',
    stack: 'Cybersecurity • Software Engineering • Secure solutions • Design Principles',
    description:
      'A bunch of articles written by me, and published to asura insights on topics of cybersecurity, software engineering, secure solutions',
    demo: null,
    repo: 'https://asurainsights.com/',
    image: '/asura.webp',
  },
  {
    name: 'Bsides Leeds',
    stack: 'Talk • Software Engineering • Secure solutions • Design Principles',
    description: 'A talk about why you should formally verify most of your code.',
    demo: null,
    repo: 'https://youtu.be/_Je1Bs_rsVo?si=hrVr-pSNW4l9nMxe',
    image: '/BsidesLeeds.jpeg',
  },
]
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.terminal-card {
  width: 95vw;
  height: auto;
  max-width: 1100px;

  background: rgba(0, 0, 0, 0.35); /* transparent dark overlay */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(8px);

  border-radius: 1.5rem; /* soft rounded corners */
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  padding: 2.5rem;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  box-sizing: border-box;
}

.project-card {
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.3rem;
  padding: 1.2rem;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.18);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 35px rgba(0, 0, 0, 0.25);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 1rem;
  margin-bottom: 1rem;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.stack {
  font-size: 0.95rem;
  opacity: 0.8;
}

.desc {
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.45;
}

.links {
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
}

.links a {
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  text-decoration: none;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.12);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: background 0.2s ease;
}

.links a:hover {
  background: rgba(255, 255, 255, 0.25);
}
</style>
