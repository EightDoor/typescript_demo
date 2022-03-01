<template>
  <div class="card">
    <h2>{{ props.title }}</h2>
    <slot />
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="less" scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
}
</style>
