<template>
  <div v-if="isMobile" class="footer-watermark">
    <span class="watermark-text">Utopia V-Dimension</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.footer-watermark {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  pointer-events: none;
  user-select: none;
}

.watermark-text {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  color: #E5A000;
  opacity: 0.4;
  text-transform: uppercase;
  display: block;
  white-space: nowrap;
  padding: 4px 8px;
  border: 1px solid rgba(229, 160, 0, 0.2);
  border-radius: 4px;
  background: rgba(229, 160, 0, 0.03);
  backdrop-filter: blur(10px);
  transition: opacity 0.3s ease;
}

/* 鼠标悬停效果 */
.footer-watermark:hover .watermark-text {
  opacity: 0.6;
}

/* 防止与其他内容重叠 */
@media (max-width: 768px) {
  .VPDoc {
    padding-bottom: 60px !important;
  }
}
</style>