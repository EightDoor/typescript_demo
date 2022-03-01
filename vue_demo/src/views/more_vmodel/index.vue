<template>
  多个vue-model绑定
  <comm-card>
    <child-v-model
      v-model:title="title"
      v-model:name="name"
      v-model="defaultValue"
    />
    <div>v-model name- {{ title }}</div>
    <div>v-model name- {{ name }}</div>
    <div>v-model defaultValue- {{ defaultValue }}</div>
  </comm-card>
</template>

<script lang="ts" setup>
import ChildVModel from "./child_vmodel.vue";
import CommCard from "../../components/CommCard.vue";
import { ref } from "vue";

const title = ref("");
const name = ref("");
const defaultValue = ref("");
</script>
<style lang="less" scoped>
.test {
  color: "red";
}
</style>
