<template>
  <div class="particles-bg"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let animationId = null
let particles = []
let canvas = null
let ctx = null

onMounted(() => {
  initParticles()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})

function initParticles() {
  // 创建 canvas
  canvas = document.createElement('canvas')
  canvas.className = 'particles-canvas'
  document.querySelector('.particles-bg').appendChild(canvas)
  ctx = canvas.getContext('2d')
  
  // 设置 canvas 尺寸
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
  
  // 创建粒子
  createParticles()
  
  // 开始动画
  animate()
}

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function createParticles() {
  const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
  particles = []
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2
    })
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  // 绘制连线
  particles.forEach((p1, i) => {
    particles.forEach((p2, j) => {
      if (i !== j) {
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const opacity = (1 - distance / 150) * 0.3
          ctx.beginPath()
          ctx.strokeStyle = `rgba(229, 160, 0, ${opacity})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    })
  })
  
  // 更新和绘制粒子
  particles.forEach(particle => {
    // 更新位置
    particle.x += particle.vx
    particle.y += particle.vy
    
    // 边界检测
    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
    
    // 绘制粒子
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(229, 160, 0, ${particle.opacity})`
    ctx.fill()
    
    // 添加发光效果
    ctx.shadowBlur = 10
    ctx.shadowColor = '#E5A000'
    ctx.fill()
    ctx.shadowBlur = 0
  })
  
  animationId = requestAnimationFrame(animate)
}
</script>

<style scoped>
.particles-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  pointer-events: none;
  background: linear-gradient(180deg, 
    rgba(20, 23, 34, 0) 0%, 
    rgba(20, 23, 34, 0.5) 50%, 
    rgba(32, 34, 42, 0.8) 100%
  );
}

:deep(.particles-canvas) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
}

/* 移动端优化 */
@media (max-width: 768px) {
  :deep(.particles-canvas) {
    opacity: 0.4;
  }
}
</style>