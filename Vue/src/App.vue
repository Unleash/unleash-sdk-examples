<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { FlagProvider } from '@unleash/proxy-client-vue'

const config = {
  url: 'https://app.unleash-hosted.com/demo/api/frontend',
  clientKey: 'demo-app:dev.95ae66ab673bf467facb68b2487904f4891064d26b47e89ca498063d',
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
