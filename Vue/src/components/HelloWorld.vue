<script setup lang="ts">
import { useFlag, useFlagsStatus } from '@unleash/proxy-client-vue'

const enabled = useFlag('example-flag')
const { flagsReady } = useFlagsStatus()
</script>

<template>
  <div v-if="!flagsReady">Loading...</div>
  <div v-else>
    {{ enabled ? 'Feature is enabled!' : 'Feature is disabled!' }}
  </div>
  <sub>See <code>README.md</code> for more information.</sub>
</template>
