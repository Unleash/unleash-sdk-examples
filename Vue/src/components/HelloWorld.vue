<script setup lang="ts">
import { useFlag, useFlagsStatus } from '@unleash/proxy-client-vue';

const { flagsReady } = useFlagsStatus();
const flagEnabled = useFlag('example-flag');
</script>

<template>
  <div>
    <div v-if="!flagsReady">Loading...</div>
    <div v-else className="card">
      <div v-if="flagEnabled">Feature is enabled</div>
      <div v-else>Feature is disabled</div>
    </div>
    <footer>See <code>README.md</code> for more information.</footer>
  </div>
</template>
