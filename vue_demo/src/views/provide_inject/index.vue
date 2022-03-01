<template>
  <comm-card title="prvide_inject">
    <child_provide_inject />
    <button @click="changeProvideValue">更改注入的值</button>
  </comm-card>
</template>
<script lang="ts" setup>
import { onMounted, provide, ref } from "vue";
import CommCard from "../../components/CommCard.vue";
import Child_provide_inject from "./child_provide_inject.vue";

const timeValue = ref(0);
provide("testName", timeValue);

onMounted(() => {
  timeValue.value = Date.now();
});

function changeProvideValue() {
  timeValue.value = Date.now();
}
</script>
