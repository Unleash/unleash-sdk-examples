<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { FlagProvider } from '@unleash/proxy-client-vue'

const config = {
  url: 'https://app.unleash-hosted.com/demo/api/frontend',
  clientKey: 'codesandbox:dev.b32907f5ced021c0443ad770b371c81191683c96e6ae8e003876d509',
  refreshInterval: 5,
  metricsInterval: 5,
  appName: 'codesandbox-vue'
}
</script>

<template>
  <FlagProvider :config="config">
    <HelloWorld />
  </FlagProvider>
</template>
