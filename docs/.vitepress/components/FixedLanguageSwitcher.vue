<template>
  <div class="fixed-language-switcher">
    <!-- 触发按钮 -->
    <button 
      class="lang-trigger" 
      @click="toggleMenu"
      :aria-expanded="isOpen"
      aria-label="Select language"
    >
      <svg class="lang-icon" width="18" height="18" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
      </svg>
      <span class="lang-label">{{ currentLangLabel }}</span>
      <svg class="chevron" :class="{ 'chevron-up': isOpen }" width="14" height="14" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
      </svg>
    </button>

    <!-- 语言菜单 -->
    <Transition name="flyout">
      <div v-if="isOpen" class="lang-menu" ref="menuRef">
        <a
          v-for="(locale, index) in locales"
          :key="locale.link"
          class="lang-item"
          :class="{ active: Object.keys(site.locales)[index] === currentLocaleKey }"
          :href="locale.link"
          @click="handleLangClick"
        >
          <span class="lang-text">{{ locale.label }}</span>
        </a>
      </div>
    </Transition>

    <!-- 背景遮罩 -->
    <Transition name="fade">
      <div v-if="isOpen" class="backdrop" @click="closeMenu"></div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData, useRouter } from 'vitepress'

const { site, localeIndex, theme, page } = useData()
const router = useRouter()
const isOpen = ref(false)
const menuRef = ref(null)
const isMobile = ref(false)

// 检查是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

// 获取当前语言配置
const locales = computed(() => {
  const links = []
  const localeKeys = Object.keys(site.value.locales)
  const currentPath = router.route.path
  const base = site.value.base || '/'
  
  localeKeys.forEach(key => {
    const locale = site.value.locales[key]
    const localeLink = locale.link || (key === 'root' ? '/' : `/${key}/`)
    
    // 从当前路径获取相对路径（不包含语言前缀）
    let relativePath = page.value.relativePath
      .replace(/index\.md$/, '')  // 移除 index.md
      .replace(/\.md$/, '')        // 移除所有 .md 后缀
    
    // 如果是语言目录下的文件，去掉语言前缀
    const currentLocalePath = localeIndex.value === 'root' ? '' : localeIndex.value + '/'
    if (currentLocalePath && relativePath.startsWith(currentLocalePath)) {
      relativePath = relativePath.slice(currentLocalePath.length)
    }
    
    // 构建目标链接
    let targetLink
    if (key === 'root') {
      // 英文（根目录）
      targetLink = base + relativePath
    } else {
      // 其他语言
      targetLink = base + key + '/' + relativePath
    }
    
    // 清理链接
    targetLink = targetLink.replace(/\/+/g, '/').replace(/\/$/, '') || '/'
    
    // 如果是首页，确保有尾部斜杠
    if (relativePath === '' || relativePath === '/') {
      if (targetLink !== '/') targetLink += '/'
    }
    
    links.push({
      link: targetLink,
      label: locale.label || key
    })
  })
  
  return links
})

// 获取当前语言的 key
const currentLocaleKey = computed(() => {
  // 直接使用 VitePress 提供的 localeIndex
  return localeIndex.value
})

// 当前语言标签
const currentLangLabel = computed(() => {
  // 从 site.value.locales 中获取当前语言的配置
  const currentLocale = site.value.locales[currentLocaleKey.value]
  if (!currentLocale) return 'English'
  
  const label = currentLocale.label
  
  // 移动端显示简短标签
  if (isMobile.value) {
    const shortLabels = {
      '简体中文': '简中',
      'English': 'EN',
      '繁體中文': '繁中',
      '日本語': '日',
      '한국어': '한',
      'Русский': 'РУ',
      'Español': 'ES',
      'Français': 'FR',
      'Deutsch': 'DE',
      'Italiano': 'IT',
      'العربية': 'AR',
      'हिन्दी': 'HI',
      'Tiếng Việt': 'VI',
      'Bahasa Indonesia': 'ID'
    }
    return shortLabels[label] || label.slice(0, 2).toUpperCase()
  }
  
  return label
})

// 规范化链接
function normalizeLink(link) {
  if (link.startsWith('/')) {
    return link
  }
  return '/' + link
}

// 切换菜单
function toggleMenu() {
  isOpen.value = !isOpen.value
}

// 关闭菜单
function closeMenu() {
  isOpen.value = false
}

// 处理语言点击
function handleLangClick(e) {
  // 让默认导航行为处理跳转
  closeMenu()
}

// 点击外部关闭
function handleClickOutside(e) {
  if (!e.target.closest('.fixed-language-switcher')) {
    closeMenu()
  }
}

// 监听 ESC 键
function handleEscape(e) {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.fixed-language-switcher {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 50;
}

/* 触发按钮 - 使用 VitePress 风格 */
.lang-trigger {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 12px;
  height: 36px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  box-shadow: var(--vp-shadow-1);
}

.lang-trigger:hover {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-2);
}

.lang-icon {
  opacity: 0.8;
}

.chevron {
  margin-left: 2px;
  opacity: 0.6;
  transition: transform 0.25s;
}

.chevron-up {
  transform: rotate(180deg);
}

/* 语言菜单 - 向上展开 */
.lang-menu {
  position: absolute;
  bottom: 100%;
  left: 0;
  margin-bottom: 8px;
  min-width: 128px;
  max-width: 200px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 4px 0;
  box-shadow: var(--vp-shadow-3);
  max-height: 300px;
  overflow-y: auto;
}

/* 语言项 */
.lang-item {
  display: block;
  padding: 8px 16px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.2s;
  white-space: nowrap;
}

.lang-item:hover {
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-brand-1);
}

.lang-item.active {
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.lang-item.active::before {
  content: '✓';
  position: absolute;
  left: 8px;
  font-size: 12px;
}

/* 背景遮罩 - 移动端使用 */
.backdrop {
  display: none;
}

/* 动画效果 */
.flyout-enter-active,
.flyout-leave-active {
  transition: all 0.25s ease;
}

.flyout-enter-from,
.flyout-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .fixed-language-switcher {
    bottom: 16px;
    left: 16px;
  }
  
  .lang-trigger {
    height: 40px;
    padding: 0 14px;
    font-size: 15px;
  }
  
  .lang-menu {
    position: fixed;
    bottom: 60px;
    left: 16px;
    right: 16px;
    max-width: calc(100vw - 32px);
  }
  
  .backdrop {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
}

/* 桌面端增加间距 */
@media (min-width: 769px) {
  .fixed-language-switcher {
    bottom: 30px;
    left: 30px;
  }
}

/* 滚动条样式 */
.lang-menu::-webkit-scrollbar {
  width: 6px;
}

.lang-menu::-webkit-scrollbar-thumb {
  background-color: var(--vp-c-divider);
  border-radius: 3px;
}

.lang-menu::-webkit-scrollbar-thumb:hover {
  background-color: var(--vp-c-text-3);
}
</style>