<script setup lang="ts">
import { ref, reactive, onMounted, nextTick, computed, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const active = ref('home')
const pill = reactive({ left: 0, width: 0 })

// Refs to all nav items
const navItems = ref<HTMLElement[]>([])
const setNavItem = (index: number, el: HTMLElement | null) => {
  if (el) navItems.value[index] = el
}

const links = [
  { key: 'home', label: 'Home', to: '/' },
  { key: 'projects', label: 'Projects', to: '/projects' },
  { key: 'about', label: 'About', to: '/about' },
  { key: 'contact', label: 'Contact', to: '/contact' },
]

const setActiveFromRoute = () => {
  const path = route.path
  if (path === '/') active.value = 'home'
  else if (path.includes('projects')) active.value = 'projects'
  else if (path.includes('about')) active.value = 'about'
  else if (path.includes('contact')) active.value = 'contact'
  else active.value = 'home'
}

const updatePill = async () => {
  await nextTick()
  const index = links.findIndex((l) => l.key === active.value)
  const el = navItems.value[index]
  if (!el) return
  pill.left = el.offsetLeft - 8
  pill.width = el.offsetWidth + 16
}

onMounted(() => {
  setActiveFromRoute()
  nextTick(() => updatePill())
  window.addEventListener('resize', updatePill)
})

watch(
  () => route.path,
  () => {
    setActiveFromRoute()
    updatePill()
  },
)

const pillStyle = computed(() => ({
  left: pill.left + 'px',
  width: pill.width + 'px',
}))
</script>

<template>
  <nav class="glass-nav">
    <ul>
      <div class="pill" :style="pillStyle"></div>
      <li
        v-for="(link, i) in links"
        :key="link.key"
        :ref="(el) => setNavItem(i, el as HTMLElement | null)"
      >
        <RouterLink :to="link.to" active-class="active" exact>
          {{ link.label }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.glass-nav {
  margin: 0 auto 1.2rem;
  width: fit-content;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  padding: 0.8rem 1.5rem;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.2);
}

.glass-nav ul {
  list-style: none;
  display: flex;
  gap: 1.6rem;
  margin: 0;
  padding: 0;
  position: relative;
  align-items: center;
}

/*** Sliding pill ***/
.pill {
  position: absolute;
  top: -6px;
  bottom: -6px;
  background: rgba(31, 44, 40, 0.33);
  border-radius: 999px;
  backdrop-filter: blur(6px);
  transition:
    left 0.35s ease,
    width 0.35s ease;
  z-index: 0;
}

/*** Links ***/
.glass-nav a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 450;
  padding: 8px 10px;
  position: relative;
  z-index: 1;
}

/*** Active ***/
.glass-nav a.active {
  color: #d7efff;
  text-shadow: 0 0 10px rgba(200, 230, 255, 0.173);
}
</style>
