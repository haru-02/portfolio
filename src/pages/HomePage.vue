<script setup lang="ts">
import { onMounted } from 'vue'

const roles = [
  'Software Engineer',
  'Open-Source contributor',
  'cybersec enthusiast',
  'Tech writer',
  'Gamer',
  'Reader',
]
onMounted(() => {
  const textEl = document.querySelector('.typing-content') as HTMLElement | null
  if (!textEl) return
  let i = 0
  let j = 0
  let deleting = false

  function type() {
    const current = roles[i] ?? ''
    if (!textEl) return
    if (!deleting) {
      textEl.textContent = current.slice(0, j++)
      if (j > current.length) {
        deleting = true
        setTimeout(type, 1000)
        return
      }
    } else {
      textEl.textContent = current.slice(0, j--)
      if (j < 0) {
        deleting = false
        i = (i + 1) % roles.length
        j = 0
      }
    }
    setTimeout(type, deleting ? 40 : 70)
  }

  type()
})
</script>

<template>
  <div class="terminal-card">
    <div class="header">
      <img src="/headshot.jpeg" class="hero-image" />
      <div class="header-text">
        <h1>Rahul Balaji</h1>
        <p class="typing-text">
          <span class="typing-content"></span><span class="typing-cursor"></span>
        </p>
      </div>
    </div>
    <p class="intro-paragraph">
      I am Rahul Balaji, a software engineer and cybersecurity enthusiast with a strong foundation
      in advanced computer science. I hold a Master’s degree from the University of Manchester, and
      a Bachelor’s from NIT Rourkela. Over the years, I have gained experience in software
      engineering, systems programming, web development, and security-focused research. I enjoy
      building robust, scalable solutions, contributing to open-source projects, and exploring
      emerging technologies such as AI and functional programming. Whether it’s designing secure web
      platforms, developing interpreters from scratch, or creating innovative cloud-based
      applications, I thrive on solving challenging problems and continuously learning to improve my
      craft. This website serves as a personal portfolio to showcase my experience and projects over
      the years, hope you find this useful!
    </p>
  </div>
</template>

<style scoped>
.intro-paragraph {
  margin-top: 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  max-width: auto;
  color: rgba(255, 255, 255, 0.85);
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
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */

  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 700px;
}

.hero-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  object-position: center top;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 0rem;
}

.header-text h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  line-height: 1;
}

.header-text p {
  font-size: 1.7rem;
  opacity: 0.9;
}

.typing-text {
  font-size: 1.7rem;
  opacity: 0.9;
  display: inline-block;
  white-space: nowrap;
  min-width: 220px;
  min-height: 20px;
  width: auto;
  overflow: hidden;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1.2em;
  background: rgba(255, 255, 255, 0.8);
  margin-left: 2px;
  animation: blink 0.8s infinite;
  vertical-align: middle;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .header-text {
    align-items: center;
  }

  .header-text h1 {
    font-size: 1.5rem;
  }

  .header-text p {
    font-size: 0.9rem;
  }

  .terminal-card {
    margin-top: 2rem;
    padding: 1rem;
  }
}
</style>
