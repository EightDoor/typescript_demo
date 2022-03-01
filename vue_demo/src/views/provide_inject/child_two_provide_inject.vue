<template>
  子组件 child_tow_provide_inject
  <span style="color: red">{{ data }}</span>
</template>
<script lang="ts" setup>
import { inject } from "vue";

const data = inject("testName");
</script>
