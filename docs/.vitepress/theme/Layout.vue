<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <FooterWatermark />
    </template>
    <template #layout-bottom>
      <FixedLanguageSwitcher />
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import FooterWatermark from '../components/FooterWatermark.vue'
import FixedLanguageSwitcher from '../components/FixedLanguageSwitcher.vue'
</script>