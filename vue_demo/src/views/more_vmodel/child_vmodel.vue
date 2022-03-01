<template>
  <input
    type="text"
    :value="props.title"
    @input="emit('update:title', $event.target.value)"
  />
  <input
    type="text"
    :value="props.name"
    @input="emit('update:name', $event.target.value)"
  />
  <input
    type="text"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>
<script lang="ts" setup>
interface Props {
  title: string;
  name: string;
  // 默认的是这个 v-model
  modelValue: string;
}
const props = defineProps<Props>();
const emit = defineEmits(["update:title", "update:name", "update:modelValue"]);
</script>
